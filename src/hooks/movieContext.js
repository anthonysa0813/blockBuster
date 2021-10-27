import React, { createContext, useState } from "react";

export const MovieContext = createContext();

const MovieProvider = (props) => {
  const [movieSearch, setMovieSearch] = useState("");
  const [movieFind, setMovieFind] = useState([]);

  return (
    <MovieContext.Provider
      value={{ movieSearch, setMovieSearch, movieFind, setMovieFind }}
    >
      {props.children}
    </MovieContext.Provider>
  );
};

export default MovieProvider;
