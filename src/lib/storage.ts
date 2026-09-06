import type { FragranceFile } from "./types";
import { slugify } from "./utils";

const PINS_KEY = "pulled:pins";
const LIVE_KEY = "pulled:live-files";
const RECENT_KEY = "pulled:recent";

export const EMPTY_PINS: string[] = [];
const EMPTY_LIVE: Record<string, FragranceFile> = {};
const EMPTY_RECENT: string[] = [];

let pinsRaw: string | null = null;
let pinsCache: string[] = EMPTY_PINS;
let liveRaw: string | null = null;
let liveCache: Record<string, FragranceFile> = EMPTY_LIVE;
let recentRaw: string | null = null;
let recentCache: string[] = EMPTY_RECENT;

export function getPins(): string[] {
  if (typeof window === "undefined") return EMPTY_PINS;
  const raw = window.localStorage.getItem(PINS_KEY);
  if (raw === pinsRaw) return pinsCache;
  pinsRaw = raw;
  if (!raw) {
    pinsCache = EMPTY_PINS;
    return pinsCache;
  }
  try {
    pinsCache = JSON.parse(raw) as string[];
  } catch {
    pinsCache = EMPTY_PINS;
  }
  return pinsCache;
}

export function isPinned(slug: string) {
  return getPins().includes(slug);
}

export function togglePin(slug: string) {
  const pins = getPins();
  const next = pins.includes(slug)
    ? pins.filter((item) => item !== slug)
    : [slug, ...pins];
  window.localStorage.setItem(PINS_KEY, JSON.stringify(next));
  pinsRaw = JSON.stringify(next);
  pinsCache = next;
  return next;
}

export function getLiveFiles(): Record<string, FragranceFile> {
  if (typeof window === "undefined") return EMPTY_LIVE;
  const raw = window.localStorage.getItem(LIVE_KEY);
  if (raw === liveRaw) return liveCache;
  liveRaw = raw;
  if (!raw) {
    liveCache = EMPTY_LIVE;
    return liveCache;
  }
  try {
    liveCache = JSON.parse(raw) as Record<string, FragranceFile>;
  } catch {
    liveCache = EMPTY_LIVE;
  }
  return liveCache;
}

export function saveLiveFile(file: FragranceFile) {
  const all = { ...getLiveFiles(), [file.slug]: file };
  const raw = JSON.stringify(all);
  window.localStorage.setItem(LIVE_KEY, raw);
  liveRaw = raw;
  liveCache = all;
  const recent = [file.slug, ...getRecent().filter((item) => item !== file.slug)].slice(
    0,
    12,
  );
  const recentStr = JSON.stringify(recent);
  window.localStorage.setItem(RECENT_KEY, recentStr);
  recentRaw = recentStr;
  recentCache = recent;
}

export function getRecent(): string[] {
  if (typeof window === "undefined") return EMPTY_RECENT;
  const raw = window.localStorage.getItem(RECENT_KEY);
  if (raw === recentRaw) return recentCache;
  recentRaw = raw;
  if (!raw) {
    recentCache = EMPTY_RECENT;
    return recentCache;
  }
  try {
    recentCache = JSON.parse(raw) as string[];
  } catch {
    recentCache = EMPTY_RECENT;
  }
  return recentCache;
}

export function liveSlugForQuery(query: string) {
  return `live-${slugify(query)}`;
}
