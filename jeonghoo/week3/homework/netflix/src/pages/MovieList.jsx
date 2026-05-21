import MovieCard from '../components/MovieCard';
import movieData from '../data/movie.json';

const MovieList = () => {
  return (
    <main className="min-h-screen bg-black px-6 py-8">
      <section className="mb-8">
        <h1 className="mb-2 text-3xl font-bold text-white">Movie List</h1>
        <p className="text-sm text-gray-400">
          좋아하는 영화들을 카드 형식으로 모아본 페이지입니다.
        </p>
      </section>

      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {movieData.map((movie) => (
          <MovieCard
            key={movie.id}
            movieImage={movie.movieImage}
            releaseDate={movie.releaseDate}
            actor={movie.actor}
            title={movie.title}
            director={movie.director}
            description={movie.description}
          />
        ))}
      </section>
    </main>
  );
};

export default MovieList;