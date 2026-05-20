import { useEffect, useState } from "react";
import Modal from "../components/MovieModal";
import MovieCard from "../components/MovieCard";
import axios from 'axios';
import SearchBar from "../components/SearchBar";
import useRecentShow from "../hooks/useRecentShow";

const MovieList = () => {
  const [shows, setShows] = useState([]);
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedShow, setSelectedShow] = useState(null);
  const { addShow } = useRecentShow();

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
        .get(`https://api.tvmaze.com/search/shows?q=${trimmedQuery}`, { signal: controller.signal })
        .then((res) => setSearchResults(res.data.map((item) => item.show)))
        .catch(() => {});
    }, 400);
    return () => {
      clearTimeout(timer);
      controller.abort();
    };
  }, [trimmedQuery]);
  
  const featured = shows.slice(0, 4);
  const grid = shows.slice(4, 20);

  const handleCardClick = (show) => {
    addShow(show);
    setSelectedShow(show);
  };

  return (
    /* 모바일에서는 여백을 적게 설정함*/
    <main className="p-4 md:p-10 space-y-10">
      <SearchBar value={query} onChange={setQuery} />

      {trimmedQuery ? (
        <section>
          {/* 텍스트 크기 반응형*/}
          <h2 className="text-white text-lg md:text-xl font-bold mb-4">
            검색 결과 &quot;{trimmedQuery}&quot;
          </h2>
          {searchResults.length === 0 ? (
            <p className="text-gray-400">결과가 없습니다.</p>
          ) : (
            /* 검색결과, 화면 크기에 따라 열 개수를 늘렸음.*/
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4">
              {searchResults.map((show) => (
                <div
                  key={show.id}
                  onClick={() => handleCardClick(show)}
                  className="cursor-pointer hover:scale-105 transition-transform duration-300"
                >
                  <MovieCard show={show} />
                </div>
              ))}
            </div>
          )}
        </section>
      ) : (
        <>
          <section>
            <h2 className="text-white text-lg md:text-xl font-bold mb-4">Featured</h2>
            {/* 가로 스크롤 여백 반응형 */}
            <div className="flex gap-4 md:gap-6 overflow-x-auto no-scrollbar pb-4">
              {featured.map((show) => (
                <div
                  key={show.id}
                  /* w-40 / sm:w-52 / md:w-60 화면이 커질수록 카드 너비를 확대 */
                  className="w-40 sm:w-52 md:w-60 flex-shrink-0 cursor-pointer hover:scale-105 transition-transform duration-300"
                  onClick={() => handleCardClick(show)}
                >
                  <MovieCard show={show} />
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-white text-lg md:text-xl font-bold mb-4">All Shows</h2>
            {/* 하단 그리드 반응형(검색결과와 동일)*/}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4">
              {grid.map((show) => (
                <div
                  key={show.id}
                  className="cursor-pointer hover:scale-105 transition-transform duration-300"
                  onClick={() => handleCardClick(show)}
                >
                  <MovieCard show={show} />
                </div>
              ))}
            </div>
          </section>
        </>
      )}

      <Modal show={selectedShow} onClose={() => setSelectedShow(null)} />
    </main>
  );
};

export default MovieList;