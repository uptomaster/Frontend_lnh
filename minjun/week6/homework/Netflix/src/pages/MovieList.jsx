import { useEffect, useState } from "react";
import Modal from "../components/MovieModal";
import MovieCard from "../components/MovieCard";
import axios from "axios";
import SearchBar from "../components/SearchBar";
import useRecentShow from "../hooks/useRecentShow";
// [추가] 토큰을 가져오기 위해 Zustand 스토어 임포트 (경로를 프로젝트에 맞게 확인하세요)
import { useAuthStore } from "../stores/useAuthStore";

const MovieList = () => {
  const [shows, setShows] = useState([]);
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedShow, setSelectedShow] = useState(null);
  const { addShow } = useRecentShow();

  // 초기 전체 영화 목록 가져오기 (기존과 동일)
  useEffect(() => {
    const controller = new AbortController();
    axios
      .get("https://api.tvmaze.com/shows", { signal: controller.signal })
      .then((res) => setShows(res.data))
      .catch(() => {});

    return () => controller.abort();
  }, []);

  const trimmedQuery = query.trim();

  // 검색 로직 (기존과 동일)
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

  const featured = shows.slice(0, 4);
  const grid = shows.slice(4, 20);

  /* 
     [중요 수정] 중복 선언 오류 해결 및 통합 완료
     - async 키워드를 붙여 내부에서 await(비동기 통신)를 쓸 수 있게 함
     - 최근본 콘텐츠 저장, 모달창 열기, 백엔드 서버 저장(/api/contents)을 한 번에 처리
  */
  const handleCardClick = async (show) => {
    addShow(show); // 1. 로컬 훅에 최근 본 예능/영화 추가
    setSelectedShow(show); // 2. 상세 정보 모달 오픈

    // 3. 스웨거 API (/api/contents) 호출하여 조회한 컨텐츠 서버에 저장 (POST)
    try {
      // Zustand 스토어 상태에서 현재 로그인한 유저의 토큰을 가져옴
      const token = useAuthStore.getState().token;

      if (!token) {
        console.warn("로그인 토큰이 없어 서버에 콘텐츠를 저장하지 못했습니다.");
        return;
      }

      await axios.post(
        "http://13.209.77.164:8080/api/contents",
        {
          contentId: show.id, // TVMaze의 고유 ID
          title: show.name, // 제목
          imageUrl: show.image?.medium || "", // 이미지 주소
          summary: show.summary || "설명이 없습니다.", // 줄거리
        },
        {
          headers: {
            Authorization: `Bearer ${token}`, // 헤더에 인증 토큰 첨부
          },
        },
      );
      console.log(
        "서버에 콘텐츠 저장 성공 (F12 Network 탭에서 status 200/201 확인 가능)",
      );
    } catch (error) {
      // 401(인증안됨), 403(권한없음) 등이 뜨는지 개발자모드 네트워크 탭에서 확인할 수 있습니다.
      console.error("콘텐츠 서버 저장 실패:", error);
    }
  };

  return (
    // 반응형 메인 컨테이너 패딩 적용
    <main className="p-4 md:p-10 space-y-10">
      <SearchBar value={query} onChange={setQuery} />

      {trimmedQuery ? (
        <section>
          <h2 className="text-white text-lg md:text-xl font-bold mb-4">
            검색 결과 &quot;{trimmedQuery}&quot;
          </h2>
          {searchResults.length === 0 ? (
            <p className="text-gray-400">결과가 없습니다.</p>
          ) : (
            // 반응형 그리드 적용: 모바일 2열 ~ 데스크톱 6열
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
          {/* Featured 가로 스크롤 섹션 */}
          <section>
            <h2 className="text-white text-lg md:text-xl font-bold mb-4">
              Featured
            </h2>
            <div className="flex gap-4 md:gap-6 overflow-x-auto no-scrollbar pb-4">
              {featured.map((show) => (
                <div
                  key={show.id}
                  className="w-40 sm:w-52 md:w-60 flex-shrink-0 cursor-pointer hover:scale-105 transition-transform duration-300"
                  onClick={() => handleCardClick(show)}
                >
                  <MovieCard show={show} />
                </div>
              ))}
            </div>
          </section>

          {/* All Shows 하단 반응형 그리드 섹션 */}
          <section>
            <h2 className="text-white text-lg md:text-xl font-bold mb-4">
              All Shows
            </h2>
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

      {/* 모달 팝업 컴포넌트 */}
      <Modal show={selectedShow} onClose={() => setSelectedShow(null)} />
    </main>
  );
};

export default MovieList;
