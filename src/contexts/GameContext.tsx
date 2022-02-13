import React, { createContext, useContext } from "react";
import { useImmerReducer } from "use-immer";

import { calculateHints, MATCH } from "../logic/game";
import { getRandomListOf } from "../logic/utils";
import {
  MAX_ALLOWED_GUESSES,
  GUESS_SIZE,
  ColorID,
  COLORS,
  Guess,
} from "../logic/constants";

interface IGame {
  answer: ColorID[];
  currentRowIndex: number;
  rows: ReturnType<typeof initializeRows>;
}

type ActionType =
  | { type: "NEW_GAME" }
  | { type: "CHECK_CURRENT_ROW" }
  | {
      type: "UPDATE_ROW_GUESS";
      payload: {
        guessIndex: number;
        guess: Guess;
      };
    };

const GameContext = createContext<{
  game: IGame;
  dispatch: React.Dispatch<ActionType>;
}>({
  game: {} as IGame,
  dispatch: () => null,
});

export const GameProvider: React.FC = ({ children }) => {
  const [game, dispatch] = useImmerReducer(gameReducer, initState());

  return (
    <GameContext.Provider value={{ game, dispatch }}>
      {children}
    </GameContext.Provider>
  );
};

export function useGame() {
  return useContext(GameContext);
}

function gameReducer(draft: IGame, action: ActionType) {
  switch (action.type) {
    case "NEW_GAME": {
      return initState();
    }

    case "UPDATE_ROW_GUESS": {
      const { guessIndex, guess } = action.payload;
      draft.rows[draft.currentRowIndex].guesses[guessIndex] = guess;
      return draft;
    }

    case "CHECK_CURRENT_ROW": {
      const hints = calculateHints(
        draft.rows[draft.currentRowIndex].guesses as ColorID[],
        draft.answer
      );

      draft.rows[draft.currentRowIndex].hints = hints;
      draft.currentRowIndex++;

      return draft;
    }
  }
}

function initState(): IGame {
  return {
    currentRowIndex: 0,
    rows: initializeRows(MAX_ALLOWED_GUESSES, GUESS_SIZE),
    answer: getRandomListOf<ColorID>(
      GUESS_SIZE,
      Object.keys(COLORS) as ColorID[]
    ),
  };
}

function initializeRows(rowsCount: number, guessSize: number) {
  return Array.from({ length: rowsCount }, () => ({
    guesses: Array.from({ length: guessSize }, () => null as Guess),
    hints: Array.from<MATCH>({ length: guessSize }),
  }));
}
