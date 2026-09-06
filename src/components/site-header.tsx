import { Link } from "@tanstack/react-router";
import { Bookmark } from "lucide-react";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-line bg-bg/90 backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link to="/" className="flex items-baseline gap-2">
          <span className="font-display text-xl italic tracking-tight text-fg">
            Pulled
          </span>
          <span className="hidden text-xs uppercase tracking-wide text-muted sm:inline">
            Crowd files
          </span>
        </Link>
        <nav className="flex items-center gap-1">
          <Link
            to="/"
            className="inline-flex h-11 items-center px-3 text-sm text-muted hover:text-fg"
          >
            Files
          </Link>
          <Link
            to="/saved"
            className="inline-flex h-11 items-center gap-1.5 px-3 text-sm text-muted hover:text-fg"
          >
            <Bookmark className="size-4" />
            Saved
          </Link>
        </nav>
      </div>
    </header>
  );
}
