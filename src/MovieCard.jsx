// .jsx is better for React components. not much difference fro .js
import React from 'react';

const MovieCard = ({movie}) => { //({movie}) is object destructuring. Using (props) instead means you will need to type <p>{props.movie.Year}</p> than just <p>{movie.Year}</p>
  return (
    <div className="movie">
      <div>
        <p>{movie.Year}</p>
      </div>
      <div>
        <img src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/400"} alt={movie.Title} />
        {/* 'https://via.placeholder.com/400' in an image link of a grey box showing the text "400 x 400", the 400 can be changed */}
      </div>
      <div>
        <span>{movie.Type}</span>
        <h3>{movie.Title}</h3>
      </div>
    </div>
  );
}

export default MovieCard;