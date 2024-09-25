import React from "react";
import { linksPagina } from "../data";

function PageLinks({ classPai, classItem }) {
  return (
    <ul className={classPai} id="nav-links">
      {linksPagina.map((link) => {
        const { id, href, text } = link;
        return (
          <li key={id}>
            <a href={href} className={classItem}>
              {text}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default PageLinks;
