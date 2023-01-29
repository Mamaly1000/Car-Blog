import React, { useEffect, useState } from "react";
import { useStateContext } from "../../context/themeContext";

const Service = ({ start, measure, end, servicetext }) => {
  const { currentTheme } = useStateContext();
  let [num, setNum] = useState({
    start,
    end,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setNum({ ...num, start: num.start++ });
      if (num.start === num.end) {
        setNum({ ...num, start: num.end });
        clearInterval(interval);
      }
    }, 20);
  }, []);

  return (
    <div
      className="col-12 col-sm-6 col-md-auto d-flex justify-content-center align-items-center rounded-circle bg-dark d-flex justify-content-center align-items-center flex-column mb-2 mb-md-0"
      style={{ width: 200, height: 200 }}
      data-aos="zoom-in"
    >
      <div className=" col-12 d-flex justify-content-center align-items-center fs-1">
        <span style={{ color: currentTheme.btnColor }}>{num.start}</span>
        {measure}
      </div>
      <div className="display-5 col-12 text-center text-capitalize">
        {servicetext}
      </div>
    </div>
  );
};

export default Service;
