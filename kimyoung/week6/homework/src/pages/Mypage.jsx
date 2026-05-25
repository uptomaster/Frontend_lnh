import { useEffect, useState } from 'react';
import { getContentsAPI } from '../apis/contentsApi';
import MovieModal from '../components/MovieModal';
import MovieCard from '../components/layouts/MovieCard';

const MyPage = () => {
  const [myMovies, setMyMovies] = useState([]);
  const [selectedShow, setSelectedShow] = useState(null);

  useEffect(() => {
    const fetchMyMovies = async () => {
      try {
        const data = await getContentsAPI();
        setMyMovies(data);
      } catch (error) {
        console.error('저장 콘텐츠 조회 에러:', error);
        alert('저장된 무비를 불러오지 못했습니다.');
      }
    };

    fetchMyMovies();
  }, []);

  return (
    <main className="p-6 md:p-10 space-y-6 max-w-[1400px] mx-auto">
      <h1 className="text-white text-2xl font-bold border-b border-gray-800 pb-4">
        마이페이지
      </h1>

      <section>
        <h2 className="text-white text-xl font-bold mb-4">저장한 무비</h2>

        {myMovies.length === 0 ? (
          <p className="text-gray-400">저장한 무비가 없습니다.</p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {myMovies.map((movie) => (
              <MovieCard
                key={movie.internalId || movie.id}
                movie={movie}
                onOpenModal={setSelectedShow}
              />
            ))}
          </div>
        )}
      </section>

      <MovieModal movie={selectedShow} onClose={() => setSelectedShow(null)} />
    </main>
  );
};

export default MyPage;
