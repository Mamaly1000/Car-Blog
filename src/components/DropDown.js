import React, { useState } from "react";
import { useStateContext } from "../context/themeContext";

const DropDown = ({ item }) => {
  const [click, setClick] = useState(false);
  const { currentTheme } = useStateContext();

  return (
    <div className="col-12 col-md-auto  dropdown mt-3 mt-md-0 mx-0 px-0 px-md-2 mb-md-2 mb-lg-0">
      <button
        className="col-12 col-md-auto btn d-flex justify-content-between align-items-center"
        style={{ color: "#fff", background: currentTheme.btnColor }}
        type="button"
        id="dropdownMenuButton"
        data-bs-toggle="collapse"
        data-bs-target={`#${item.link}`}
        onClick={() => setClick((pre) => !pre)}
      >
        {item.link}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-caret-up-square-fill"
          viewBox="0 0 16 16"
          style={{
            width: "20px",
            height: "100%",
            objectFit: "contain",
            marginLeft: 5,
            transform: click && "rotate(180deg)",
            transition: "transform .13s linear",
          }}
        >
          <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm4 9h8a.5.5 0 0 0 .374-.832l-4-4.5a.5.5 0 0 0-.748 0l-4 4.5A.5.5 0 0 0 4 11z" />
        </svg>
      </button>
      <div
        className="listgroup collapse rounded-2 mt-1 py-2 position-md-absolute col-12 col-md-11 justify-content-center justify-content-md-start"
        id={item.link}
        style={{ zIndex: 100 }}
      >
        {item.sublinks.map((item, index) => (
          <a
            key={index}
            className="a-btn"
            href="#y"
            style={{
              zIndex: 200,
              background: currentTheme.btnColor,
              color: "#f5f5f5",
            }}
          >
            <span className="me-1" style={{ width: "30px", height: "30px" }}>
              <img
                src={item.icon}
                alt=""
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
              />
            </span>
            {item.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default DropDown;
