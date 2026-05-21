import { useEffect, useState } from 'react';
import MovieModal from '../components/MovieModal';
import MovieCard from '../components/MovieCard';
import useAuthStore from '../stores/useAuthStore';
import { getContentsAPI } from '../apis/contentApi';

const MyPage = () => {
  const accessToken = useAuthStore((state) => state.accessToken);

  const [savedMovies, setSavedMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    const fetchSavedMovies = async () => {
      if (!accessToken) {
        return;
      }

      try {
        const contents = await getContentsAPI(accessToken);

        const convertedMovies = contents.map((content) => ({
          id: content.tvMazeId,
          name: content.name,
          image: {
            medium: content.imageUrl,
            original: content.imageUrl,
          },
          genres: [],
          premiered: '저장된 콘텐츠',
          summary: '',
        }));

        setSavedMovies(convertedMovies);
      } catch (error) {
        console.error('저장된 컨텐츠 조회 실패:', error);
      }
    };

    fetchSavedMovies();
  }, [accessToken]);

  useEffect(() => {
    if (selectedMovie) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedMovie]);

  return (
    <>
      <main className="min-h-screen space-y-7 bg-black p-10">
        <h1 className="text-2xl font-bold text-white">마이페이지</h1>

        <section>
          <h2 className="mb-4 text-xl text-white">저장한 컨텐츠</h2>

          {savedMovies.length === 0 ? (
            <div className="text-gray-400">저장한 컨텐츠가 없습니다.</div>
          ) : (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
              {savedMovies.map((movie) => (
                <MovieCard
                  key={movie.id}
                  movie={movie}
                  onClick={() => setSelectedMovie(movie)}
                />
              ))}
            </div>
          )}
        </section>
      </main>

      <MovieModal movie={selectedMovie} onClose={() => setSelectedMovie(null)} />
    </>
  );
};

export default MyPage;