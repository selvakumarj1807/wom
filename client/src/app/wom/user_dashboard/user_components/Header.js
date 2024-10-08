import React from "react";
import "./header.css";
import Logo from "./logo/Logo";
import Navbar from "./nav/Navbar";

function Header() {

  return (
    <header id="header" className="header fixed-top d-flex align-items-center">
      <Logo />
      <Navbar />
    </header>
  );
}

export default Header;
