import React from "react";
import { useStateContext } from "../context/themeContext";

const Button = ({ children, icon }) => {
  const { currentTheme } = useStateContext();

  return (
    <button
      className="col-12 col-md-auto btn justify-content-between align-items-center mx-md-2 my-2 my-md-0 "
      style={{ background: currentTheme.btnColor, color: "#fff" }}
    >
      {children} {icon}
    </button>
  );
};

export default Button;
