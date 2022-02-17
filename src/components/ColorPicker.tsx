import { ColorID, COLORS } from "../logic/constants";

const colorIDs = Object.keys(COLORS) as ColorID[];

const ColorPicker: React.VFC<{ onClick: (color: ColorID) => void }> = ({
  onClick,
}) => {
  return (
    <div className="absolute z-10 w-28 top-full mt-1 left-1/2 -translate-x-1/2 flex flex-wrap bg-slate-800 border-2 border-slate-700 rounded-xl shadow-lg">
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 overflow-hidden inline-block">
        <div className="h-3 w-3 bg-slate-700 rotate-45 transform origin-bottom-left" />
      </div>

      {colorIDs.map((colorId) => (
        <div
          key={colorId}
          className="w-1/3 p-2 flex items-center justify-center"
        >
          <button
            style={{ backgroundColor: COLORS[colorId] }}
            className="w-5 h-5 border border-slate-600 rounded-full hover:opacity-80"
            onClick={() => onClick(colorId)}
          />
        </div>
      ))}
    </div>
  );
};

export default ColorPicker;
