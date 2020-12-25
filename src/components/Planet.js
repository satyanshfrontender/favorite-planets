import React from "react";
import { Link } from "react-router-dom";
export default function Cocktail({ name, id, isFavourite }) {
  return (
    <article className="planet">
      <div className="planet-footer">
        <h3> {name}</h3>
        <h4>{isFavourite}</h4>
        <Link to={`/planet/${id}`} className="btn btn-primary btn-details">
          details
        </Link>
      </div>
    </article>
  );
}