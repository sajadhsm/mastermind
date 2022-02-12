import { MATCH } from "../logic/game";

const Hints: React.VFC<{
  hints: MATCH[];
  canCheck: boolean;
  showCheck: boolean;
  onCheckClick: () => void;
}> = ({ hints, showCheck, canCheck, onCheckClick }) => {
  return (
    <div className="flex justify-between items-center w-20 sm:w-24">
      {showCheck ? (
        <button
          disabled={!canCheck}
          className={[
            "font-bold border-2 border-gray-800 text-gray-800 rounded-full py-1 w-full",
            "hover:bg-gray-800 hover:text-white",
            "disabled:hover:text-gray-800 disabled:hover:bg-transparent disabled:opacity-50 disabled:cursor-not-allowed",
          ].join(" ")}
          onClick={onCheckClick}
        >
          Check
        </button>
      ) : (
        hints.map((hint, index) => <Hint key={index} hint={hint} />)
      )}
    </div>
  );
};

const Hint: React.VFC<{ hint: MATCH }> = ({ hint }) => {
  return (
    <div
      className={
        "w-4 h-4 rounded-full border-2 border-gray-800 " +
        (hint === MATCH.OK
          ? "bg-green-600"
          : hint === MATCH.MISPLACED
          ? "bg-orange-400"
          : "")
      }
    />
  );
};

export default Hints;
