import React from "react";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import logos from "../../../assets/logo/logo1.png";

function Header() {
  return (
    <Nav className="navbar navbar-dark bg-primary">
      <Link className="navbar-brand" to="/">
        {" "}
        <img src={logos} alt="logo" width="120px" />
      </Link>
      <button
        className="navbar-toggler toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
    </Nav>
  );
}

export default Header;
