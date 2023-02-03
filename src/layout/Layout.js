import React from "react";
import { useStateContext } from "../context/themeContext";
import Footer from "./Footer";
import NavBar from "./NavBar";

const Layout = ({ children }) => {
  const { currentTheme } = useStateContext();
  return (
    <div
      className="container-fluid bg-light p-0"
      style={{
        background: ` linear-gradient(75deg, ${currentTheme.textColor} 0%, ${currentTheme.descColor} 100%)`,
      }}
    >
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
