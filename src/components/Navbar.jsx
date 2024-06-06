import React from "react";
import brandLogo from "../assets/images/react-icon-small.png"

export default function Navbar(){
  return (
    <nav>
      <ul className="nav-links" >
        <li className="nav-brand">
            <img src={brandLogo} alt="Official React Logo" className="logo" />
            <p>ReactFacts</p>
        </li>
        <li>React Course - Project 1</li>
      </ul>
    </nav>
  );
}