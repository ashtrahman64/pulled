import { Link } from "@tanstack/react-router";
import { Bookmark, BookmarkCheck } from "lucide-react";
import { useSyncExternalStore } from "react";
import { Bottle } from "@/components/bottle";
import { GradeBadge } from "@/components/grade-badge";
import { ScoreMeter } from "@/components/score-meter";
import { Button } from "@/components/ui/button";
import { relatedFiles } from "@/lib/catalog";
import { FileCard } from "@/components/file-card";
import type { FragranceFile } from "@/lib/types";
import { getPins, togglePin, EMPTY_PINS } from "@/lib/storage";
import { cn } from "@/lib/utils";

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener("pulled-pins", callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener("pulled-pins", callback);
  };
}

function usePinned(slug: string) {
  const pins = useSyncExternalStore(subscribe, getPins, () => EMPTY_PINS);
  return pins.includes(slug);
}

export function FileReport({
  file,
  citations,
}: {
  file: FragranceFile;
  citations?: string[];
}) {
  const pinned = usePinned(file.slug);
  const related = relatedFiles(file);

  return (
    <article className="mx-auto max-w-5xl px-4 pb-20 sm:px-6">
      <div className="rise-in grid grid-cols-1 gap-8 pt-8 md:grid-cols-2 md:items-start">
        <div>
          <p className="text-xs uppercase tracking-wide text-muted">
            {file.live ? "Live file" : "Desk file"} · {file.brand}
          </p>
          <div className="mt-3 flex flex-wrap items-end justify-between gap-4">
            <h1 className="font-display text-4xl leading-none tracking-tight text-fg sm:text-5xl">
              {file.name}
            </h1>
            <Button
              type="button"
              variant={pinned ? "primary" : "outline"}
              onClick={() => {
                togglePin(file.slug);
                window.dispatchEvent(new Event("pulled-pins"));
              }}
            >
              {pinned ? <BookmarkCheck className="size-4" /> : <Bookmark className="size-4" />}
              {pinned ? "Saved" : "Save"}
            </Button>
          </div>
          <p className="mt-4 max-w-xl text-base text-muted">
            Inspired by {file.inspiredBy}. {file.concentration}. {file.priceBand}.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {file.seasons.map((season) => (
              <Chip key={season}>{season}</Chip>
            ))}
            {file.occasions.map((occasion) => (
              <Chip key={occasion}>{occasion}</Chip>
            ))}
            <Chip>{file.family}</Chip>
          </div>
        </div>
        <div className="flex items-end justify-between gap-4 md:flex-col md:items-end">
          <Bottle file={file} size="lg" />
          <GradeBadge scores={file.scores} />
        </div>
      </div>

      <section className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="rounded-xl bg-surface p-5 shadow-border sm:p-6">
          <p className="text-xs uppercase tracking-wide text-muted">What it smells like</p>
          <h2 className="mt-2 font-display text-2xl text-fg">Even a kid could picture this</h2>
          <p className="mt-4 text-lg leading-relaxed text-fg">{file.kidSimpleSmell}</p>
        </div>
        <div className="rounded-xl bg-surface p-5 shadow-border sm:p-6">
          <p className="text-xs uppercase tracking-wide text-muted">The grades</p>
          <ScoreMeter scores={file.scores} className="mt-5" />
        </div>
      </section>

      <section className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
        <NoteCard label="First sniff" text={file.firstSniff} />
        <NoteCard label="After a little while" text={file.middle} />
        <NoteCard label="What is left" text={file.leftover} />
      </section>

      <section className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="rounded-xl bg-surface p-5 shadow-border sm:p-6">
          <h2 className="font-display text-2xl text-fg">The crowd</h2>
          <p className="mt-3 leading-relaxed text-muted">{file.crowdTake}</p>
          <p className="mt-4 text-sm text-faint">{file.sources}</p>
        </div>
        <div className="rounded-xl bg-surface p-5 shadow-border sm:p-6">
          <h2 className="font-display text-2xl text-fg">Blind buy</h2>
          <p className="mt-3 leading-relaxed text-muted">{file.blindBuyVerdict}</p>
          <p className="mt-5 text-sm font-medium text-fg">How to wear it</p>
          <p className="mt-2 text-muted">{file.sprayAdvice}</p>
          <p className="mt-4 text-sm text-muted">
            {file.longevityHours} · {file.projectionLabel} projection
          </p>
        </div>
      </section>

      {file.warnings.length > 0 ? (
        <section className="mt-6 rounded-xl bg-surface p-5 shadow-border sm:p-6">
          <h2 className="font-display text-2xl text-fg">Watch-outs</h2>
          <ul className="mt-3 grid gap-2">
            {file.warnings.map((warning) => (
              <li key={warning} className="text-muted">
                {warning}
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {citations && citations.length > 0 ? (
        <section className="mt-6">
          <p className="text-xs uppercase tracking-wide text-muted">Live sources</p>
          <ul className="mt-3 grid gap-2">
            {citations.map((url) => (
              <li key={url} className="truncate text-sm">
                <a href={url} className="text-muted underline-offset-4 hover:text-fg hover:underline">
                  {url.replace(/^https?:\/\//, "")}
                </a>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {related.length > 0 ? (
        <section className="mt-12">
          <div className="flex items-baseline justify-between gap-3">
            <h2 className="font-display text-2xl text-fg">Nearby files</h2>
            <Link to="/" className="text-sm text-muted hover:text-fg">
              All files
            </Link>
          </div>
          <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {related.map((item) => (
              <FileCard key={item.slug} file={item} />
            ))}
          </div>
        </section>
      ) : null}
    </article>
  );
}

function Chip({ children }: { children: string }) {
  return (
    <span className="rounded-full bg-raised px-3 py-1 text-xs capitalize text-muted">
      {children}
    </span>
  );
}

function NoteCard({ label, text }: { label: string; text: string }) {
  return (
    <div className="rounded-xl bg-surface p-5 shadow-border">
      <p className="text-xs uppercase tracking-wide text-muted">{label}</p>
      <p className={cn("mt-3 leading-relaxed text-fg")}>{text}</p>
    </div>
  );
}
