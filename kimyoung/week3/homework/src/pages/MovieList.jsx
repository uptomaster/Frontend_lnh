import { useState } from 'react';
import movieData from '../data/movie.json';
import MovieCard from '../components/layouts/MovieCard';
import MovieModal from '../components/MovieModal';

const MovieList = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);

  return (
    <>
      <main className="p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {movieData.map((movie, index) => (
          <MovieCard
            key={index}
            movie={movie}
            onOpenModal={(data) => setSelectedMovie(data)}
          />
        ))}
      </main>

      {selectedMovie && (
        <MovieModal
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
        />
      )}
    </>
  );
};

export default MovieList;
