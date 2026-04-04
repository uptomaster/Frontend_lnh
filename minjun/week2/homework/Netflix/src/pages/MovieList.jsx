import movieData from '../data/movie.json';
import MovieCard from '../components/MovieCard';

const MovieList = () => {
  return (
    <main className="p-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* 화면 크기에 따라 카드가 배치되는 개수 조정 */}
       
       {/* map 함수로 4번까지 반복하게 만듦 */}
        {movieData.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </main>
  );
};

export default MovieList;