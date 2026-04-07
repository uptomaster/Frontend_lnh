import movieData from '../data/movie.json';
import Card from '../components/layouts/Card';

const MovieList = () => {
  return (
    <div className="grid grid-cols-4 gap-3">
    {movieData.map((movie) => (
        <Card
          key={movie.id}
          movieImage={movie.movieImage}
          releaseDate={movie.releaseDate}
          actor={movie.actor}
          title={movie.title}
          director={movie.director}
          description={movie.description}
        />
      ))}
    </div>
  );
};
   

export default MovieList;