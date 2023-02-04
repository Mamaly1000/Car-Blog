import React from "react";
import { useStateContext } from "../context/themeContext";
import Footer from "./Footer";
import NavBar from "./NavBar";

const Layout = ({ children }) => {
  const { currentTheme, DarkMode } = useStateContext();
  return (
    <div
      className={` ${
        DarkMode ? "bg-darkmode":"bg-lightmode"
      } container-fluid bg-light p-0 m-0 overflow-hidden `}
 
    >
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
