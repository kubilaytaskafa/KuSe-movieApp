import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGenre } from "../redux/slices/genreSlice";
import "../css/genre.css";
const Genre = () => {
  // get genreSlice's state and Http request function
  const dispatch = useDispatch();
  const { genres } = useSelector((store) => store.genre);
  useEffect(() => {
    dispatch(getGenre());
  }, []);
  return (
    <div className="genres">
      <ul className="genres-items">
        {genres &&
          genres.map((genre, index) => (
            <li className="genres-item" key={index}>
              {genre.name}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Genre;
