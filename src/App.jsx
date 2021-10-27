import React from "react";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import ListMovies from "./components/listsMovies/ListMovies";
import MovieProvider from "./hooks/movieContext";

const App = () => {
  return (
    <MovieProvider>
      <Header />
      <Hero />
      <ListMovies />
    </MovieProvider>
  );
};

export default App;
