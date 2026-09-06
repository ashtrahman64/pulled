import { createFileRoute, Link } from "@tanstack/react-router";
import { useCallback, useSyncExternalStore } from "react";
import { FileReport } from "@/components/file-report";
import { SearchBox } from "@/components/search-box";
import { SiteHeader } from "@/components/site-header";
import { getBySlug } from "@/lib/catalog";
import { getLiveFiles } from "@/lib/storage";

export const Route = createFileRoute("/file/$slug")({
  component: FilePage,
});

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
}

function FilePage() {
  const { slug } = Route.useParams();
  const catalog = getBySlug(slug);
  const getLive = useCallback(() => getLiveFiles()[slug] ?? null, [slug]);
  const live = useSyncExternalStore(subscribe, getLive, () => null);
  const file = catalog ?? live;

  return (
    <div className="min-h-dvh">
      <SiteHeader />
      <div className="mx-auto max-w-5xl px-4 pt-6 sm:px-6">
        <SearchBox />
      </div>
      {file ? (
        <FileReport file={file} />
      ) : (
        <div className="mx-auto max-w-lg px-4 py-20 text-center">
          <h1 className="font-display text-3xl text-fg">No file with that name</h1>
          <p className="mt-3 text-muted">
            It may be a live report that only lives on this device, or a bad link.
          </p>
          <Link to="/" className="mt-6 inline-flex h-11 items-center text-sm text-accent">
            Back to the desk
          </Link>
        </div>
      )}
    </div>
  );
}
