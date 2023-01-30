<<<<<<< HEAD
import React from "react";
import { useStateContext } from "../context/themeContext";
import pallate from "../data/colorpalate";

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
=======
import React from "react";
import { useStateContext } from "../context/themeContext";
import pallate from "../data/colorpalate";

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
>>>>>>> c8a56cb8c6a7319fadd77e54b612cae83079c501
