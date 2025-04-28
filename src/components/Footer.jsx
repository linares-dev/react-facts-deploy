import React from "react";

export default function Footer(){

  let date = new Date(); // get the current date
  let copyrightYear = date.getFullYear(); // get the fullyear

  return (
    <footer>
      <p>&copy; {copyrightYear} <a href="https://alinares.ca" className="nav-link" title="alinares.ca">Linares</a> All rights reserved.</p>
    </footer>
  );
}