export const MAX_ALLOWED_GUESSES = 10;
export const GUESS_SIZE = 4;

export const COLORS = {
  "1": '#e11d48',
  "2": '#3b82f6',
  "3": '#22c55e',
  "4": '#f97316',
  "5": '#7c3aed',
  "6": '#111827',
  "7": '#94a3b8',
  "8": '#d946ef',
  "9": '#fbbf24',
  // "10": '#92400e',
}

export type ColorID = keyof typeof COLORS;
export type Guess = ColorID | null;