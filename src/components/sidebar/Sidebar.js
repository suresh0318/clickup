import React from "react";
import "./sidebar.css";
import { AiOutlineHome, AiOutlineBell } from "react-icons/ai";

import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar ">
      <div className="logo">
        <img
          src="https://app-cdn.clickup.com/assets/images/brand/clickup-symbol_color.svg"
          alt="logo"
        />
        <img
          src="https://app-cdn.clickup.com/assets/images/brand/clickup-text.svg"
          alt="logo"
        />
        
      </div>
     
      <div className="menu-items">
        <Link to="/" style={{ color: "inherit", textDecoration: "inherit" }}>
          <div className="menu-item">
            <AiOutlineHome />
            <h6>Dashboards</h6>
          </div>
        </Link>
        <Link
          to="/releaseProjects"
          style={{ color: "inherit", textDecoration: "inherit" }}
        >
          <div className="menu-item">
            <AiOutlineBell />
            <h6>Release projects</h6>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
