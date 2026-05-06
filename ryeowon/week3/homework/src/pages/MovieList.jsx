import movieData from '../data/movie.json';
import Card from '../components/layouts/Card';
import Modal from "../components/layouts/Modal";
import { useState, useEffect } from 'react';

const MovieList = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const openModal = (movie) => setSelectedMovie(movie);
  const closeModal = () => setSelectedMovie(null);

  useEffect(() => {
    document.body.style.overflow = selectedMovie ? "hidden" : "auto";
  }, [selectedMovie]);

  return (
    <>
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
            onClick={() => openModal(movie)}  
          />
        ))}
      </div>

      
      <Modal movie={selectedMovie} onClose={closeModal} />
    </>
  );
};

export default MovieList;