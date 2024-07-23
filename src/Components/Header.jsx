import React from "react";
import logo from "../assets/logo.jpg";
const Header = () => {
  return (
    <header className="shadow-lg  p-2">
      <div>
        <img className="w-36 m-2 bject-cover " src={logo} alt="" />
      </div>
    </header>
  );
};

export default Header;
