import Genre from "../components/Genre";
import MovieList from "../components/MovieList";
import "../css/home.css";
const Home = () => {
  return (
    <div className="Home">
      <Genre />
      <MovieList />
    </div>
  );
};

export default Home;
