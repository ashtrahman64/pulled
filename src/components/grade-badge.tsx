import { letterGrade, overallScore } from "@/lib/grades";
import type { Scores } from "@/lib/types";
import { cn } from "@/lib/utils";

export function GradeBadge({
  scores,
  className,
}: {
  scores: Scores;
  className?: string;
}) {
  const overall = overallScore(scores);
  return (
    <div
      className={cn(
        "flex size-20 flex-col items-center justify-center rounded-xl bg-raised shadow-[0_0_0_1px_rgb(241_238_232/0.12)]",
        className,
      )}
    >
      <span className="font-display text-3xl leading-none tracking-tight text-fg">
        {letterGrade(overall)}
      </span>
      <span className="mt-1 text-xs uppercase tracking-wide text-muted">
        {overall.toFixed(1)}
      </span>
    </div>
  );
}
