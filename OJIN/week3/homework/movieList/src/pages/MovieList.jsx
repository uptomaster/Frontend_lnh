import MovieCard from "../components/layouts/MovieCard";
import movieData from "../data/movie.json";

const MovieList = () => {
  return (
    <main className="p-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {movieData.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </div>
    </main>
  );
};

export default MovieList;
