import { ThemeProvider } from "./contexts/ThemeContext";
import { GameProvider } from "./contexts/GameContext";

import Header from "./components/Header";
import Board from "./components/Board";

function App() {
  return (
    <main className="max-w-sm mx-auto">
      <ThemeProvider>
        <GameProvider>
          <Header />
          <Board />
        </GameProvider>
      </ThemeProvider>
    </main>
  );
}

export default App;
