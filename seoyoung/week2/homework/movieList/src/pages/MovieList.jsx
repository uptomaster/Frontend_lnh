import MovieCard from './MovieCard';
import MovieData from '../data/movie.json';

const MovieList = () => {
  return (
    <div className=" flex flex-row items-stretch">
      {MovieData.map((movie) => (
        <MovieCard key={movie.title} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
