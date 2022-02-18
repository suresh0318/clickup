import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  AiOutlineBell,
  AiOutlineBars,
  AiOutlineAppstoreAdd,
} from "react-icons/ai";
import { HiOutlineMailOpen } from "react-icons/hi";
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const [name, setName] = useState("");

  useEffect(() => {
    setName(window.sessionStorage.getItem("name"));
  }, []);

  const styles = {
    marginLeft: "1rem",
    cursor: "pointer",
  };
  return (
    <div className="navbar ">
      <div className="left">
        <GiHamburgerMenu />
        <Link to="/" style={{ color: "inherit", textDecoration: "inherit" }}>
          <h6>Dashboard</h6>
        </Link>
        <Link
          to="users"
          style={{ color: "inherit", textDecoration: "inherit" }}
        >
          <h6>Users</h6>
        </Link>
        <h6>Settings</h6>
      </div>
      <div className="right">
        <AiOutlineBell style={styles} />
        <AiOutlineBars style={styles} />
        <HiOutlineMailOpen style={styles} />
        <Link
          to="/login"
          style={{ color: "inherit", textDecoration: "inherit" }}
        >
          <FaUserAlt style={styles} />
        </Link>
        <h6>{name}</h6>
        <AiOutlineAppstoreAdd style={{ margin: "0 1rem 0 " }} />
      </div>
    </div>
  );
};

export default Navbar;
