import React from "react";
import logo from "../assets/images/airbnb-logo.svg";

export default function Navbar() {
  return (
    <div className="container">
      <nav>
        <img src={logo} className="logo" alt="Airbnb log" />
      </nav>
    </div>
  );
}
