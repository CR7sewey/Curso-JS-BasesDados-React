import React, { useEffect, useState } from "react";
import { links, social } from "./data";
import { useGlobalContext } from "./context";
import logo from "./logo.svg";
import { FaTimes } from "react-icons/fa";

const Sidebar = () => {
  // ir buscar valores ao context

  return (
    <>
      <div
        className={"PUT-SOMTEHING BOOLEAN" ? "sidebar show-sidebar" : "sidebar"}
      >
        <div className="sidebar-header">
          <img src={logo} className="logo" alt="logo" />
          <button className="close-modal-btn">
            <FaTimes />
          </button>
        </div>
        <ul className="links">{/** mostrar links */}</ul>
        <ul className="social-links">{/** mostrar social */}</ul>
      </div>
    </>
  );
};

export default Sidebar;
