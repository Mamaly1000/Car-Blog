import React from "react";
import { useStateContext } from "../context/themeContext";
import OffCanvas from "../components/Header/OffCanvas";
import pallate from "../data/colorpalate";

const NavBar = () => {
  const { currentTheme, DarkMode } = useStateContext();
  return (
    <nav className="navbar navbar-expand-md d-flex justify-content-between align-items-center pt-4">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <button
          className="btn d-md-none d-flex justify-content-center align-items-center px-3"
          style={{ background: currentTheme.btnColor, color: currentTheme.textColor }}
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasExample"
          aria-controls="offcanvasExample"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </button>

        <OffCanvas />

        <h3 className=" fs-4 ">
          <span className="h1" style={{ color: currentTheme.btnColor }}>
            Star
          </span>
          <span
            className="h1 px-0"
            style={{ color: DarkMode && pallate[4].cardBg }}
          >
            Car
          </span>
        </h3>
      </div>
    </nav>
  );
};

export default NavBar;
