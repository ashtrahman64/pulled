import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useSyncExternalStore } from "react";
import { FileCard } from "@/components/file-card";
import { SearchBox } from "@/components/search-box";
import { SiteHeader } from "@/components/site-header";
import { CATALOG, getBySlug } from "@/lib/catalog";
import { getLiveFiles, getPins, EMPTY_PINS } from "@/lib/storage";

export const Route = createFileRoute("/saved")({ component: SavedPage });

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener("pulled-pins", callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener("pulled-pins", callback);
  };
}

function SavedPage() {
  const pins = useSyncExternalStore(subscribe, getPins, () => EMPTY_PINS);
  const files = useMemo(() => {
    const live = typeof window === "undefined" ? {} : getLiveFiles();
    return pins
      .map((slug) => getBySlug(slug) ?? live[slug] ?? null)
      .filter((file) => file !== null);
  }, [pins]);

  return (
    <div className="min-h-dvh">
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
        <div className="pt-8">
          <SearchBox />
        </div>
        <h1 className="mt-10 font-display text-4xl text-fg">Saved files</h1>
        <p className="mt-2 text-muted">Kept on this device. Live reports stay here too.</p>
        {files.length === 0 ? (
          <div className="mt-12 max-w-lg">
            <p className="text-muted">
              Nothing pinned yet. Open a file and save it, or start with a known magnet.
            </p>
            <div className="mt-6 grid grid-cols-1 gap-4">
              {CATALOG.slice(0, 3).map((file) => (
                <FileCard key={file.slug} file={file} />
              ))}
            </div>
            <Link to="/" className="mt-6 inline-flex h-11 items-center text-sm text-accent">
              Browse the desk
            </Link>
          </div>
        ) : (
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {files.map((file) => (
              <FileCard key={file.slug} file={file} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
