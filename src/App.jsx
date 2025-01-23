import { useState } from "react";
import Startgame from "./components/Startgame";
import Play from "./components/Play";

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev);
  };

  return (
    <>{isGameStarted ? <Play /> : <Startgame toggle={toggleGamePlay} />}</>
  );
}

export default App;
