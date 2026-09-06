import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { FileCard } from "@/components/file-card";
import { SearchBox } from "@/components/search-box";
import { SiteHeader } from "@/components/site-header";
import { CATALOG } from "@/lib/catalog";
import { overallScore } from "@/lib/grades";
import type { FragranceFile } from "@/lib/types";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({ component: Home });

type FilterId =
  | "all"
  | "pull"
  | "blind"
  | "beast"
  | "summer"
  | "night"
  | "lattafa"
  | "afnan"
  | "rayhaan";

const FILTERS: { id: FilterId; label: string }[] = [
  { id: "all", label: "All files" },
  { id: "pull", label: "Highest pull" },
  { id: "blind", label: "Safer blind buys" },
  { id: "beast", label: "Beast mode" },
  { id: "summer", label: "Heat" },
  { id: "night", label: "Night out" },
  { id: "lattafa", label: "Lattafa" },
  { id: "afnan", label: "Afnan" },
  { id: "rayhaan", label: "Rayhaan" },
];

function applyFilter(files: FragranceFile[], filter: FilterId) {
  const copy = [...files];
  if (filter === "pull") {
    return copy.sort((a, b) => b.scores.pull - a.scores.pull);
  }
  if (filter === "blind") {
    return copy
      .filter((file) => file.scores.blindBuy >= 7.5)
      .sort((a, b) => b.scores.blindBuy - a.scores.blindBuy);
  }
  if (filter === "beast") {
    return copy.filter((file) => file.projectionLabel === "Beast");
  }
  if (filter === "summer") {
    return copy.filter((file) => file.seasons.includes("summer"));
  }
  if (filter === "night") {
    return copy.filter((file) => file.occasions.includes("night") || file.occasions.includes("date"));
  }
  if (filter === "lattafa") return copy.filter((file) => file.brand === "Lattafa");
  if (filter === "afnan") return copy.filter((file) => file.brand === "Afnan");
  if (filter === "rayhaan") return copy.filter((file) => file.brand === "Rayhaan");
  return copy.sort((a, b) => overallScore(b.scores) - overallScore(a.scores));
}

function Home() {
  const [filter, setFilter] = useState<FilterId>("all");
  const files = useMemo(() => applyFilter(CATALOG, filter), [filter]);
  const magnets = useMemo(
    () => [...CATALOG].sort((a, b) => b.scores.pull - a.scores.pull).slice(0, 3),
    [],
  );

  return (
    <div className="min-h-dvh">
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
        <section className="rise-in pt-12 sm:pt-16">
          <p className="text-xs uppercase tracking-wide text-muted">
            Fragrantica · Reddit · X · the cheap-cologne desk
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl leading-none tracking-tight text-fg sm:text-6xl">
            Ask about any cheap cologne. Get the honest file.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            Pull on women, compliment rate, how long it lasts, how far it projects, and whether you should
            blind buy. The smell is written so a five-year-old could picture it.
          </p>
          <div className="mt-8 max-w-2xl">
            <SearchBox autoFocus />
          </div>
        </section>

        <section className="mt-16">
          <p className="text-xs uppercase tracking-wide text-muted">Highest pull right now</p>
          <div className="mt-5 grid grid-cols-1 gap-4 lg:grid-cols-3">
            {magnets.map((file) => (
              <FileCard key={file.slug} file={file} />
            ))}
          </div>
        </section>

        <section className="mt-16">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="font-display text-3xl text-fg">The desk</h2>
              <p className="mt-2 text-sm text-muted">
                {files.length} files. Anything missing? Type it above and we will research live.
              </p>
            </div>
          </div>
          <div className="-mx-4 mt-6 max-w-full min-w-0 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0">
            <div className="flex w-max gap-2 sm:w-auto sm:flex-wrap">
            {FILTERS.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setFilter(item.id)}
                className={cn(
                  "h-10 shrink-0 rounded-full px-4 text-sm transition-colors duration-150",
                  filter === item.id
                    ? "bg-accent text-accent-fg"
                    : "bg-raised text-muted hover:text-fg",
                )}
              >
                {item.label}
              </button>
            ))}
            </div>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {files.map((file) => (
              <FileCard key={file.slug} file={file} />
            ))}
          </div>
        </section>

        <section className="mt-20 grid grid-cols-1 gap-8 border-t border-line pt-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <h2 className="font-display text-2xl text-fg">How a file is graded</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Scores are a synthesis of Fragrantica, r/fragranceclones, r/fragrance, and public X chatter —
              not a lab test. Skin, weather, and batch all cheat. Treat a 9 as “people keep saying this,”
              not a promise.
            </p>
          </div>
          <dl className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-3">
            <GradeNote
              title="Pull"
              body="Would a woman tend to like this on a man? Girlfriend tests and female compliment reports weigh more than bro-hype."
            />
            <GradeNote
              title="Compliments"
              body="How often wearers get stopped. Loud is not the same as liked — both show up here."
            />
            <GradeNote
              title="Longevity / projection"
              body="Hours on skin and how far the smell walks. Beast means strangers know. Intimate means a hug knows."
            />
            <GradeNote
              title="Blind buy"
              body="How safe it is without a sample. Harsh openings, polarizing DNA, and dessert bombs get docked."
            />
          </dl>
        </section>
      </main>
    </div>
  );
}

function GradeNote({ title, body }: { title: string; body: string }) {
  return (
    <div>
      <dt className="text-sm font-medium text-fg">{title}</dt>
      <dd className="mt-1 text-sm leading-relaxed text-muted">{body}</dd>
    </div>
  );
}
