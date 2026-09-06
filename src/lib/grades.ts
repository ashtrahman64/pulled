import type { Scores } from "./types";

export function overallScore(scores: Scores) {
  return (
    scores.pull * 0.26 +
    scores.compliments * 0.24 +
    scores.longevity * 0.16 +
    scores.projection * 0.14 +
    scores.blindBuy * 0.2
  );
}

export function letterGrade(score: number) {
  if (score >= 9) return "A+";
  if (score >= 8.3) return "A";
  if (score >= 7.6) return "A-";
  if (score >= 7) return "B+";
  if (score >= 6.4) return "B";
  if (score >= 5.8) return "B-";
  if (score >= 5.2) return "C+";
  if (score >= 4.6) return "C";
  return "C-";
}

export function scoreWord(value: number) {
  if (value >= 9.4) return "Nuclear";
  if (value >= 8.5) return "Magnet";
  if (value >= 7.5) return "Strong";
  if (value >= 6.5) return "Solid";
  if (value >= 5.5) return "Mixed";
  if (value >= 4.5) return "Risky";
  return "Skip";
}

export const SCORE_META: {
  key: keyof Scores;
  label: string;
  hint: string;
}[] = [
  {
    key: "pull",
    label: "Pull",
    hint: "How often women say they like this on a man",
  },
  {
    key: "compliments",
    label: "Compliments",
    hint: "How often wearers get stopped or asked what it is",
  },
  {
    key: "longevity",
    label: "Longevity",
    hint: "How many hours it hangs on skin",
  },
  {
    key: "projection",
    label: "Projection",
    hint: "How far the smell walks in front of you",
  },
  {
    key: "blindBuy",
    label: "Blind buy",
    hint: "How safe it is to buy without smelling first",
  },
];
