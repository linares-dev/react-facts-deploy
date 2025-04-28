import React from "react";
import brandLogo from "../assets/images/react-icon-small.png"

export default function Navigation(){
  return(
    <nav className="navbar">
      <div className="navbar-brand">
        <img src={brandLogo} alt="React Logo" className="navbar-brand-logo" width="40" height="40"/>
        <span className="navbar-brand-name nav-link">ReactFacts</span>
      </div>
      <a className="nav-link" href="https://github.com/linares-dev/react-facts-deploy.git"><i className="fa-brands fa-github navbar-social-icon"></i></a>
    </nav>
  )
}