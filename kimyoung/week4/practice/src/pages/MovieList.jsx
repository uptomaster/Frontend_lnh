import axios from 'axios';
import { useEffect, useMemo, useState } from 'react';
import MovieModal from '../components/MovieModal'; // 학우님 파일명에 맞춤
import MovieCard from '../components/layouts/MovieCard';
import SearchBar from '../components/SearchBar';
import useRecentShows from '../hooks/useRecentShow';

const MovieList = () => {
  const [shows, setShows] = useState([]);
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedShow, setSelectedShow] = useState(null);
  const { addShow } = useRecentShows();

  // 초기 리스트 로드
  useEffect(() => {
    const controller = new AbortController();
    axios
      .get('https://api.tvmaze.com/shows', { signal: controller.signal })
      .then((res) => setShows(res.data))
      .catch(() => {});
    return () => controller.abort();
  }, []);

  const trimmedQuery = query.trim();

  // 검색 로직 (Debounce 적용)
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
        .catch(() => {});
    }, 400);

    return () => {
      clearTimeout(timer);
      controller.abort();
    };
  }, [trimmedQuery]);

  // [최적화] useMemo로 리스트 분리
  const featured = useMemo(() => shows.slice(0, 4), [shows]);
  const grid = useMemo(() => shows.slice(4, 22), [shows]);

  const handleCardClick = (show) => {
    addShow(show); // 최근 본 콘텐츠 추가
    setSelectedShow(show); // 모달 열기
  };

  return (
    <main className="p-10 space-y-10">
      <SearchBar value={query} onChange={(value) => setQuery(value)} />

      {trimmedQuery ? (
        <section>
          <h2 className="text-white text-xl font-bold mb-4">
            {`검색 결과 "${trimmedQuery}"`}
          </h2>
          {searchResults.length === 0 ? (
            <p className="text-gray-400">결과가 없습니다.</p>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {searchResults.map((show) => (
                <div
                  key={show.id}
                  onClick={() => handleCardClick(show)}
                  className="cursor-pointer"
                >
                  <MovieCard movie={show} />
                </div>
              ))}
            </div>
          )}
        </section>
      ) : (
        <>
          <section>
            <h2 className="text-white text-xl font-bold mb-4">Featured</h2>
            <div className="flex gap-6 overflow-x-auto no-scrollbar pb-4">
              {featured.map((show) => (
                <div
                  key={show.id}
                  className="w-60 flex-shrink-0 cursor-pointer"
                  onClick={() => handleCardClick(show)}
                >
                  <MovieCard movie={show} />
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-white text-xl font-bold mb-4">All Shows</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {grid.map((show) => (
                <div
                  key={show.id}
                  className="cursor-pointer"
                  onClick={() => handleCardClick(show)}
                >
                  <MovieCard movie={show} />
                </div>
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
