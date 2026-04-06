import MovieCard from "../components/layouts/MovieCard";
import movieData from "../data/movie.json";
import MovieModal from "../components/layouts/Modal";
import { useState } from "react";

const MovieList = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (movie) => {
    setSelectedMovie(movie);
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setSelectedMovie(null);
    setIsModalOpen(false);
  };

  return (
    <div>
      <main className="p-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {movieData.map((movie, index) => (
            <MovieCard key={index} movie={movie} onClick={handleOpenModal} />
          ))}
        </div>
      </main>
      {isModalOpen && selectedMovie && (
        <MovieModal movie={selectedMovie} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default MovieList;
