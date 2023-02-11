import { useState, useEffect } from "react";
import Header from "./components/Header";
import MovieBlock from "./components/MovieBlock";
import movieIcon from "./assets/movie-icon.svg";
// import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const [movieID, setMovieID] = useState([]);

  useEffect(() => {
    if (!search) {
      return;
    }
    async function getMovieData() {
      const response = await fetch(
        `https://www.omdbapi.com/?s=${search}&type=movie&page=1&apikey=e18e4510`
      );
      const data = await response.json();
      setMovieID(data.Search ?? []);
    }
    getMovieData();
  }, [search]);

  return (
    <div className="App">
      <Header updateSearch={setSearch} />
      <section id="movie-list" className="movie-list">
        <div id="placeholder" className="movie-list__placeholder"></div>

        <div className="movie-list__results" id="movie-list-results">
          {movieID.length === 0 ? (
            <div id="placeholder" class="movie-list__placeholder">
              <img src={movieIcon} alt="movie icon" />
            </div>
          ) : (
            movieID.map((movie, index) => (
              <MovieBlock key={index} imbd={movie.imdbID} />
            ))
          )}
        </div>
      </section>
    </div>
  );
}

export default App;
