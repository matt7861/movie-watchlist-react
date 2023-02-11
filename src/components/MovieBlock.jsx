import { useState, useEffect } from "react";
import star from "../assets/star.svg";
import remove from "../assets/remove.svg";

const MovieBlock = ({ imbd }) => {
  const [movieData, setMovieData] = useState({});

  useEffect(() => {
    async function getMovies() {
      const res = await fetch(
        `https://www.omdbapi.com/?i=${imbd}&type=movie&apikey=e18e4510`
      );
      const data = await res.json();
      setMovieData(data);
    }
    getMovies();
  }, [imbd]);

  return (
    <div className="movie">
      <img className="movie__thumbnail" src={movieData.Poster} />
      <div className="movie__details">
        <div className="movie__title">
          <h3>{movieData.Title}</h3>
          <div className="movie__rating">
            <img src={star} alt="star icon" />
            <p>{movieData.imdbRating}</p>
          </div>
        </div>
        <div className="movie__info">
          <p>{movieData.Runtime} min</p>
          <p>{movieData.Genre}</p>
          {/* <button className="add-to-watchlist" data-id={movieData.imdbID}>
            <img src={remove} />
            <span>Remove</span>
          </button> */}
        </div>
        <p>{movieData.Plot}</p>
      </div>
    </div>
  );
};

export default MovieBlock;
