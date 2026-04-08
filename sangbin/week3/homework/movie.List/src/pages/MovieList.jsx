import { useState } from "react";
import movieData from '../data/movie.json';
import MovieCard from '../components/MovieCard';
import MovieModal from '../components/MovieModal';

const MovieList = () => {
  // 현재 선택된 영화를 저장하는 상태 (null이면 모달 닫힘)
  const [selectedMovie, setSelectedMovie] = useState(null);

  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold mb-8">🎬 영화 목록</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {movieData.map((movie) => (
          <MovieCard
            key={movie.id}
            {...movie}
            // 카드 클릭 시 해당 영화를 selectedMovie에 저장 → 모달 열림
            onClick={() => setSelectedMovie(movie)}
          />
        ))}
      </div>

      {/* selectedMovie가 있을 때만 모달 렌더링 */}
      {selectedMovie && (
        <MovieModal
          movie={selectedMovie}
          // 모달 닫기: selectedMovie를 null로 초기화
          onClose={() => setSelectedMovie(null)}
        />
      )}
    </main>
  );
};

export default MovieList;