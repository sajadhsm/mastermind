import { GameProvider } from "./contexts/GameContext";

import Header from "./components/Header";
import Board from "./components/Board";

function App() {
  return (
    <main className="max-w-sm mx-auto">
      <GameProvider>
        <Header />
        <Board />
      </GameProvider>
    </main>
  );
}

export default App;
