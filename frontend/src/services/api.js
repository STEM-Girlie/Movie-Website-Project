const API_KEY = "2d8c891d5b6a4aa2d50bf810b57948de";
const BASE_URL = "https://api.themoviedb.org/3";

// ⭐ Fetch popular movies with pagination
export const getPopularMovies = async (page = 1) => {
  const response = await fetch(
    `${BASE_URL}/movie/popular?api_key=${API_KEY}&page=${page}`,
  );
  const data = await response.json();
  return data.results;
};

// ⭐ Search movies with pagination
export const searchMovies = async (query, page = 1) => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
      query,
    )}&page=${page}`,
  );
  const data = await response.json();
  return data.results;
};
