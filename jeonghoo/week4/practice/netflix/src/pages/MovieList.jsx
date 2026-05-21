import { useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import MovieCard from '../components/MovieCard';
import MovieModal from '../components/MovieModal';
import SearchBar from '../components/SearchBar';

const MovieList = () => {
  const [shows, setShows] = useState([]);
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    axios
      .get('https://api.tvmaze.com/shows', {
        signal: controller.signal,
      })
      .then((response) => {
        setShows(response.data);
      })
      .catch(() => {});

    return () => {
      controller.abort();
    };
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
        .then((response) => {
          setSearchResults(response.data.map((item) => item.show));
        })
        .catch(() => {});
    }, 400);

    return () => {
      clearTimeout(timer);
      controller.abort();
    };
  }, [trimmedQuery]);

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

  const featured = useMemo(() => shows.slice(0, 4), [shows]);
  const grid = useMemo(() => shows.slice(4, 20), [shows]);

  const handleCardClick = (movie) => {
    setSelectedMovie(movie);
  };

  return (
    <>
      <main className="min-h-screen bg-black p-10">
        <SearchBar value={query} onChange={setQuery} />

        {trimmedQuery ? (
          <section>
            <h2 className="mb-4 text-xl font-bold text-white">
              검색 결과 &quot;{trimmedQuery}&quot;
            </h2>

            {searchResults.length === 0 ? (
              <p className="text-gray-400">결과가 없습니다.</p>
            ) : (
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
                {searchResults.map((movie) => (
                  <MovieCard
                    key={movie.id}
                    movie={movie}
                    onClick={() => handleCardClick(movie)}
                  />
                ))}
              </div>
            )}
          </section>
        ) : (
          <>
            <section className="mb-10">
              <h2 className="mb-4 text-xl font-bold text-white">Featured</h2>

              <div className="flex gap-6 overflow-x-auto">
                {featured.map((movie) => (
                  <div key={movie.id} className="w-60 flex-shrink-0">
                    <MovieCard
                      movie={movie}
                      onClick={() => handleCardClick(movie)}
                    />
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-bold text-white">All Shows</h2>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
                {grid.map((movie) => (
                  <MovieCard
                    key={movie.id}
                    movie={movie}
                    onClick={() => handleCardClick(movie)}
                  />
                ))}
              </div>
            </section>
          </>
        )}
      </main>

      <MovieModal movie={selectedMovie} onClose={() => setSelectedMovie(null)} />
    </>
  );
};

export default MovieList;