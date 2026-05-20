import { useState, useEffect } from 'react';
import Modal from '../components/Modal';
import MovieCard from '../components/MovieCard';
import useRecentShows from '../hooks/useRecentShows';
import { getSavedMoviesAPI } from '../apis/movieApi';
import useAuthStore from '../stores/useAuthStore';

const MyPage = () => {
  const { recentShows, removeShow } = useRecentShows();
  const [selectedShow, setSelectedShow] = useState(null);
  
  const [savedMovies, setSavedMovies] = useState([]);
  const token = useAuthStore((state) => state.accessToken);

  useEffect(() => {
    const fetchSavedMovies = async () => {
      try {
        const serverData = await getSavedMoviesAPI(token);
        
        // [팩트체크 완료] 서버 응답(tvMazeId, imageUrl)을 MovieCard(id, image.medium)용으로 변환
        const formattedData = serverData.map((item) => ({
          id: item.tvMazeId, // 서버의 tvMazeId를 기존 카드의 id로 매핑
          name: item.name,
          image: {
            medium: item.imageUrl // 서버의 imageUrl을 기존 카드의 image.medium으로 매핑
          }
        }));
        
        setSavedMovies(formattedData);
      } catch (error) {
        console.error("찜한 목록 로드 실패:", error);
      }
    };

    if (token) fetchSavedMovies();
  }, [token]);

  return (
    <main className="p-10 space-y-12 bg-black min-h-screen text-white">
      <h1 className="text-2xl font-bold">마이페이지</h1>

      {/* 서버에 저장된 찜 목록 */}
      <section>
        <h2 className="text-xl font-bold mb-4 text-red-500">내가 찜한 콘텐츠</h2>
        {savedMovies.length === 0 ? (
          <p className="text-zinc-600">서버에 찜한 콘텐츠가 없습니다.</p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {savedMovies.map((movie) => (
              <div key={movie.id} className="cursor-pointer" onClick={() => setSelectedShow(movie)}>
                <MovieCard show={movie} />
              </div>
            ))}
          </div>
        )}
      </section>

      <hr className="border-zinc-900" />

      {/* 로컬스토리지 최근 본 콘텐츠 */}
      <section>
        <h2 className="text-xl font-bold mb-4 text-zinc-400">최근 본 콘텐츠</h2>
        {recentShows.length === 0 ? (
          <p className="text-zinc-600">최근 본 콘텐츠가 없습니다.</p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {recentShows.map((show) => (
              <div key={show.id} className="relative group cursor-pointer" onClick={() => setSelectedShow(show)}>
                <MovieCard show={show} />
                <button
                  onClick={(e) => { e.stopPropagation(); removeShow(show.id); }}
                  className="absolute top-2 right-2 bg-black/60 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center opacity-0 group-hover:opacity-100 transition"
                >✕</button>
              </div>
            ))}
          </div>
        )}
      </section>

      <Modal show={selectedShow} onClose={() => setSelectedShow(null)} />
    </main>
  );
};

export default MyPage;