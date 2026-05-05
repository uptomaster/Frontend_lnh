import axios from 'axios';
import { useEffect, useMemo, useState } from 'react';
import MovieModal from '../components/MovieModal';
import MovieCard from '../components/layouts/MovieCard';
import SearchBar from '../components/SearchBar';
import useRecentShows from '../hooks/useRecentShow';

const MovieList = () => {
  const [shows, setShows] = useState([]);
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedShow, setSelectedShow] = useState(null);
  const { addShow } = useRecentShows();

  useEffect(() => {
    const controller = new AbortController();
    axios
      .get('https://api.tvmaze.com/shows', { signal: controller.signal })
      .then((res) => setShows(res.data))
      .catch(() => {});
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
        .catch(() => {});
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

  return (
    <main className="p-6 md:p-10 space-y-10 max-w-[1400px] mx-auto">
      <div className="max-w-2xl mx-auto">
        <SearchBar value={query} onChange={(value) => setQuery(value)} />
      </div>

      {trimmedQuery ? (
        <section>
          <h2 className="text-white text-xl font-bold mb-6">
            {`검색 결과 "${trimmedQuery}"`}
          </h2>
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {searchResults.map((show) => (
              <div key={show.id} onClick={() => handleCardClick(show)}>
                <MovieCard movie={show} />
              </div>
            ))}
          </div>
        </section>
      ) : (
        <>
          <section>
            <h2 className="text-white text-xl font-bold mb-4">Featured</h2>
            <div className="flex gap-4 md:gap-6 overflow-x-auto no-scrollbar pb-4 -mx-6 px-6 md:mx-0 md:px-0">
              {featured.map((show) => (
                <div
                  key={show.id}
                  className="w-40 xs:w-48 md:w-60 flex-shrink-0"
                  onClick={() => handleCardClick(show)}
                >
                  <MovieCard movie={show} />
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-white text-xl font-bold mb-6">All Shows</h2>
            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {grid.map((show) => (
                <div key={show.id} onClick={() => handleCardClick(show)}>
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
