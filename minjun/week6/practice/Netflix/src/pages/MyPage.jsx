import { useState } from 'react';
import MovieModal from '../components/MovieModal';
import MovieCard from '../components/MovieCard';
import useRecentShows from '../hooks/useRecentShow';

const MyPage = () => {
  const { recentShows, removeShow } = useRecentShows();
  const [selectedShow, setSelectedShow] = useState(null);

  return (
    /* 상단 여백 반응형 
    -> md:p-10: 데스크톱에서는 넓은 여백 유지
    */
    <main className="p-6 md:p-10 space-y-6">
      <h1 className="text-white text-xl md:text-2xl font-bold">마이페이지</h1>

      <section>
        <h2 className="text-white text-lg md:text-xl font-bold mb-4">최근 본 콘텐츠</h2>
        {recentShows.length === 0 ? (
          <p className="text-gray-400">최근 본 콘텐츠가 없습니다.</p>
        ) : (
          /* 
             그리드 반응형 적용 
              grid-cols-2: 모바일 2열
              sm:grid-cols-3: 태블릿 3열
              md:grid-cols-4: 큰 태블릿 4열
              lg:grid-cols-6: 데스크톱 6열
          */
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4">
            {recentShows.map((show) => (
              <div
                key={show.id}
                className="relative group cursor-pointer"
                onClick={() => setSelectedShow(show)}
              >
                <MovieCard show={show} />
                
                {/* 삭제 버튼 접근성 개선(모바일에는 hover가 없으므로) */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    removeShow(show.id);
                  }}
                  className="absolute top-2 right-2 bg-black/70 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center md:hidden md:group-hover:flex transition-opacity"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        )}
      </section>

      <MovieModal show={selectedShow} onClose={() => setSelectedShow(null)} />
    </main>
  );
};

export default MyPage;