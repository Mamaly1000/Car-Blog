import React from "react";
import { useStateContext } from "../../context/themeContext";

const descwraper = (text) => {
  const desc = text.split(".").slice(0, 1);
  return desc.toString();
};

const JournalPosts = ({ data }) => {
  const { DarkMode } = useStateContext();
  return (
    <div
      className={`bg-${
        DarkMode ? "dark" : "light"
      } col-12 h-25 overflow-hidden d-flex mb-1 p-2 rounded-2`}
      data-aos="fade-left"
    >
      <div className="col-4">
        <img
          src={data.img_url}
          alt={data.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
        />
      </div>
      <div className="col-8 d-flex justify-content-between align-items-center flex-column ps-1">
        <span className="col-12 mb-0 fs-6">{data.date}</span>
        <h6 className="col-12 mb-0 journal-title ">{data.title}</h6>
        <p className="col-12 mb-0 journal-links fs-6 display-6">
          {descwraper(data.desc)}
        </p>
      </div>
    </div>
  );
};

export default JournalPosts;
