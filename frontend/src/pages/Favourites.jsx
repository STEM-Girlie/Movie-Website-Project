import "../css/Favourites.css";
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";

function Favourites() {
  const { favourites } = useMovieContext();

  // If no favourites OR empty array → show empty state
  if (!favourites || favourites.length === 0) {
    return (
      <div className="favourites-empty glass">
        <h2>No Favourites Yet!</h2>
        <p>Click the heart icon to start adding favourites!</p>
      </div>
    );
  }

  return (
    <div className="favourites glass">
      <h2>Your Favourites:</h2>
      <div className="favourites-grid">
        {favourites.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}

export default Favourites;
