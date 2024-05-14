import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (movies === null) return;
  return (
    <div className="px-4 bg-black">
      <div>
        <h1 className="text-2xl font-bold font-cursive py-2 text-white">
          {title}
        </h1>
      </div>
      <div className="flex gap-3 overflow-x-auto">
        {movies.map((movie) => {
          return (
            <div className="">
              <MovieCard key={movie?.id} poster_path={movie?.poster_path} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MovieList;
