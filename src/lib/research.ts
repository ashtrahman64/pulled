import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import type { FragranceFile, Occasion, ResearchResult, Season } from "./types";
import { slugify } from "./utils";

const FileSchema = z.object({
  name: z.string(),
  brand: z.string(),
  inspiredBy: z.string(),
  concentration: z.string().default("Eau de Parfum"),
  priceBand: z.string().default("Affordable"),
  family: z
    .enum(["fresh", "sweet", "woody", "spicy", "gourmand", "aquatic", "amber"])
    .catch("amber"),
  juice: z.string().default("#7a5a32"),
  bottle: z.enum(["column", "flacon", "slab", "taper"]).default("column"),
  seasons: z.array(z.string()).catch([]),
  occasions: z.array(z.string()).catch([]),
  kidSimpleSmell: z.string(),
  firstSniff: z.string(),
  middle: z.string(),
  leftover: z.string(),
  scores: z.object({
    pull: z.coerce.number(),
    compliments: z.coerce.number(),
    longevity: z.coerce.number(),
    projection: z.coerce.number(),
    blindBuy: z.coerce.number(),
  }),
  longevityHours: z.string(),
  projectionLabel: z.enum(["Intimate", "Moderate", "Strong", "Beast"]).catch("Moderate"),
  crowdTake: z.string(),
  blindBuyVerdict: z.string(),
  sprayAdvice: z.string(),
  warnings: z.array(z.string()).default([]),
  similar: z.array(z.string()).default([]),
  sources: z.string().default(""),
});

function clampScore(value: number) {
  if (Number.isNaN(value)) return 5;
  return Math.max(0, Math.min(10, Math.round(value * 10) / 10));
}

function stripFence(text: string) {
  const trimmed = text.trim();
  const fenced = trimmed.match(/```(?:json)?\s*([\s\S]*?)\s*```/i);
  if (fenced?.[1]) return fenced[1].trim();
  const start = trimmed.indexOf("{");
  const end = trimmed.lastIndexOf("}");
  if (start >= 0 && end > start) return trimmed.slice(start, end + 1);
  return trimmed;
}

function juiceForFamily(family: FragranceFile["family"]) {
  const map: Record<FragranceFile["family"], string> = {
    fresh: "#3d7a6a",
    sweet: "#6b3d5c",
    woody: "#6f5330",
    spicy: "#6b3d1c",
    gourmand: "#8a5a22",
    aquatic: "#2f7f8e",
    amber: "#7a4a22",
  };
  return map[family];
}

function normalizeSeasons(values: string[]): Season[] {
  const allowed: Season[] = ["spring", "summer", "fall", "winter"];
  const out: Season[] = [];
  for (const value of values) {
    const key = value.toLowerCase().trim();
    const mapped = key === "autumn" ? "fall" : key;
    if (allowed.includes(mapped as Season) && !out.includes(mapped as Season)) {
      out.push(mapped as Season);
    }
  }
  return out.length ? out : ["fall"];
}

function normalizeOccasions(values: string[]): Occasion[] {
  const map: Record<string, Occasion> = {
    casual: "daily",
    daily: "daily",
    day: "daily",
    work: "office",
    office: "office",
    date: "date",
    dating: "date",
    night: "night",
    club: "night",
    party: "night",
    gym: "gym",
    sport: "gym",
  };
  const out: Occasion[] = [];
  for (const value of values) {
    const mapped = map[value.toLowerCase().trim()];
    if (mapped && !out.includes(mapped)) out.push(mapped);
  }
  return out.length ? out : ["daily"];
}

type OutputPart = {
  type?: string;
  text?: string;
  annotations?: { url?: string }[];
};

type OutputItem = {
  type?: string;
  content?: OutputPart[];
  action?: { sources?: { url?: string }[] };
};

type ResponsesPayload = {
  status?: string;
  output?: OutputItem[];
  citations?: string[];
};

function extractFromResponse(payload: ResponsesPayload) {
  const texts: string[] = [];
  const citations = new Set<string>();
  for (const url of payload.citations ?? []) citations.add(url);
  for (const item of payload.output ?? []) {
    if (item.type === "message") {
      for (const part of item.content ?? []) {
        if (part.type === "output_text" && part.text) texts.push(part.text);
        for (const annotation of part.annotations ?? []) {
          if (annotation.url) citations.add(annotation.url);
        }
      }
    }
    if (item.type === "web_search_call" || item.type === "x_search_call") {
      for (const source of item.action?.sources ?? []) {
        if (source.url) citations.add(source.url);
      }
    }
  }
  const jsonish =
    [...texts].reverse().find((text) => text.includes("{")) ?? texts.at(-1) ?? "";
  return { text: jsonish, citations: [...citations].slice(0, 8) };
}

export const researchFragrance = createServerFn({ method: "POST" })
  .validator((input: { query: string }) => {
    const query = input.query.trim().slice(0, 80);
    if (query.length < 2) throw new Error("Type a cologne name first.");
    return { query };
  })
  .handler(async ({ data }): Promise<ResearchResult> => {
    const apiKey = process.env.XAI_API_KEY;
    if (!apiKey) {
      return {
        ok: false,
        error: "Live research is not available in this environment.",
      };
    }

    const prompt = `Research the affordable cologne / dupe / clone named: "${data.query}"

Use web search (Fragrantica, Reddit r/fragranceclones r/fragrance, blogs) and X search. Then return ONE JSON object, no markdown, no preamble.

JSON shape:
{
  "name": "short product name",
  "brand": "house",
  "inspiredBy": "what it clones or Original",
  "concentration": "Eau de Parfum",
  "priceBand": "$20–40",
  "family": "fresh|sweet|woody|spicy|gourmand|aquatic|amber",
  "seasons": ["fall","winter"],
  "occasions": ["date","night"],
  "kidSimpleSmell": "4-6 short sentences explaining the smell to a five-year-old using ONLY everyday objects: fruit, cookies, candy, soap, rain, wood, smoke, coffee, leather jacket, vanilla ice cream, cinnamon rolls, pineapple, ocean, dinner-table pepper, pancakes, honey, mint. No perfume jargon unless immediately compared to food/objects.",
  "firstSniff": "plain English opening",
  "middle": "plain English heart",
  "leftover": "plain English drydown",
  "scores": {
    "pull": 0-10 how much women tend to like this ON A MAN,
    "compliments": 0-10 how often wearers get stopped,
    "longevity": 0-10 (4h=4, 6h=6, 8h=7.5, 10h=8.5, 12h+=9.5),
    "projection": 0-10 (intimate=4, moderate=6, strong=8, beast=9.5),
    "blindBuy": 0-10 safety without sampling
  },
  "longevityHours": "8-10 hours",
  "projectionLabel": "Intimate" | "Moderate" | "Strong" | "Beast",
  "crowdTake": "2-4 sentences from Reddit/Fragrantica/X, including disagreements",
  "blindBuyVerdict": "1-2 sentences",
  "sprayAdvice": "how many sprays",
  "warnings": ["short"],
  "similar": [],
  "sources": "one sentence on sources used"
}

Be skeptical of hype. Most cheap clones score 6-8, not 9-10. If unknown, scores around 5 and say so in crowdTake. Scores must be numbers.`;

    const res = await fetch("https://api.x.ai/v1/responses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "grok-4.5",
        store: false,
        max_output_tokens: 1800,
        max_tool_calls: 4,
        tools: [{ type: "web_search" }, { type: "x_search" }],
        input: [
          {
            role: "system",
            content:
              "You are a blunt fragrance desk officer. Search, then return only JSON.",
          },
          { role: "user", content: prompt },
        ],
      }),
    });

    if (!res.ok) {
      if (res.status === 429) {
        return {
          ok: false,
          error: "Too many live files at once. Wait a few seconds.",
        };
      }
      return {
        ok: false,
        error: "Live research failed. Try a more specific bottle name.",
      };
    }

    const payload = (await res.json()) as ResponsesPayload;
    const { text, citations } = extractFromResponse(payload);
    if (!text) {
      return { ok: false, error: "No report came back. Try a more specific name." };
    }

    let parsed: unknown;
    try {
      parsed = JSON.parse(stripFence(text));
    } catch {
      return { ok: false, error: "Could not read the live report. Try again." };
    }

    const result = FileSchema.safeParse(parsed);
    if (!result.success) {
      return { ok: false, error: "The live report came back incomplete. Try again." };
    }

    const raw = result.data;
    const file: FragranceFile = {
      slug: `live-${slugify(`${raw.brand}-${raw.name}` || data.query)}`,
      name: raw.name,
      brand: raw.brand,
      aliases: [data.query.toLowerCase()],
      inspiredBy: raw.inspiredBy,
      concentration: raw.concentration,
      priceBand: raw.priceBand,
      family: raw.family,
      juice: raw.juice.startsWith("#") ? raw.juice : juiceForFamily(raw.family),
      bottle: raw.bottle,
      seasons: normalizeSeasons(raw.seasons),
      occasions: normalizeOccasions(raw.occasions),
      kidSimpleSmell: raw.kidSimpleSmell,
      firstSniff: raw.firstSniff,
      middle: raw.middle,
      leftover: raw.leftover,
      scores: {
        pull: clampScore(raw.scores.pull),
        compliments: clampScore(raw.scores.compliments),
        longevity: clampScore(raw.scores.longevity),
        projection: clampScore(raw.scores.projection),
        blindBuy: clampScore(raw.scores.blindBuy),
      },
      longevityHours: raw.longevityHours,
      projectionLabel: raw.projectionLabel,
      crowdTake: raw.crowdTake,
      blindBuyVerdict: raw.blindBuyVerdict,
      sprayAdvice: raw.sprayAdvice,
      warnings: raw.warnings,
      similar: raw.similar,
      sources: raw.sources,
      live: true,
    };

    return { ok: true, file, citations };
  });
