import React from "react";
import {Outlet} from "react-router-dom";
import Dashboard from "./dashboard";

const Layout = () => {
  return (
    <>
      <Dashboard />
      <Outlet />
    </>
  );
};

export default Layout;