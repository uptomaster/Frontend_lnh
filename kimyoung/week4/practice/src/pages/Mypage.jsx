import { useState } from 'react';
import { X } from 'lucide-react';
import MovieModal from '../components/MovieModal';
import MovieCard from '../components/layouts/MovieCard';
import useRecentShows from '../hooks/useRecentShow';

const MyPage = () => {
  const { recentShows, removeShow } = useRecentShows();
  const [selectedShow, setSelectedShow] = useState(null);

  return (
    <main className="p-10 space-y-6">
      <h1 className="text-white text-2xl font-bold border-b border-gray-800 pb-4">
        마이페이지
      </h1>

      <section>
        <h2 className="text-white text-xl font-bold mb-4">최근 본 콘텐츠</h2>
        {recentShows.length === 0 ? (
          <p className="text-gray-400">최근 본 콘텐츠가 없습니다.</p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {recentShows.map((show) => (
              <div
                key={show.id}
                className="relative group cursor-pointer"
                onClick={() => setSelectedShow(show)}
              >
                <MovieCard movie={show} />
                <button
                  onClick={(e) => {
                    e.stopPropagation(); // 모달 방지
                    removeShow(show.id);
                  }}
                  className="absolute top-2 right-2 bg-red-600 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition shadow-lg"
                >
                  <X size={16} />
                </button>
              </div>
            ))}
          </div>
        )}
      </section>

      <MovieModal movie={selectedShow} onClose={() => setSelectedShow(null)} />
    </main>
  );
};

export default MyPage;
