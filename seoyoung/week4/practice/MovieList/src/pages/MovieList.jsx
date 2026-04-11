import { useEffect, useState } from 'react';
import MovieModal from '../components/MovieModal.jsx';
import MovieCard from '../components/MovieCard.jsx';
import SearchBar from '../components/SearchBar.jsx';
import axios from 'axios';
//API로 데이터를 달라고 요쳥하고 받아오는 역할을 하는 통신 라이브러리
import useRecentShow from '../hooks/useRecentShow.js';

const MovieList = () => {
  const [shows, setShows] = useState([]); //전체 영화목록
  const [query, setQuery] = useState(''); //사용자가 검색창에 입력하는 검색어 담음
  const [searchResults, setSearchResults] = useState([]); //검색된 영화목록
  const [selectedShow, setSelectedShow] = useState(null); //포스터 클릭 시 띄울 모달창에 넘길 영화정보

  const { addShow } = useRecentShow(); //최근 본 영화 추가하는 함수 -> 선언을 js에서 함!

  useEffect(() => {
    //MovieList가 화면에 나타날 때 한번만 실행하기
    const controller = new AbortController(); //통신 취소
    // axios 연동
    axios
      .get('https://api.tvmaze.com/shows', { signal: controller.signal }) //sginal : 수신기 역할
      //사이트 들어오면 바로 영화데이터 달라고 함
      .then((res) => setShows(res.data))
      //받은 데이터를 shows에 저장함
      .catch(() => {});
    return () => controller.abort();
    //컴포넌트가 화면에서 사라질 때, 데이터를 받고있따면 통신을 취소함
  }, []);

  const trimmedQuery = query.trim();
  //검색어 앞뒤 공백 제거(trim)

  useEffect(() => {
    if (!trimmedQuery) {
      setSearchResults([]); //검색어가 없다면 검색 결과를 비우기
      return;
    }
    const controller = new AbortController();
    const timer = setTimeout(() => {
      axios
        .get(`http://api.tvmaze.com/search/shows?q=${trimmedQuery}`, {
          signal: controller.signal,
        }) //trimmedQuery에 들어있는 글자로 검색해달라고 요청
        .then((res) => setSearchResults(res.data.map((item) => item.show)))
        .catch(() => {});
    }, 400); //0.4초를 기다린 후(0.4초 동안 가만히 있으면) 입력 끝난걸로 알고 검색해라
    return () => {
      clearTimeout(timer);
      controller.abort();
    };
  }, [trimmedQuery]); //사용자가 검색어를 칠 때 마다 해당 함수를 실행해야함!

  const featured = shows.slice(0, 4);
  const grid = shows.slice(4, 20);
  //영화목록을 쪼갬, 상단엔 4개, 하단엔 전체

  const handleCardClick = (show) => {
    addShow(show);
    setSelectedShow(show);
  };

  return (
    <main className="p-10 space-y-10">
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
              {searchResults.map((show) => (
                <div
                  key={show.id}
                  onClick={() => handleCardClick(show)}
                  className="cursor-pointer"
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
            <h2 className="text-white text-xl font-bold mb-4">Featured</h2>
            <div className="flex gap-6 overflow-x-auto no-scrollbar">
              {featured.map((show) => (
                <div
                  key={show.id}
                  className="w-60 flex-shrink-0 cursor-pointer"
                  onClick={() => handleCardClick(show)}
                >
                  <MovieCard show={show} />
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-white text-xl font-bold mb-4">All Shows</h2>
            <div className="grid grid-cols-6 gap-4">
              {grid.map((show) => (
                <div
                  key={show.id}
                  className="cursor-pointer"
                  onClick={() => handleCardClick(show)}
                >
                  <MovieCard show={show} />
                </div>
              ))}
            </div>
          </section>
        </>
      )}

      {selectedShow && (
        <MovieModal
          movie={selectedShow}
          onClose={() => setSelectedShow(null)}
        />
      )}
    </main>
  );
};

export default MovieList;
