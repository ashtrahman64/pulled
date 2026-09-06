export type Season = "spring" | "summer" | "fall" | "winter";
export type Occasion = "daily" | "office" | "date" | "night" | "gym";
export type Family =
  | "fresh"
  | "sweet"
  | "woody"
  | "spicy"
  | "gourmand"
  | "aquatic"
  | "amber";

export type Scores = {
  pull: number;
  compliments: number;
  longevity: number;
  projection: number;
  blindBuy: number;
};

export type FragranceFile = {
  slug: string;
  name: string;
  brand: string;
  aliases: string[];
  inspiredBy: string;
  concentration: string;
  priceBand: string;
  family: Family;
  juice: string;
  bottle: "column" | "flacon" | "slab" | "taper";
  seasons: Season[];
  occasions: Occasion[];
  kidSimpleSmell: string;
  firstSniff: string;
  middle: string;
  leftover: string;
  scores: Scores;
  longevityHours: string;
  projectionLabel: "Intimate" | "Moderate" | "Strong" | "Beast";
  crowdTake: string;
  blindBuyVerdict: string;
  sprayAdvice: string;
  warnings: string[];
  similar: string[];
  sources: string;
  live?: boolean;
};

export type ResearchResult =
  | { ok: true; file: FragranceFile; citations: string[] }
  | { ok: false; error: string };
