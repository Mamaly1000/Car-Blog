import React from "react";
import { useStateContext } from "../../context/themeContext";
import { JournalData } from "../../data/Journal";
import JournalPosts from "./JournalPosts";

const Journal = () => {
  const { DarkMode } = useStateContext();
  return (
    <div
      className={`row row-cols-1 rounded-3 bg-transparent text-${
        DarkMode ? "light" : "dark"
      } mx-1 mt-2 p-3 align-items-center justify-content-evenly overflow-hidden`}
    >
      <h3 className="underline mb-2 pb-2" data-aos="fade-right">
        Our Journal
      </h3>
      <div className="row rounded-2 mt-2 d-flex justify-content-between align-items-center">
        <div
          className={`col-12 col-md-6 bg-${
            DarkMode ? "dark" : "light"
          } position-relative p-2 rounded-2 overflow-hidden`}
          data-aos="fade-right"
        >
          <img
            src="https://static.jamesedition.com/bir?img=/2023/01/main-6.jpg&size=home_main"
            alt=""
            className="position-relative"
            style={{
              objectFit: "contain",
              width: "100%",
              height: "100%",
            }}
          />
          <div
            className="row position-absolute h-75 h-md-50 bottom-0 start-0 rounded-2 d-flex justify-content-center align-items-end p-3 m-0 mb-0"
            style={{
              background: DarkMode
                ? "rgba(0 0 0 /.5)"
                : "rgba(255 255 255 /.5)",
            }}
          >
            <span className="col-12 m-0 ">11 Jan 2023</span>
            <h3 className="col-12 fs-5 m-0 mx-0 journal-title">
              Meet the Mercedes Avatar Concept Vehicle
            </h3>
            <p className="col-12 m-0 journal-links fs-6">
              Despite its name and the Avatar-related marketing campaign behind
              it, the Mercedes-Benz Vision AVTR is not actually in Avatar: The
              Way of Water.
            </p>
          </div>
        </div>
        <div className="col-12 col-md-5 d-flex align-items-center justify-content-betwenn flex-column p-1">
          {JournalData.map((data, index) => (
            <JournalPosts key={index} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Journal;
