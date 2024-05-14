import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  return (
    <div>
      <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
      <MovieList title={"Upcoming"} movies={movies?.upcomingMovies} />
      <MovieList title={"Popular"} movies={movies?.popularMovies} />
      <MovieList title={"Top Rated"} movies={movies?.topRatedMovies} />
    </div>
  );
};

export default SecondaryContainer;
