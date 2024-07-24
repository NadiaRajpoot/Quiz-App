import Header from "./Components/Header";
import "./App.css";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <>
      <Header />
      <Outlet/>
    </>
  );
}

export default App;
