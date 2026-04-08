import movieData from "../data/movie.json";
import MovieCard from "../components/MovieCard";
import MovieModal from "../components/MovieModal";
import { useState } from "react";

const MovieList = () => {
  // 어떤 영화를 클릭했는지, null 이면 닫힘 상태
  const [selectedMovie, setSelectedMovie] = useState(null);

  // 영화 클릭 시 모달 여는 함수
  const handleOpenModal = (movie) => {
    setSelectedMovie(movie);
  };

  // 모달 닫는 함수
  const handleCloseModal = () => {
    setSelectedMovie(null);
  };

  return (
    <main className="p-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
        {/* 호버한 카드만 커지도록 items-start 속성 추가 */}
        {/* 화면 크기에 따라 카드가 배치되는 개수 조정 */}

        {/* map 함수로 4번까지 반복하게 만듦 */}
        {movieData.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            onClick={() => setSelectedMovie(movie)}
          />
        ))}
      </div>
      {selectedMovie !== null && (
        <MovieModal movie={selectedMovie} onClose={handleCloseModal} />
      )}
    </main>
  );
};

export default MovieList;
