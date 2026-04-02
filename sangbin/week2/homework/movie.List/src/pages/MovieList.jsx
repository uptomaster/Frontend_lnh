import movieData from '../data/movie.json';
import MovieCard from '../components/MovieCard';

const MovieList = () => {
  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold mb-8">🎬 영화 목록</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {movieData.map((movie) => (
          <MovieCard key={movie.id} {...movie} />
        ))}
      </div>
    </main>
  );
};

export default MovieList;