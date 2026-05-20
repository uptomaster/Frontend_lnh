import { useMemo, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MovieCard from "../components/layouts/MovieCard";
import SearchBar from "../components/SearchBar";
import Modal from "../components/layouts/Modal";
import axios from "axios";
import useRecentShows from "../hooks/useRecentShow";
import useAuthStore from "../stores/useAuthStore";
import { saveContentAPI } from "../apis/authApi";

const MovieList = () => {
  const [shows, setShows] = useState([]);
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const { addShow } = useRecentShows();
  const { accessToken } = useAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    const controller = new AbortController();
    axios
      .get("https://api.tvmaze.com/shows", { signal: controller.signal })
      .then((response) => setShows(response.data))
      .catch(() => {});
    // axios 연동

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

  const featured = useMemo(() => shows.slice(0, 4), [shows]);
  const grid = useMemo(() => shows.slice(4, 20), [shows]);

  const handleCardClick = async (movie) => {
    try {
      //로그인 하지 않은 사용자는 저장 요청 보내지 못함
      if (!accessToken) {
        navigate("/login");
        return;
      }
      // 영화 카드를 저장할때 토근 및 영화 데이터 저장
      await saveContentAPI(movie, accessToken);

      addShow(movie);
      setSelectedMovie(movie);
    } catch (error) {
      alert("컨텐츠 저장에 실패했습니다.");
    }
  };

  return (
    <div>
      <main className="p-10">
        <SearchBar value={query} onChange={setQuery} />
        {trimmedQuery ? (
          <section>
            <h2 className="text-white text-xl font-bold mb-4">
              검색 결과 &quot;{trimmedQuery}&quot;
            </h2>
            {searchResults.length === 0 ? (
              <p className="text-gray-400">결과가 없습니다.</p>
            ) : (
              <div className="grid grid-cols-6 gap-4">
                {searchResults.map((movie) => (
                  <div
                    key={movie.id}
                    onClick={() => handleCardClick(movie)}
                    className="cursor-pointer"
                  >
                    <MovieCard movie={movie} />
                  </div>
                ))}
              </div>
            )}
          </section>
        ) : (
          <>
            <section>
              <h2 className="text-white text-xl font-bold mb-4">Featured</h2>
              <div className="flex gap-6 overflow-x-auto no-scrollbar">
                {featured.map((movie) => (
                  <div
                    key={movie.id}
                    className="w-60 flex-shrink-0 cursor-pointer"
                    onClick={() => handleCardClick(movie)}
                  >
                    <MovieCard movie={movie} />
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-white text-xl font-bold mb-4">All Shows</h2>
              <div className="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4">
                {grid.map((movie) => (
                  <div
                    key={movie.id}
                    className="cursor-pointer"
                    onClick={() => handleCardClick(movie)}
                  >
                    <MovieCard movie={movie} />
                  </div>
                ))}
              </div>
            </section>
          </>
        )}
        <Modal movie={selectedMovie} onClose={() => setSelectedMovie(null)} />
      </main>
    </div>
  );
};

export default MovieList;
