import { useQuery } from "@tanstack/react-query";
import { createFileRoute, Link, redirect } from "@tanstack/react-router";
import { useEffect } from "react";
import { FileCard } from "@/components/file-card";
import { FileReport } from "@/components/file-report";
import { SearchBox } from "@/components/search-box";
import { SiteHeader } from "@/components/site-header";
import { bestMatch } from "@/lib/catalog";
import { researchFragrance } from "@/lib/research";
import { getLiveFiles, liveSlugForQuery, saveLiveFile } from "@/lib/storage";

type ResearchSearch = { q: string };

export const Route = createFileRoute("/research")({
  validateSearch: (search: Record<string, unknown>): ResearchSearch => ({
    q: typeof search.q === "string" ? search.q : "",
  }),
  beforeLoad: ({ search }) => {
    const q = search.q.trim();
    if (!q) throw redirect({ to: "/" });
    const match = bestMatch(q);
    if (match?.exact) {
      throw redirect({ to: "/file/$slug", params: { slug: match.file.slug } });
    }
  },
  component: ResearchPage,
});

function ResearchPage() {
  const { q } = Route.useSearch();
  const cached = typeof window !== "undefined" ? findCached(q) : null;
  const closeHits = bestMatch(q)?.hits.slice(0, 3) ?? [];

  const query = useQuery({
    queryKey: ["research", q],
    enabled: Boolean(q) && !cached,
    staleTime: Infinity,
    retry: 0,
    queryFn: async () => {
      const result = await researchFragrance({ data: { query: q } });
      if (!result.ok) throw new Error(result.error);
      return result;
    },
  });

  const file = cached ?? query.data?.file ?? null;
  const citations = query.data?.citations ?? [];
  const error = query.error?.message;

  useEffect(() => {
    if (file?.live) saveLiveFile(file);
  }, [file]);

  return (
    <div className="min-h-dvh">
      <SiteHeader />
      <div className="mx-auto max-w-5xl px-4 pt-6 sm:px-6">
        <SearchBox />
      </div>

      {query.isFetching && !file ? (
        <div className="mx-auto max-w-xl px-4 py-16 text-center">
          <p className="text-xs uppercase tracking-wide text-muted">Live file</p>
          <h1 className="mt-3 font-display text-3xl text-fg">Opening “{q}”</h1>
          <p className="mt-4 text-muted">
            Searching Fragrantica, Reddit, and X for pull, compliments, longevity, and whether this is a
            safe blind buy. This can take a little while.
          </p>
          <p className="searching-line mt-6 text-sm text-faint">Reading the crowd…</p>
          {closeHits.length > 0 ? (
            <div className="mt-10 text-left">
              <p className="text-xs uppercase tracking-wide text-muted">Already on the desk</p>
              <div className="mt-4 grid grid-cols-1 gap-3">
                {closeHits.map((hit) => (
                  <FileCard key={hit.slug} file={hit} />
                ))}
              </div>
            </div>
          ) : null}
        </div>
      ) : null}

      {error && !file ? (
        <div className="mx-auto max-w-lg px-4 py-20 text-center">
          <h1 className="font-display text-3xl text-fg">Could not open a live file</h1>
          <p className="mt-3 text-muted">{error}</p>
          <Link to="/" className="mt-6 inline-flex h-11 items-center text-sm text-accent">
            Back to the desk
          </Link>
        </div>
      ) : null}

      {file ? <FileReport file={file} citations={citations} /> : null}
    </div>
  );
}

function findCached(query: string) {
  const live = getLiveFiles();
  const needle = query.trim().toLowerCase();
  const bySlug = live[liveSlugForQuery(query)];
  if (bySlug) return bySlug;
  return (
    Object.values(live).find(
      (item) =>
        item.aliases.some((alias) => alias.toLowerCase() === needle) ||
        `${item.brand} ${item.name}`.toLowerCase() === needle ||
        item.name.toLowerCase() === needle,
    ) ?? null
  );
}
