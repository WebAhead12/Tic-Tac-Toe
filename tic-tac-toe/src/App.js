import React, { useEffect } from "react";
import "./App.css";
import Game from "./Components/Game/MainGame";

const App = () => {
  useEffect(() => {
    document.title = "tic-tac-toe";
  }, []);
  return <Game />;
};

// function App() {
//   return (
//     <div className="App">
//       <h1>Tic Tac Toe</h1>
//     </div>
//   );
// }

export default App;
