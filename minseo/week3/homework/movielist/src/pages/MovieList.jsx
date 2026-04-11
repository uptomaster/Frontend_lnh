import { useState, useEffect } from 'react'; // Hooks 추가
import movieData from '../data/movie.json';
import MovieCard from '../components/MovieCard';
import MovieModal from '../components/MovieModal'; //  모달 임포트

const MovieList = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [modalOpen]);

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
    setModalOpen(true);
  };

  return (
    <main className="p-10 bg-black min-h-screen">
      <h2 className="text-3xl font-bold text-white mb-10 text-center">민서 님의 인생 영화 🎬</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
        {movieData.map((movie) => (
          <MovieCard 
            key={movie.id} 
            movie={movie} 
            onClick={() => handleMovieClick(movie)} // 클릭 시 해당 영화 데이터 전달
          />
        ))}
      </div>

        //렌더링 조건문
      {modalOpen && selectedMovie && (
        <MovieModal 
          movie={selectedMovie} 
          setModalOpen={setModalOpen} 
        />
      )}
    </main>
  );
};

export default MovieList;