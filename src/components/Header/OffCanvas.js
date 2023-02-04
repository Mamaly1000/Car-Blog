import Button from "./../Button";
import React, { useEffect, useState } from "react";
import { useStateContext } from "../../context/themeContext";
import { navLinks } from "../../data/navLinks";
import DropDown from "./DropDown";
import Socials from "./Socials";
import ThemeButton from "./ThemeButton";
import PalleteButton from "./PalleteButton";
import NavTitle from "./NavTitle";

const OffCanvas = () => {
  const [mdscrenn, setmdscreen] = useState(window.innerWidth);
  const { currentTheme, DarkMode } = useStateContext();

  useEffect(() => {
    const handleresize = () => setmdscreen(window.innerWidth);
    window.addEventListener("resize", handleresize);

    return () => {
      window.removeEventListener("resize", handleresize);
    };
  }, [mdscrenn]);

  return (
    <div
      className="offcanvas offcanvas-start"
      tabIndex="-1"
      id="offcanvasExample"
      aria-labelledby="offcanvasExampleLabel"
      style={{
        background:
          mdscrenn <= 768 &&
          ` linear-gradient(75deg, ${currentTheme.textColor} 0%, ${currentTheme.descColor} 100%)`,
      }}
    >
      {/* header */}
      <div className={`offcanvas-header text-${DarkMode ? "light" : "dark"}`}>
        <h5 className="offcanvas-title" id="offcanvasExampleLabel">
          <span className="h1" style={{ color: currentTheme.btnColor }}>
            Star
          </span>
          <span>Car</span>
        </h5>
        <button
          type="button"
          className="btn-close d-flex justify-content-between align-items-center"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
          style={{
            background: currentTheme.btnColor,
            color: currentTheme.textColor,
            boxShadow: `0 0 10px ${currentTheme.btnColor}`,
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill={currentTheme.textColor}
            className="bi bi-x"
            viewBox="0 0 16 16"
          >
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
          </svg>
        </button>
      </div>
      {/* body */}
      <div className="row row-cols-1 row-cols-md-5 offcanvas-body mx-0 gx-4">
        <NavTitle text="WellCome ;)" />

        <hr className="divider d-block d-md-none my-3" />

        {navLinks.map((item, index) => (
          <DropDown key={index} item={item} />
        ))}

        <hr className="divider d-block d-md-none my-3" />

        <Button>sign up</Button>
        <Button
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-box-arrow-in-left"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M10 3.5a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 1 1 0v2A1.5 1.5 0 0 1 9.5 14h-8A1.5 1.5 0 0 1 0 12.5v-9A1.5 1.5 0 0 1 1.5 2h8A1.5 1.5 0 0 1 11 3.5v2a.5.5 0 0 1-1 0v-2z"
              />
              <path
                fillRule="evenodd"
                d="M4.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H14.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"
              />
            </svg>
          }
        >
          login
        </Button>

        <hr className="divider d-block d-md-none my-3" />

        <NavTitle text="Contact Us" />
        <Socials />

        <hr className="divider d-block d-md-none my-3" />

        <NavTitle text="Theme" />
        <ThemeButton />
        <PalleteButton />
      </div>
    </div>
  );
};

export default OffCanvas;
