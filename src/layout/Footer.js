import React from "react";
import { useStateContext } from "../context/themeContext";
import { footerlinks } from "../data/FooterLinks";

const date = new Date();

const Footer = () => {
  const { currentTheme, DarkMode } = useStateContext();
  return (
    <div
      className={`w-100 bg-${DarkMode ? "dark" : "light"}
      text-${DarkMode ? "light" : "dark"}
      mt-2 p-0 align-items-center pt-5 px-5`}
      style={{borderRadius:"5px 5px 0 0 "}}
    >
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
        {footerlinks.map((data, index) => (
          <div key={index} className="mb-3">
            <h6>{data.title}</h6>
            <div>
              {data.links.map((link, index) => (
                <button
                  key={index}
                  className="btn m-1"
                  style={{
                    background: currentTheme.btnColor,
                    color: currentTheme.textColor,
                  }}
                >
                  {link}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
      <hr className="divider" style={{ color: DarkMode? currentTheme.btnColor:"#000" }} />
      <div className="col-12 text-center py-3">
        Copyright © {date.getFullYear()}{" "}
        <span
          style={{
            color: currentTheme.btnColor,
          }}
        >
          StarCar
        </span>
      </div>
    </div>
  );
};

export default Footer;
