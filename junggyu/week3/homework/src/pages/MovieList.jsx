import movieData from '../data/movie.json';
import MovieCard from './MovieCard';
import Modal from './Modal';
import { useState } from 'react';

const MovieList = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [clickMovie, setClickMovie] = useState(null);

    const handleModal = (movie) => {
        setClickMovie(movie);
        setIsModalOpen(true);
    };
    const handleXModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <main className="p-10 flex gap-6">
                {movieData.map((movie, index) => (
                    <MovieCard key={index} movie={movie} onOpenModal={handleModal} />
                ))}
            </main>
            {isModalOpen && <Modal movie={clickMovie} onClose={handleXModal} />}
        </>
    );
};

export default MovieList;