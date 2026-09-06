import { Link } from "@tanstack/react-router";
import { Bottle } from "@/components/bottle";
import { letterGrade, overallScore } from "@/lib/grades";
import type { FragranceFile } from "@/lib/types";
import { cn } from "@/lib/utils";

export function FileCard({
  file,
  className,
}: {
  file: FragranceFile;
  className?: string;
}) {
  const overall = overallScore(file.scores);
  return (
    <Link
      to="/file/$slug"
      params={{ slug: file.slug }}
      className={cn(
        "group flex min-w-0 gap-4 overflow-hidden rounded-xl bg-surface p-4 shadow-border transition-[box-shadow,transform] duration-150 ease-out hover:shadow-border-hover active:scale-[0.99]",
        className,
      )}
    >
      <Bottle file={file} size="sm" className="shrink-0" />
      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <p className="text-xs uppercase tracking-wide text-muted">{file.brand}</p>
            <h3 className="mt-1 font-display text-xl leading-tight break-words text-fg group-hover:text-accent">
              {file.name}
            </h3>
          </div>
          <span className="font-display text-2xl leading-none text-fg">{letterGrade(overall)}</span>
        </div>
        <p className="mt-2 truncate text-sm text-muted">Inspired by {file.inspiredBy}</p>
        <div className="mt-3 flex flex-wrap gap-2 text-xs text-muted">
          <span>Pull {file.scores.pull.toFixed(1)}</span>
          <span className="text-faint">/</span>
          <span>{file.longevityHours}</span>
          <span className="text-faint">/</span>
          <span>{file.projectionLabel}</span>
        </div>
      </div>
    </Link>
  );
}
