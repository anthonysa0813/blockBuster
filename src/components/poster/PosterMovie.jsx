import React, { useState, useContext } from "react";
import { MovieContext } from "../../hooks/movieContext";
import Button from "../utils/button/Button";
import "./poster.css";

const PosterMovie = ({
  key,
  adult,
  backdrop_path,
  lenguage,
  title,
  overview,
  views,
  poster_path,
  video,
  vote_average,
  vote_count,
  movies,
}) => {
  const [info, setInfo] = useState({});
  const context = useContext(MovieContext);

  const handleClick = (title) => {
    findToMovie(title);
  };

  const findToMovie = (title) => {
    const response = movies.find((movie) => movie.title === title);
    setInfo(response);
  };

  return (
    <>
      {/* <div className="modalContainer   ">
        <div className="wrapper ">
          <div className="modal ">
            <div className="posterModal">
              <img
                src={`https://image.tmdb.org/t/p/w500${info.backdrop_path}`}
                alt=""
              />
            </div>
            <div className="posterInfo">
              <h3>{info.title}</h3>
              <p>{info.overview}</p>
              <p>
                Vistas: <span>{info.popularity}</span>
              </p>
              <p>
                Puntaje: <span>{info.vote_average}</span>
              </p>
            </div>
          </div>
        </div>
      </div> */}
      <div className="cardContainer ">
        <div className="poster-container ">
          <img
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            height={300}
            width={220}
            alt=""
            onClick={() => handleClick(title)}
          />
        </div>
      </div>
    </>
  );
};

export default PosterMovie;
