import React, { useContext, useState } from "react";
import "./header.css";
import logo from "../../assets/images/logo-blockBuster.png";
import { MovieContext } from "../../hooks/movieContext";

const Header = () => {
  const context = useContext(MovieContext);
  const { movieSearch, setMovieSearch, setMovieFind } = context;
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setMovieSearch(e.target.value);
  };

  const getMovies = async (movie) => {
    const api = `https://api.themoviedb.org/3/search/movie?api_key=8de0f604ebee904c52ef16be52e8ccee&query=${movie}`;
    const response = await fetch(api);
    const data = await response.json();
    setMovieFind(data.results);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (movieSearch) {
      getMovies(movieSearch);
    }
    if (movieSearch.trim() === "") {
      setError(true);
      setTimeout(() => {
        setError(null);
      }, 3000);
      return;
    }

    setError(null);
  };

  return (
    <header className="">
      <div className="wrapper">
        <div className="header-container  ">
          <div className="logo">
            <img src={logo} alt="Logo de blockmaster" />
          </div>
          <nav className="nav  ">
            <ul className="menu">
              <li>Todas</li>
              <li>Más valoradas</li>
              <li>Menos valoradas</li>
            </ul>
          </nav>
          <form className="searchMovie" onSubmit={handleSubmit}>
            {error && (
              <span className="alert">Debes de introducir una busqueda</span>
            )}
            <input
              type="text"
              onChange={handleChange}
              placeholder="Busca algo interesante"
            />
            <button className="search" type="submit">
              Buscar
            </button>
          </form>
        </div>
      </div>
    </header>
  );
};

export default Header;
