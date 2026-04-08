import movieData from '../data/movie.json';
import MovieCard from './MovieCard';

const MovieList = () => {
  return (
    <main className="p-10 flex gap-6">
        {movieData.map((movie, index) => (
            <MovieCard key={index} movie={movie}/>
        ))}
        
    </main>
  );
};

export default MovieList;