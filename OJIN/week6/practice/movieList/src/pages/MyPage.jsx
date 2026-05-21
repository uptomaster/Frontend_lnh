import { useState, useEffect } from "react";
import Modal from "../components/layouts/Modal";
import MovieCard from "../components/layouts/MovieCard";
import useAuthStore from "../stores/useAuthStore";
import { getContentsAPI } from "../apis/authApi";

const MyPage = () => {
  const [contents, setContents] = useState([]);
  const [selectedShow, setSelectedShow] = useState(null);
  const { accessToken } = useAuthStore();

  useEffect(() => {
    const fetchContents = async () => {
      try {
        if (!accessToken) {
          alert("로그인이 필요합니다.");
          return;
        }

        const data = await getContentsAPI(accessToken);
        // 중복된 영화카드 제거
        const uniqueContents = [
          ...new Map(
            data.map((content) => [content.tvMazeId, content]),
          ).values(),
        ];
        // 서버에 저장된 영화의 tvMazedId를 이용해서 tvMaze에서 영화에 대한 정보 가져오기
        const mappedContents = await Promise.all(
          uniqueContents.map(async (content) => {
            const res = await fetch(
              `https://api.tvmaze.com/shows/${content.tvMazeId}`,
            );
            const detail = await res.json();

            return {
              id: detail.id,
              name: detail.name,
              image: {
                medium: detail.image?.medium ?? content.imageUrl,
              },
              genres: detail.genres ?? [],
              premiered: detail.premiered ?? "",
              summary: detail.summary ?? "",
            };
          }),
        );

        setContents(mappedContents);
      } catch (error) {
        alert("저장된 컨텐츠를 불러오지 못했습니다.");
      }
    };

    fetchContents();
  }, [accessToken]);

  return (
    <main className="p-10 space-y-6">
      <h1 className="text-white text-2xl font-bold">마이페이지</h1>

      <section>
        <h2 className="text-white text-xl font-bold mb-4">최근 본 콘텐츠</h2>
        {contents.length === 0 ? (
          <p className="text-gray-400">최근 본 콘텐츠가 없습니다.</p>
        ) : (
          <div className="grid grid-cols-6 gap-4">
            {contents.map((movie) => (
              <div
                key={movie.id}
                className="relative group cursor-pointer"
                onClick={() => setSelectedShow(movie)}
              >
                <MovieCard movie={movie} />
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    removeShow(movie.id);
                  }}
                  className="absolute top-2 right-2 bg-black/60 text-white text-xs rounded-full w-6 h-6 items-center justify-center hidden group-hover:flex"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        )}
      </section>

      <Modal movie={selectedShow} onClose={() => setSelectedShow(null)} />
    </main>
  );
};

export default MyPage;
