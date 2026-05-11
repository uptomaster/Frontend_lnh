import { useState } from 'react';
import Modal from '../components/Modal';
import MovieCard from '../components/MovieCard';
import useRecentShows from '../hooks/useRecentShows';

const MyPage = () => {
  // 1. 저장된 데이터와 삭제 함수를 가져옵니다.
  const { recentShows, removeShow } = useRecentShows();
  const [selectedShow, setSelectedShow] = useState(null);

  return (
    <main className="p-10 space-y-6 bg-black min-h-screen text-white">
      <h1 className="text-2xl font-bold">마이페이지</h1>

      <section>
        <h2 className="text-xl font-bold mb-4 text-zinc-400">최근 본 콘텐츠</h2>
        
        {/* 2. 저장된 데이터가 없을 때의 처리 */}
        {recentShows.length === 0 ? (
          <p className="text-zinc-600">최근 본 콘텐츠가 없습니다.</p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {recentShows.map((show) => (
              <div
                key={show.id}
                className="relative group cursor-pointer"
                onClick={() => setSelectedShow(show)}
              >
                <MovieCard show={show} />
                
                {/* 3. 삭제 버튼 구현 (이벤트 버블링 방지 포함) */}
                <button
                  onClick={(e) => {
                    e.stopPropagation(); // 카드 클릭 이벤트가 발생하지 않도록 차단
                    removeShow(show.id);
                  }}
                  className="absolute top-2 right-2 bg-black/60 text-white text-xs rounded-full w-6 h-6 items-center justify-center hidden group-hover:flex"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* 4. 상세보기 모달 연결 */}
      <Modal show={selectedShow} onClose={() => setSelectedShow(null)} />
    </main>
  );
};

export default MyPage;