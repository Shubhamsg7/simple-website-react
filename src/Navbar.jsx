import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container">
    <NavLink className="navbar-brand font-weight-bold" to="/">ReactWeb<span className="text-danger">.</span></NavLink>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink exact  className="nav-link" activeClassName="active2" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact className="nav-link" activeClassName="active2" to="/service">Service</NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact className="nav-link" activeClassName="active2" to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact className="nav-link" activeClassName="active2" to="/contact">Contact</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  );
}

export default Navbar;
