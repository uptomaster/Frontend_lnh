import { useState } from 'react';
import MovieCard from '../components/layouts/MovieCard';
import Modal from '../components/layouts/Modal';
import useRecentShow from '../hooks/useRecentShow.js';

const MyPage = () => {
  const { recentShows, removeShow } = useRecentShow();
  const [selectedShow, setSelectedShow] = useState(null);

  return (
    <main className="p-10">
      <h1 className="text-white text-2xl font-bold mb-6">My page</h1>
      <section>
        <h2 className="text-white text-xl font-bold mb-4">최근 본 컨텐츠</h2>
        {recentShows.length === 0 ? (
          <p className="text-gray-400">최근 본 컨텐츠가 없습니다</p>
        ) : (
          <div className="grid grid-cols-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6  gap-4">
            {recentShows.map((show) => (
              <div
                key={show.id}
                onClick={() => setSelectedShow(show)}
                className="cursor-pointer relative"
              >
                <MovieCard show={show} />
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    removeShow(show.id);
                  }}
                  className="absolute top-2 right-2 bg-black/60 text-white rounded-full w-7 h-7"
                >
                  X
                </button>
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