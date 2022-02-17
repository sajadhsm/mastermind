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
            "font-bold border-2 border-slate-900 dark:border-slate-600 text-slate-900 dark:text-slate-500 rounded-full py-1 w-full",
            "hover:bg-slate-900 dark:hover:bg-slate-200 hover:text-white dark:hover:text-slate-700",
            "disabled:hover:text-slate-900 disabled:hover:bg-transparent disabled:opacity-50 dark:disabled:opacity-40 disabled:cursor-not-allowed",
            "dark:disabled:hover:text-slate-500 dark:disabled:hover:bg-transparent"
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
        "w-4 h-4 rounded-full border-2 border-slate-900 dark:border-slate-700 " +
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
