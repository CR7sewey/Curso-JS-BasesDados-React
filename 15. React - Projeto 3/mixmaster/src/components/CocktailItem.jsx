import React from "react";
import { Link } from "react-router-dom";

export default function CocktailItem({ id, name, image, info, glass }) {
  return (
    <div className="cocktail-item">
      <article>
        <div className="img-container">
          <img src={image} alt={name} className="img" />
        </div>
        <div className="footer">
          <h4>{name}</h4>
          <h5>{glass}</h5>
          <p>{info}</p>

          <Link to={`/cocktail/${id}`} className="btn">
            details
          </Link>
        </div>
      </article>
    </div>
  );
}
