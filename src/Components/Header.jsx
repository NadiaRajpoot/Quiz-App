import React, { useContext } from "react";
import logoDark from "../assets/logo-dark.png";
import logoWhite from "../assets/logo-white.jpg";
import { GrSun } from "react-icons/gr";
import { Link } from "react-router-dom";
import { ThemeContext } from "../ThemeContext";
import { IoIosMoon } from "react-icons/io";
const Header = () => {
  const { darktheme, setDarkTheme } = useContext(ThemeContext);
  console.log(darktheme);
  return (
    <header
      className={`shadow-sm  p-2 ${
        darktheme ? "shadow-white" : "shadow-black"
      }`}
    >
      <nav className="flex justify-between items-center max-w-7xl m-auto">
        <Link to={"/"}>
          <div>
            <img
              className="w-36 my-2  bject-cover "
              src={darktheme ? logoDark : logoWhite}
              alt=""
            />
          </div>
        </Link>
        <div
          onClick={() => {
            setDarkTheme(!darktheme);
          }}
          className="w-[52px] h-[26px]  mr-6 cursor-pointer relative rounded-full bg-gray-100 p-1"
        >
          <span
            className={`absolute left-1 top-1  bg-black rounded-full ${
              darktheme ? "hidden" : ""
            }`}
          >
            <GrSun size={17} color="white" />
          </span>
          <span>
            <IoIosMoon
              size={17}
              className={`absolute left-7 top-1  bg-white rounded-full ${
                darktheme ? "" : "hidden"
              }`}
            />
          </span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
