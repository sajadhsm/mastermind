import { useGame } from "../contexts/GameContext";

import { type ColorID, MAX_ALLOWED_GUESSES } from "../logic/constants";
import { MATCH } from "../logic/game";
import Guesses from "./Guesses";
import Hints from "./Hints";

const enum GAME_STATUS {
  PLAYING = "playing",
  LOOSE = "loose",
  WIN = "win",
}

const Board: React.VFC = () => {
  const { game, dispatch } = useGame();

  const handleGuessClick = (index: number, colorId: ColorID) => {
    dispatch({
      type: "UPDATE_ROW_GUESS",
      payload: { guessIndex: index, guess: colorId },
    });
  };

  const handleCheckClick = () => {
    dispatch({ type: "CHECK_CURRENT_ROW" });
  };

  const isWin = game.rows[game.currentRowIndex - 1]?.hints.every(
    (h) => h === MATCH.OK
  );
  const isGameOver = game.currentRowIndex > MAX_ALLOWED_GUESSES - 1;

  const gameStatus = isWin
    ? GAME_STATUS.WIN
    : isGameOver
    ? GAME_STATUS.LOOSE
    : GAME_STATUS.PLAYING;

  return (
    <div className="px-2 sm:px-0">
      {gameStatus !== GAME_STATUS.PLAYING ? (
        <GameFinishStatus isWin={gameStatus === GAME_STATUS.WIN} />
      ) : null}

      {game.rows.map((row, index) => {
        const isActive =
          gameStatus === GAME_STATUS.PLAYING && game.currentRowIndex === index;

        const canCheck =
          row.guesses.every(Boolean) && !row.hints.every(Boolean);

        return (
          <div key={index} className="flex justify-between py-2">
            <Guesses
              isActive={isActive}
              guesses={row.guesses}
              onGuessClick={handleGuessClick}
            />
            <Hints
              hints={row.hints}
              canCheck={canCheck}
              showCheck={isActive}
              onCheckClick={handleCheckClick}
            />
          </div>
        );
      })}
    </div>
  );
};

const GameFinishStatus: React.VFC<{ isWin: boolean }> = ({ isWin }) => {
  return (
    <div className="bg-gray-800 text-white mb-4 py-3 rounded-lg w-full h-full flex flex-col justify-center items-center text-center">
      <p className="text-3xl mb-2">{isWin ? "🎉" : "☹"}</p>
      <h3 className="text-xl font-bold">{isWin ? "Hoooooray" : "Game Over"}</h3>
    </div>
  );
};

export default Board;
