import * as React from "react";
import { cn } from "@/lib/utils";

export function Input({ className, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      className={cn(
        "h-12 w-full rounded-lg bg-raised px-4 text-base text-fg shadow-[0_0_0_1px_rgb(241_238_232/0.12)] placeholder:text-faint focus-visible:outline-none focus-visible:shadow-[0_0_0_1px_rgb(241_238_232/0.35)]",
        className,
      )}
      {...props}
    />
  );
}
