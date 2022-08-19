import React from "react";
import { Link } from "react-router-dom";

export default function Movie(props) {
  return (
    <div>
      <div>
        <img srt={props.movies.medium_cover_image} alt={props.movies.id} />
        <h2>
          <Link to={`/movie/${props.movies.id}`}>{props.movies.title}</Link>
        </h2>
        <p>{props.movies.summary}</p>
        <ul>
          {props.movies.genres.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
