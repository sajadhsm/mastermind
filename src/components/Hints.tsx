import { MATCH } from "../logic/game";

const Hints: React.VFC<{
  hints: MATCH[];
  showCheck: boolean;
  onCheckClick: () => void;
}> = ({ hints, showCheck, onCheckClick }) => {
  return (
    <div className="flex items-center">
      {showCheck ? (
        <button onClick={onCheckClick}>Check</button>
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
        "w-4 h-4 mx-1 rounded-full border border-zinc-800 " +
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
