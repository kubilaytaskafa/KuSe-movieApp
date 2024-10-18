import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovieList } from "../redux/slices/MovieListSlice";
import MovieCard from "./MovieCard";
import "../css/movieList.css";
const MovieList = () => {
  const dispatch = useDispatch();

  const { movieList } = useSelector((store) => store.movieList);

  useEffect(() => {
    dispatch(getMovieList());
  }, []);

  return (
    <div className="Movie-Lists">
      <ul>
        {movieList &&
          movieList.map((movie) => <MovieCard movie={movie} key={movie.id} />)}
      </ul>
    </div>
  );
};

export default MovieList;
