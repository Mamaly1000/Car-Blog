<<<<<<< HEAD
import React from "react";
import { useStateContext } from "../context/themeContext";
import { navLinks } from "../data/navLinks";

const Socials = () => {
  const { currentTheme } = useStateContext();

  return (
    <div className="row d-md-none mx-0 px-0">
      {navLinks[2].sublinks.map((item, index) => (
        <a
          href="#dfg"
          key={index}
          className="col-12 btn d-flex justify-content-start align-items-center my-2"
          style={{
            background: currentTheme.btnColor,
            color: "#fff",
            minWidth: "100%",
          }}
        >
          <img
            src={item.icon}
            alt={item.name}
            className="me-2"
            style={{ width: "40px", height: "40px" }}
          />
          {item.name}
        </a>
      ))}
    </div>
  );
};

export default Socials;
=======
import React from "react";
import { useStateContext } from "../context/themeContext";
import { navLinks } from "../data/navLinks";

const Socials = () => {
  const { currentTheme } = useStateContext();

  return (
    <div className="row d-md-none mx-0 px-0">
      {navLinks[2].sublinks.map((item, index) => (
        <a
          href="#dfg"
          key={index}
          className="col-12 btn d-flex justify-content-start align-items-center my-2"
          style={{
            background: currentTheme.btnColor,
            color: "#fff",
            minWidth: "100%",
          }}
        >
          <img
            src={item.icon}
            alt={item.name}
            className="me-2"
            style={{ width: "40px", height: "40px" }}
          />
          {item.name}
        </a>
      ))}
    </div>
  );
};

export default Socials;
>>>>>>> c8a56cb8c6a7319fadd77e54b612cae83079c501
