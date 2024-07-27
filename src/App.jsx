import Header from "./Components/Header";
import "./App.css";
import { Outlet } from "react-router-dom";
import ScoreContext from "./ScoreContext";
import { ThemeContext } from "./ThemeContext";
import { useEffect, useState } from "react";
function App() {
  const [score, setScore] = useState(0);
  const [darktheme, setDarkTheme] = useState(false);
  useEffect(() => {
    setScore(0);
  }, []);
  return (
    <ThemeContext.Provider value={{ darktheme, setDarkTheme }}>
      <ScoreContext.Provider value={{ score, setScore }}>
        <div className={`h-screen ${darktheme ? "bg-[#141414]" : "bg-white"}`}>
          <Header />
          <Outlet />
        </div>
      </ScoreContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
