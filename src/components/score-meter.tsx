import { SCORE_META, scoreWord } from "@/lib/grades";
import type { Scores } from "@/lib/types";
import { cn } from "@/lib/utils";

export function ScoreMeter({
  scores,
  className,
}: {
  scores: Scores;
  className?: string;
}) {
  return (
    <div className={cn("grid gap-4", className)}>
      {SCORE_META.map((meta, index) => {
        const value = scores[meta.key];
        const width = `${Math.max(4, Math.min(100, value * 10))}%`;
        return (
          <div key={meta.key} className="grid gap-1.5">
            <div className="flex items-baseline justify-between gap-3">
              <div>
                <p className="text-sm font-medium text-fg">{meta.label}</p>
                <p className="text-xs text-muted">{meta.hint}</p>
              </div>
              <div className="text-right">
                <p className="font-display text-xl tabular-nums leading-none text-fg">
                  {value.toFixed(1)}
                </p>
                <p className="mt-1 text-xs uppercase tracking-wide text-muted">
                  {scoreWord(value)}
                </p>
              </div>
            </div>
            <div className="h-1.5 overflow-hidden rounded-full bg-raised">
              <div
                className="meter-fill h-full rounded-full bg-accent"
                style={{
                  width,
                  animationDelay: `${index * 40}ms`,
                }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
