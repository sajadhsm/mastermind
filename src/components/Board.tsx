import { useState } from "react";
import { useImmer } from "use-immer";

import { type Guess, type ColorID, COLORS } from "../logic/constants";
import { calculateHints, MATCH } from "../logic/game";
import { getRandomListOf } from "../logic/guess";
import Guesses from "./Guesses";
import Hints from "./Hints";

function initializeGameState(rowsCount: number, guessSize: number) {
  return Array.from({ length: rowsCount }, () => ({
    guesses: Array.from({ length: guessSize }, () => null as Guess),
    hints: Array.from<MATCH>({ length: guessSize }),
  }));
}

const MAX_ALLOWED_GUESS = 10;
const GUESS_SIZE = 4;

const ANSWER = getRandomListOf<ColorID>(
  GUESS_SIZE,
  Object.keys(COLORS) as ColorID[]
);

const enum GAME_STATUS {
  PLAYING = "playing",
  LOOSE = "loose",
  WIN = "win",
}

const Board: React.VFC = () => {
  const [guessIndex, setGuessIndex] = useState(0);
  const [gameStatus, setGameStatus] = useState(GAME_STATUS.PLAYING);
  const [gameStatue, setGameState] = useImmer(
    initializeGameState(MAX_ALLOWED_GUESS, GUESS_SIZE)
  );

  const handleGuessClick = (index: number, colorId: ColorID) => {
    setGameState((draft) => {
      draft[guessIndex].guesses[index] = colorId;
    });
  };

  const handleCheckClick = (index: number) => {
    const hints = calculateHints(
      gameStatue[index].guesses as ColorID[],
      ANSWER
    );

    setGameState((draft) => {
      draft[guessIndex].hints = hints;
    });

    setGuessIndex((prevIndex) => prevIndex + 1);

    if (hints.every((h) => h === MATCH.OK)) {
      setGameStatus(GAME_STATUS.WIN);
    } else if (guessIndex >= MAX_ALLOWED_GUESS - 1) {
      setGameStatus(GAME_STATUS.LOOSE);
    }
  };

  return (
    <div className="relative">
      {gameStatus !== GAME_STATUS.PLAYING ? (
        <div className="absolute bg-slate-200 bg-opacity-90 rounded-md w-full h-full flex flex-col justify-center items-center text-center z-10">
          <p className="text-4xl mb-3">
            {gameStatus === GAME_STATUS.WIN ? "🎉" : "☹"}
          </p>
          <h3 className="text-2xl font-bold">
            {gameStatus === GAME_STATUS.WIN ? "You Won" : "Game Over"}
          </h3>
        </div>
      ) : null}

      {gameStatue.map((row, index) => (
        <div key={index} className="flex justify-between py-2">
          <Guesses
            guesses={row.guesses}
            isActive={guessIndex === index}
            onGuessClick={handleGuessClick}
          />
          <Hints
            hints={row.hints}
            showCheck={row.guesses.every(Boolean) && !row.hints.every(Boolean)}
            onCheckClick={() => handleCheckClick(index)}
          />
        </div>
      ))}
    </div>
  );
};

export default Board;
