import { useEffect, useState } from 'react';
import Modal from './Modal';
import MovieCard from './MovieCard';
import useRecentShows from './useRecentShow';
import { getContenstAPI } from '../apis/authApi';
import useAuthStore from '../stores/useAuthStore';

const MyPage = () => {
  const { recentShows, removeShow } = useRecentShows();
  const [selectedShow, setSelectedShow] = useState(null);
  const [myMovies, setMyMovies] = useState([]);
  const accessToken = useAuthStore((state)=> state.accessToken);

  useEffect(()=>{
    const fetchMyMovies = async () => {
      try {
        const data = await getContenstAPI(accessToken)
        setMyMovies(data)
      } catch (error) {
        console.error("조회 실패", error)
      }
    }
    if (accessToken) fetchMyMovies()
  }, [accessToken])

  return (
    <main className="p-10 space-y-6">
	      <h1 className="text-white text-2xl font-bold">마이페이지</h1>

        <section>
        <h2 className="text-white text-xl font-bold mb-4">저장한 콘텐츠</h2>
        {myMovies.length === 0 ? (
          <p className="text-gray-400">저장된 콘텐츠가 없습니다.</p>
        ) : (
          <div className="grid grid-cols-6 gap-4">
            {myMovies.map((movie) => (
              <div key={movie.internalId} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg w-full">
                <img
                  src={movie.imageUrl || "https://via.placeholder.com/210x295?text=No+Image"}
                  alt={movie.name}
                  className="w-full aspect-[2/3] object-cover p-2 rounded-2xl"
                />
                <div className="p-2">
                  <p className="text-white font-semibold truncate">{movie.name}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
      <section>
        <h2 className="text-white text-xl font-bold mb-4">최근 본 콘텐츠</h2>
        {recentShows.length === 0 ? (
          <p className="text-gray-400">최근 본 콘텐츠가 없습니다.</p>
        ) : (
          <div className="grid grid-cols-6 gap-4">
            {recentShows.map((show) => (
              <div
                key={show.id}
                className="relative group cursor-pointer"
                onClick={() => setSelectedShow(show)}
              >
                <MovieCard show={show} />
                <button
                  onClick={(e) => {
                    e.stopPropagation();
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

      <Modal show={selectedShow} close={() => setSelectedShow(null)} />
    </main>
  );
};

export default MyPage;
