import { cn } from "@/lib/utils";
import type { FragranceFile } from "@/lib/types";

type Props = {
  file: Pick<FragranceFile, "juice" | "bottle" | "name">;
  className?: string;
  size?: "sm" | "md" | "lg";
};

const sizeMap = {
  sm: "h-28 w-16",
  md: "h-40 w-20",
  lg: "h-56 w-28",
};

export function Bottle({ file, className, size = "md" }: Props) {
  const shape =
    file.bottle === "flacon"
      ? "rounded-t-[40%] rounded-b-[18%]"
      : file.bottle === "slab"
        ? "rounded-sm"
        : file.bottle === "taper"
          ? "rounded-t-sm rounded-b-[28%]"
          : "rounded-t-md rounded-b-lg";

  return (
    <div
      className={cn(
        "relative flex flex-col items-center justify-end",
        sizeMap[size],
        className,
      )}
      aria-hidden="true"
    >
      <div className="mb-1 h-3 w-6 rounded-sm bg-fg/25" />
      <div className="mb-0.5 h-4 w-3 bg-fg/20" />
      <div
        className={cn(
          "relative h-full w-3/4 overflow-hidden shadow-border",
          shape,
        )}
        style={{ background: "rgb(241 238 232 / 0.04)" }}
      >
        <div
          className="absolute inset-x-0 bottom-0 h-[78%]"
          style={{
            background: `linear-gradient(180deg, color-mix(in oklab, ${file.juice} 70%, white) 0%, ${file.juice} 100%)`,
          }}
        />
        <div className="absolute inset-y-2 left-[12%] w-px bg-fg/20" />
        <div className="absolute inset-x-0 top-[20%] h-px bg-fg/10" />
      </div>
      <span className="sr-only">{file.name}</span>
    </div>
  );
}
