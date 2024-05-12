import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/contants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";

const useTrailerVideo = (movieId) => {
  const dispatch = useDispatch();
  const getMovieVideos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const json = await data.json();
    const movieTrailer = json.results.filter(
      (movie) => movie?.type === "Trailer" && movie?.name === "Official Trailer"
    );
    dispatch(addTrailerVideo(movieTrailer));
  };

  useEffect(() => {
    getMovieVideos();
  }, []);
};

export default useTrailerVideo;
