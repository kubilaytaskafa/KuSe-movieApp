import "../css/movieCard.css";
import { API_IMG } from "../constants/api";
import { FaStar } from "react-icons/fa6";
const MovieCard = ({ movie }) => {
  const { id, title, poster_path, vote_average } = movie;
  return (
    <div className="Movie-Card">
      <div className="gradient"></div>
      <img src={`${API_IMG}/${poster_path}`} alt={title} />
      <div className="Movie-info">
        <div className="Movie-rating">
          <p>{vote_average.toFixed(1)}</p>
          <FaStar className="star-icon" />
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
