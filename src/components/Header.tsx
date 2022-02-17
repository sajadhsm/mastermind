import { useState } from "react";

import { useGame } from "../contexts/GameContext";
import { useTheme } from "@/contexts/ThemeContext";

import IcRoundHelpOutline from "./Icons/IcRoundHelpOutline";
import IcRoundLightMode from "./Icons/IcRoundLightMode";
import IcRoundDarkMode from "./Icons/IcRoundDarkMode";
import IcRoundReplay from "./Icons/IcRoundReplay";
import IconButton from "./IconButton";
import GameRules from "./GameRules";
import Modal from "./Modal";

const Header: React.VFC = () => {
  const { dispatch } = useGame();
  const { theme, toggleTheme } = useTheme();

  const [isRulesModalOpen, setIsRulesModalOpen] = useState(false);

  function toggleIsRulesModal() {
    setIsRulesModalOpen((close) => !close);
  }

  return (
    <>
      <header className="flex justify-between items-center border-b-2 border-slate-300 dark:border-slate-600 py-3 mb-6 px-2 sm:px-0">
        <h1 className="text-xl font-bold">Mastermind</h1>
        <div className="flex gap-3">
          <IconButton
            title="New Game"
            onClick={() => dispatch({ type: "NEW_GAME" })}
          >
            <IcRoundReplay />
          </IconButton>

          <IconButton title="Toggle Theme" onClick={toggleTheme}>
            {theme === "dark" ? <IcRoundDarkMode /> : <IcRoundLightMode />}
          </IconButton>

          <IconButton title="Game Rules" onClick={toggleIsRulesModal}>
            <IcRoundHelpOutline />
          </IconButton>
        </div>
      </header>

      <Modal
        title="Game Rules"
        isOpen={isRulesModalOpen}
        onClose={toggleIsRulesModal}
      >
        <GameRules />
      </Modal>
    </>
  );
};

export default Header;
