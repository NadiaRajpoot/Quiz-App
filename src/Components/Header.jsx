import React from "react";
import logo from "../assets/logo.jpg";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="shadow-lg  p-2">
      <Link to={"/"}>
        <img className="w-36 m-2 bject-cover " src={logo} alt="" />
      </Link>
    </header>
  );
};

export default Header;
