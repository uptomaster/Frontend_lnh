import axios from 'axios';
import { useEffect, useMemo, useState } from 'react';
import { saveContentAPI } from '../apis/contentsApi';
import MovieModal from '../components/MovieModal';
import MovieCard from '../components/layouts/MovieCard';
import SearchBar from '../components/SearchBar';
import useRecentShows from '../hooks/useRecentShow';
import useAuthStore from '../stores/useAuthStore';

const MovieList = () => {
  const [shows, setShows] = useState([]);
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedShow, setSelectedShow] = useState(null);

  const { addShow } = useRecentShows();
  const accessToken = useAuthStore((state) => state.accessToken);

  useEffect(() => {
    const controller = new AbortController();

    axios
      .get('https://api.tvmaze.com/shows', { signal: controller.signal })
      .then((res) => setShows(res.data))
      .catch((error) => {
        if (error.name !== 'CanceledError') {
          console.error('콘텐츠 조회 에러:', error);
        }
      });

    return () => controller.abort();
  }, []);

  const trimmedQuery = query.trim();

  useEffect(() => {
    if (!trimmedQuery) {
      setSearchResults([]);
      return;
    }

    const controller = new AbortController();

    const timer = setTimeout(() => {
      axios
        .get(`https://api.tvmaze.com/search/shows?q=${trimmedQuery}`, {
          signal: controller.signal,
        })
        .then((res) => setSearchResults(res.data.map((item) => item.show)))
        .catch((error) => {
          if (error.name !== 'CanceledError') {
            console.error('검색 에러:', error);
          }
        });
    }, 400);

    return () => {
      clearTimeout(timer);
      controller.abort();
    };
  }, [trimmedQuery]);

  const featured = useMemo(() => shows.slice(0, 6), [shows]);
  const grid = useMemo(() => shows.slice(6, 24), [shows]);

  const handleCardClick = (show) => {
    addShow(show);
    setSelectedShow(show);
  };

  const handleSaveMovie = async (show) => {
    if (!accessToken) {
      alert('로그인 후 이용해주세요.');
      return;
    }

    try {
      await saveContentAPI({
        id: show.id,
        name: show.name,
        image: show.image?.medium || show.image?.original || '',
      });

      alert('무비리스트에 저장되었습니다.');
    } catch (error) {
      console.error('무비 저장 에러:', error);
      alert('저장에 실패했습니다.');
    }
  };

  return (
    <main className="p-6 md:p-10 space-y-10 max-w-[1400px] mx-auto">
      <div className="max-w-2xl mx-auto">
        <SearchBar value={query} onChange={setQuery} />
      </div>

      {trimmedQuery ? (
        <section>
          <h2 className="text-white text-xl font-bold mb-6">
            검색 결과 `{trimmedQuery}`
          </h2>

          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {searchResults.map((show) => (
              <MovieCard
                key={show.id}
                movie={show}
                onOpenModal={handleCardClick}
                onSave={handleSaveMovie}
              />
            ))}
          </div>
        </section>
      ) : (
        <>
          <section>
            <h2 className="text-white text-xl font-bold mb-4">Featured</h2>

            <div className="flex gap-4 md:gap-6 overflow-x-auto pb-4 -mx-6 px-6 md:mx-0 md:px-0">
              {featured.map((show) => (
                <div
                  key={show.id}
                  className="w-40 xs:w-48 md:w-60 flex-shrink-0"
                >
                  <MovieCard
                    movie={show}
                    onOpenModal={handleCardClick}
                    onSave={handleSaveMovie}
                  />
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-white text-xl font-bold mb-6">All Shows</h2>

            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {grid.map((show) => (
                <MovieCard
                  key={show.id}
                  movie={show}
                  onOpenModal={handleCardClick}
                  onSave={handleSaveMovie}
                />
              ))}
            </div>
          </section>
        </>
      )}

      <MovieModal movie={selectedShow} onClose={() => setSelectedShow(null)} />
    </main>
  );
};

export default MovieList;
