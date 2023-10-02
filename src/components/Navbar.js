import React from "react";
import { Link } from "react-router-dom";
import logo from "../kyndryl-logo2.svg";

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* <div className="nav-center">
        <Link to="/">
          <img src={logo} alt="country db logo" className="logo" />
        </Link>
      </div> */}
      <div className="nav-center">
        Social Service - please share to people freeing from Ukraine
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
