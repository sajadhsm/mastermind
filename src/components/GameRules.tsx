import { GUESS_SIZE, MAX_ALLOWED_GUESSES } from "../logic/constants";

const GameRules: React.VFC = () => {
  return (
    <>
      <h3 className="font-medium">Objective</h3>
      <p>
        A secret combination of {GUESS_SIZE} colors is selected and you have to
        guess that combination in {MAX_ALLOWED_GUESSES} or fewer tries to win.
      </p>

      <h3 className="font-medium mt-2">How to play</h3>
      <p>
        From top to bottom, at each row, click on a circle and pick a color.
        After filling all circles in a row, you can check your guess.
      </p>
      <ul className="list-disc list-inside my-2">
        <li>A green circle means the color and the position is correct.</li>
        <li>
          An orange circle means that the color exists in the combination but the
          position is not correct.
        </li>
        <li>
          An empty circle means that color is not in the combination at all.
        </li>
      </ul>
    </>
  );
};

export default GameRules;
