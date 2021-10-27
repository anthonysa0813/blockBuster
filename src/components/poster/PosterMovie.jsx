import React, { useState, useContext } from "react";
import { MovieContext } from "../../hooks/movieContext";

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
  // const context = useContext(MovieContext);
  const [showModal, setShowModal] = useState(false);

  const handleClick = (title) => {
    findToMovie(title);
    setShowModal(true);
  };

  const findToMovie = (title) => {
    const response = movies.find((movie) => movie.title === title);
    setInfo(response);
  };

  const close = () => {
    setShowModal(false);
  };

  return (
    <>
      {showModal && (
        <div className="modalContainer ">
          <div className="modal">
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
                Vistas:
                <span> {info.popularity}</span>
              </p>
              <p>
                Votos:
                <span> {info.vote_average}</span>
              </p>
              <button className="btn-close" onClick={close}>
                Cerrar &times;
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="cardContainer ">
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          // height={300}
          // width={220}
          alt=""
          onClick={() => handleClick(title)}
        />
      </div>
    </>
  );
};

export default PosterMovie;
