import { ColorID } from "./constants";

export const enum MATCH {
  MISPLACED = "M",
  WRONG = "W",
  OK = "O",
}

export function calculateHints(guess: ColorID[], answer: ColorID[]) {
  const answerEntityCountMap = getAnswerEntityCountMap(answer);

  const result = Array.from<MATCH>({ length: answer.length });

  guess.forEach((item, index) => {
    if (answer[index] === item) {
      result[index] = MATCH.OK;
      answerEntityCountMap[item]--;
    }
  });

  return result.map((item, index) => {
    if (item) return item;

    const guessColorId = guess[index];
    if (answerEntityCountMap[guessColorId]) {
      answerEntityCountMap[guessColorId]--;
      return MATCH.MISPLACED;
    } else {
      return MATCH.WRONG;
    }
  });
}

function getAnswerEntityCountMap(answer: ColorID[]) {
  return answer.reduce((acc, cur) => {
    if (cur in acc) {
      acc[cur]++
    } else {
      acc[cur] = 1
    }

    return acc;
  }, {} as { [color in ColorID]: number });
}