import React from "react";
import PropTypes from "prop-types";
import NavBar from "../pages/Shared/NavBar/NavBar";
import { Outlet } from "react-router";
import Footer from "../pages/Shared/Footer/Footer";

const Root = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <NavBar />
        <div className="max-w-7xl mx-auto px-10 lg:px-2 mt-10">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

Root.propTypes = {};

export default Root;
