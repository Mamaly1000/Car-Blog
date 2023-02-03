import React from "react";
import { useStateContext } from "../../context/themeContext";

const FilterButton = ({ padding, children, onclick, disabled, col, mdcol }) => {
  const { currentTheme } = useStateContext();
  return (
    <button
      className={`btn p-${padding} d-flex justify-content-center align-items-center col-${col} col-md-${mdcol} m-1 m-md-0`}
      onClick={onclick}
      style={{
        background: currentTheme.btnColor,
        color: currentTheme.textColor,
      }}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default FilterButton;
