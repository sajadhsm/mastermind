export const COLORS = {
  "1": 'red',
  "2": 'blue',
  "3": 'green',
  "4": 'orange',
  "5": 'purple',
  "6": 'black'
}

export type ColorID = keyof typeof COLORS;
export type Guess = ColorID | null;