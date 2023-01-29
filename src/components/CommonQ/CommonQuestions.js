import React from "react";
import { Accordion } from "react-bootstrap";
import { ChartsData } from "../../data/chartsData";
import Accordions from "./Accordians";

const CommonQuestions = () => {
  return (
    <div className="row row-cols-1 rounded-3 bg-secondary text-white mx-1 mt-2 p-3 align-items-center justify-content-evenly">
      <h3 className="text-start underline pb-2 mb-2 text-capitalize">
        your commmon questions of us
      </h3>
      {ChartsData.map((data, index) => (
        <Accordion flush className="rounded-2 overflow-hidden" key={index}>
          <Accordions data={data} index={index} />
        </Accordion>
      ))}
    </div>
  );
};

export default CommonQuestions;
