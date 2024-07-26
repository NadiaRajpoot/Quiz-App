import Header from "./Components/Header";
import "./App.css";
import { Outlet } from "react-router-dom";
import ScoreContext from "./ScoreContext";
import { useState } from "react";
function App() {
  const [score, setScore] = useState(0);
  return (
    <ScoreContext.Provider value={{ score, setScore }}>
      <>
        <Header />
        <Outlet />
      </>
    </ScoreContext.Provider>
  );
}

export default App;
