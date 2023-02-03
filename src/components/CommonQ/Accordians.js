import React, { useState } from "react";
import { Accordion } from "react-bootstrap";
import { useStateContext } from "../../context/themeContext";
import Chartt from "./Chart";

const Accordions = ({ data, index }) => {
  const { currentTheme } = useStateContext();
  const [clicked, setClicked] = useState(false);
  return (
    <Accordion.Item eventKey={index} className="row bg-dark text-light mb-1">
      <Accordion.Header
        className="col-12 bg-dark underline d-flex justify-content-between align-items-center"
        onClick={() => {
          setClicked((prev) => !prev);
        }}
      >
        <h6 className="col-11">{data.Question}</h6>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className=" col-1 bi bi-arrow-down-circle-fill"
          viewBox="0 0 16 16"
          style={{
            transition: "transform .13s linear",
            transform: clicked && "rotateZ(180deg) scale(1.1,1.1)",
            color: currentTheme.btnColor,
          }}
        >
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z" />
        </svg>
      </Accordion.Header>
      <Accordion.Body className="row border-bottom border-1 border-light d-flex justify-content-between align-items-center">
        <div className="col-12 col-md-5">
          <h5 style={{ color: currentTheme.btnColor }}>{data.WarmUp}</h5>
          <p className="fs-6 display-6 ">{data.Answer}</p>
        </div>
        <div className="col-12 col-md-6">
          <Chartt topic={data.Chart_topic} chartdata={data.Chart_Data} />
        </div>
      </Accordion.Body>
    </Accordion.Item>
  );
};

export default Accordions;
