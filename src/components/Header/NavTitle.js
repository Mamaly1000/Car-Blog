import React from "react";
import { useStateContext } from "../../context/themeContext";
import pallate from "../../data/colorpalate";

const NavTitle = ({ text }) => {
  const { DarkMode } = useStateContext();
  return (
    <span
      className=" fs-1 fb-2 d-block d-md-none mb-4"
      style={{ color: DarkMode && pallate[4].cardBg }}
    >
      {text}
    </span>
  );
};

export default NavTitle;
