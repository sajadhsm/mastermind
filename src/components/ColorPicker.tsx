import { ColorID, COLORS } from "../logic/constants";

const colorIDs = Object.keys(COLORS) as ColorID[];

const ColorPicker: React.VFC<{ onClick: (color: ColorID) => void }> = ({
  onClick,
}) => {
  return (
    <div className="absolute z-10 w-20 top-full mt-1 left-1/2 -translate-x-1/2 flex flex-wrap bg-slate-50 border border-b-slate-400 rounded-md">
      {colorIDs.map((colorId) => (
        <div
          key={colorId}
          className="w-1/2 p-2 flex items-center justify-center"
        >
          <span
            style={{ backgroundColor: COLORS[colorId] }}
            className="inline-block w-5 h-5 rounded-full"
            onClick={() => onClick(colorId)}
          />
        </div>
      ))}
    </div>
  );
};

export default ColorPicker;
