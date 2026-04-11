import MovieCard from "../components/MovieCard";
import { useState, useEffect, useRef } from "react";
import { searchMovies, getPopularMovies } from "../services/api";
import "../css/Home.css";
import "../css/index.css";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // ⭐ NEW: Track which page of TMDB we’re on
  const [page, setPage] = useState(1);

  const loadMoreRef = useRef(null);

  // -------------------------------
  // 1️⃣ Load first page of movies
  // -------------------------------
  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies(1); // page 1
        setMovies(popularMovies);
      } catch (error) {
        setError("Failed to load popular movies. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    loadPopularMovies();
  }, []);

  // -------------------------------
  // 2️⃣ Handle search
  // -------------------------------
  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    setLoading(true);
    try {
      const searchResults = await searchMovies(searchQuery, 1);
      setMovies(searchResults);
      setError(null);
      setPage(1); // reset page
    } catch (error) {
      setError("Failed to search movies. Please try again later.");
    } finally {
      setLoading(false);
    }

    setSearchQuery("");
  };

  // -------------------------------
  // 3️⃣ Infinite scroll observer
  // -------------------------------
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setPage((prev) => prev + 1); // ⭐ load next page
        }
      },

      { rootMargin: "200px", threshold: 0.1 },
    );

    if (loadMoreRef.current) observer.observe(loadMoreRef.current);

    return () => {
      if (loadMoreRef.current) observer.unobserve(loadMoreRef.current);
    };
  }, []);

  // -------------------------------
  // 4️⃣ Fetch more movies when page changes
  // -------------------------------
  useEffect(() => {
    if (page === 1) return; // skip first load

    const loadMore = async () => {
      try {
        const moreMovies = await getPopularMovies(page);
        setMovies((prev) => [...prev, ...moreMovies]); // ⭐ append
      } catch (error) {
        console.log("Error loading more movies:", error);
      }
    };

    loadMore();
  }, [page]);

  // -------------------------------
  // 5️⃣ Render
  // -------------------------------
  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for movies..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-btn">
          Search
        </button>
      </form>

      {error && <div className="error-message">{error}</div>}

      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <>
          <div className="movies-grid">
            {movies.map((movie) => (
              <MovieCard movie={movie} key={movie.id} />
            ))}
          </div>

          {/* ⭐ This tiny div triggers loading more */}
          <div ref={loadMoreRef} style={{ height: "60px" }}></div>
        </>
      )}
    </div>
  );
}

export default Home;
