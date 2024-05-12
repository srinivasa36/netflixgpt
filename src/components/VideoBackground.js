import React from "react";
import { useSelector } from "react-redux";
import useTrailerVideo from "../hooks/useTrailerVideo";

const VideoBackground = ({ movieId }) => {
  const moviesFromStore = useSelector((store) => store.movies?.trailerVideo);
  useTrailerVideo(movieId);

  if (moviesFromStore === null) return;
  const movieIdStore = moviesFromStore[0]?.key;
  return (
    <div className="w-full bg-gradient-to-r from-black">
      <iframe
        className="w-full aspect-video"
        src={"https://www.youtube.com/embed/" + movieIdStore} //"?autoplay=1&mute=1"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
