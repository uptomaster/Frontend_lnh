import React, { useState } from 'react';
import Navbar from './components/Navbar';
import MovieCard from './components/MovieCard';
import movies from './movies.json';
import MovieModal from './components/MovieModal';

function App() {
  // 모달의 열림 여부와 선택된 영화 데이터를 저장할 상태 선언
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  // 영화 카드 클릭 시 실행될 함수
  const handleCardClick = (movie) => {
    setSelectedMovie(movie); // 클릭한 영화 정보를 상태에 저장
    setModalOpen(true);      // 모달 상태를 true로 변경
  };
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Navbar />

      <main className="container mx-auto py-16 px-8">

        <h2 className="text-2xl font-bold mb-10 border-l-4 border-red-600 pl-3">MyFlix</h2>

        {/* 가로로 4개 배치 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} onClick={handleCardClick} />
          ))}
        </div>
      </main>

      {/* 조건부 렌더링: modalOpen이 true일 때만 MovieModal을 화면에 띄움 */}
      {modalOpen && (
        <MovieModal movie={selectedMovie} setModalOpen={setModalOpen}
        />
      )}

    </div>
  );
}

export default App;