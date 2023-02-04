import React from "react";
import { useStateContext } from "../../context/themeContext";

const NavTitle = ({ text }) => {
  const { DarkMode } = useStateContext();
  return (
    <span
      className={`fs-1 fb-2 d-block d-md-none mb-4 text-${
        DarkMode ? "light" : "dark"
      }`}
    >
      {text}
    </span>
  );
};

export default NavTitle;
