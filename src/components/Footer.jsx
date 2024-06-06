import React from "react";

export default function Footer(){

  let date = new Date(); // get the current date
  let copyrightYear = date.getFullYear(); // get the fullyear

  return (
    <footer>
      <section className='footer-section-1'> {copyrightYear} &copy; <a href="https://alinares.ca" title="Website">Ali Linares</a></section>
      <section className='footer-section-2'>
        <ul>
          <li>Github</li>
          <li>Twitch</li>
          <li>YouTube</li>
        </ul>
      </section>
    </footer>
  );
}