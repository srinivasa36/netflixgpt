import React from "react";
import { imgURL } from "../utils/contants";

const MovieCard = ({ poster_path }) => {
  return (
    <div className="w-full min-w-[250px]">
      <img src={imgURL + poster_path} alt="" className="rounded-md" />
    </div>
  );
};

export default MovieCard;
