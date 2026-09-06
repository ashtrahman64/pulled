import { useNavigate } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { bestMatch, searchCatalog } from "@/lib/catalog";

export function SearchBox({ autoFocus = false }: { autoFocus?: boolean }) {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const suggestions = useMemo(
    () => (query.trim().length < 2 ? [] : searchCatalog(query).slice(0, 6)),
    [query],
  );

  function go(raw: string) {
    const value = raw.trim();
    if (!value) return;
    const match = bestMatch(value);
    if (match?.exact) {
      void navigate({ to: "/file/$slug", params: { slug: match.file.slug } });
      return;
    }
    if (match && match.hits.length === 1 && match.hits[0].name.toLowerCase() === value.toLowerCase()) {
      void navigate({ to: "/file/$slug", params: { slug: match.file.slug } });
      return;
    }
    void navigate({ to: "/research", search: { q: value } });
  }

  return (
    <form
      className="relative w-full"
      onSubmit={(event) => {
        event.preventDefault();
        go(query);
      }}
    >
      <div className="flex min-w-0 gap-2">
        <div className="relative min-w-0 flex-1">
          <Search className="pointer-events-none absolute top-1/2 left-4 size-4 -translate-y-1/2 text-faint" />
          <Input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Asad, 9pm, Hawas, or any bottle…"
            className="h-14 rounded-xl pl-11 text-base"
            autoFocus={autoFocus}
            autoComplete="off"
            aria-label="Search a cologne"
          />
        </div>
        <Button type="submit" size="lg" className="h-14 shrink-0 rounded-xl px-5">
          File it
        </Button>
      </div>
      {suggestions.length > 0 ? (
        <ul className="absolute z-10 mt-2 w-full overflow-hidden rounded-xl bg-surface shadow-[0_0_0_1px_rgb(241_238_232/0.12)]">
          {suggestions.map((item) => (
            <li key={item.slug}>
              <button
                type="button"
                className="flex w-full items-baseline justify-between gap-3 px-4 py-3 text-left hover:bg-raised"
                onClick={() =>
                  void navigate({ to: "/file/$slug", params: { slug: item.slug } })
                }
              >
                <span className="text-sm text-fg">
                  {item.brand} {item.name}
                </span>
                <span className="truncate text-xs text-muted">{item.inspiredBy}</span>
              </button>
            </li>
          ))}
          <li>
            <button
              type="button"
              className="flex w-full px-4 py-3 text-left text-sm text-muted hover:bg-raised hover:text-fg"
              onClick={() => go(query)}
            >
              Research “{query.trim()}” live
            </button>
          </li>
        </ul>
      ) : null}
    </form>
  );
}
