import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar/>
      <Sidebar/>
      {children}
    </>
  );
};

export default Layout;