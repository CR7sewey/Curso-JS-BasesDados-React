import React from "react";
import { linksPagina, socialLinks } from "../data";

function Footer() {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        {linksPagina.map((links) => {
          return (
            <li key={links.id}>
              <a href={links.href} className="footer-link">
                {links.text}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="footer-icons">
        {socialLinks.map((links) => {
          return (
            <li key={links.id}>
              <a href={links.href} target="_blank" className="footer-icon">
                <i className={links.icon}></i>
              </a>
            </li>
          );
        })}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
}

export default Footer;
