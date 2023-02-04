import React, { useEffect, useState } from "react";
import { useStateContext } from "../context/themeContext";
import OffCanvas from "../components/Header/OffCanvas";
import pallate from "../data/colorpalate";

const NavBar = () => {
  const { currentTheme, DarkMode } = useStateContext();
  const [scrolled, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", (event) => {
      window.scrollY > 100 ? setScroll(true) : setScroll(false);
    });
  }, []);

  return (
  <div className="position-relative mb-5">
    <nav
      className={`navbar navbar-expand-md bg-${
        DarkMode ? "dark" : "light"
      } d-flex justify-content-between align-items-center py-${
        scrolled ? 2 : 3
      } mb-2 top-0 w-100`}
      style={{ zIndex: 200, position: "fixed",borderRadius:"0 0 5px 5px" }}
    >
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <button
          className="btn d-md-none d-flex justify-content-center align-items-center px-3"
          style={{
            background: currentTheme.btnColor,
            color: currentTheme.textColor,
          }}
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

        <h3
          style={{
            fontSize: !scrolled ? "3rem" : "2rem",
            transition: "font-size .13s linear",
          }}
        >
          <span style={{ color: currentTheme.btnColor }}>Star</span>
          <span className={`px-0 text-${DarkMode ? "light" : "dark"}`}>
            Car
          </span>
        </h3>
      </div>
    </nav>
  </div>
  );
};

export default NavBar;
