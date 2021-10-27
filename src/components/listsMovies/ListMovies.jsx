import React, { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { MovieContext } from "../../hooks/movieContext";
import PosterMovie from "../poster/PosterMovie";
import "./listMovie.css";

const ListMovies = () => {
  const { movieSearch, movieFind } = useContext(MovieContext);

  const [movies, setMovies] = useState([]);
  const API_MOVIE = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=8de0f604ebee904c52ef16be52e8ccee`;

  useEffect(() => {
    obtenerData(API_MOVIE);
  }, [movieFind]);

  const obtenerData = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    setTimeout(() => {
      movieFind.length > 0 ? setMovies(movieFind) : setMovies(data.results);
    }, 0);
  };

  return (
    <div className="lists">
      <div className="wrapper">
        <div className="lists-container">
          {movies.length > 0 ? (
            movies.map((movie) => (
              <PosterMovie
                key={movie.id}
                adult={movie.adult}
                backdrop_path={movie.backdrop_path}
                lenguage={movie.original_language}
                title={movie.original_title}
                overview={movie.overview}
                views={movie.popularity}
                poster_path={movie.poster_path}
                video={movie.video}
                vote_average={movie.vote_average}
                vote_count={movie.vote_count}
                movies={movies}
              />
            ))
          ) : (
            <p>Cargando...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListMovies;
