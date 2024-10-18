import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGenre } from "../redux/slices/genreSlice";
import "../css/genre.css";
import { useNavigate } from "react-router-dom";
const Genre = () => {
  // get genreSlice's state and Http request function
  const dispatch = useDispatch();
  const { genres } = useSelector((store) => store.genre);
  useEffect(() => {
    dispatch(getGenre());
  }, []);
  const navigate = useNavigate();
  return (
    <div className="genres">
      <ul className="genres-items">
        {genres &&
          genres.map((genre, index) => (
            <li
              onClick={() => {
                navigate(`/${genre.name}`);
              }}
              className="genres-item"
              key={index}
            >
              {genre.name}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Genre;
