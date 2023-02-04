import React from "react";
import { useStateContext } from "../../context/themeContext";

const Intro = ({ h1, p1, p2, pic, order }) => {
  const { DarkMode } = useStateContext();
  return (
    <div
      className={`contianer-fluid row mx-2 align-items-center justify-content-between bg-transparent my-2 rounded-3 g-1`}
    >
      <div
        className={`col-12 col-md-5 rounded-2 py-3 px-3 h-100 text-light ${order} bg-${
          DarkMode ? "dark" : "light"
        } text-${DarkMode ? "light" : "dark"} overflow-hidden`}
      >
        <h1 className="col fb-3 fs-1 mb-5 underline pb-1" data-aos="fade-right">
          {h1}
        </h1>
        <p
          className="col fs-5 display-6"
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
        >
          {p1}
        </p>
        <p
          className="col fs-5 display-6"
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
        >
          {p2}
        </p>
      </div>
      <div className="col-12 col-md-5 p-0 m-0">
        <img
          src={pic}
          alt="sdfd"
          style={{
            backgroundColor: "transparent",
            objectFit: "contain",
            width: "100%",
          }}
          data-aos="fade-left"
        />
      </div>
    </div>
  );
};

export default Intro;
