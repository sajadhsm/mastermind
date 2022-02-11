import { useState } from "react";
import { Guess, ColorID, COLORS } from "../logic/constants";
import ColorPicker from "./ColorPicker";

const Guesses: React.VFC<{
  guesses: Guess[];
  isActive: boolean;
  onGuessClick: (index: number, colorId: ColorID) => void;
}> = ({ guesses, isActive, onGuessClick }) => {
  const [openColorPickerIndex, setOpenColorPickerIndex] = useState(-1);

  function handleOpenColorPicker(index: number) {
    if (openColorPickerIndex === index) {
      setOpenColorPickerIndex(-1);
    } else {
      setOpenColorPickerIndex(index);
    }
  }

  return (
    <div className="flex justify-around items-center flex-1">
      {guesses.map((guess, index) => (
        <div key={index} className="relative">
          <button
            className="w-9 h-9 rounded-full border-2 border-zinc-800"
            style={{ backgroundColor: guess ? COLORS[guess] : "" }}
            onClick={() => handleOpenColorPicker(index)}
            disabled={!isActive}
          />
          {isActive && openColorPickerIndex === index && (
            <ColorPicker onClick={(color) => onGuessClick(index, color)} />
          )}
        </div>
      ))}
    </div>
  );
};

export default Guesses;
