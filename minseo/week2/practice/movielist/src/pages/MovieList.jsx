import movieData from '../data/movie.json';
import MovieCard from '../components/MovieCard';

const MovieList = () => {
  return (
    <main className="p-10 bg-black min-h-screen">
      <h2 className="text-3xl font-bold text-white mb-10 text-center">민서 님의 인생 영화 🎬</h2>
      
      {/* 4개 영화를 가로로 배치 (Grid 레이아웃) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
        {movieData.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </main>
  );
};

export default MovieList;