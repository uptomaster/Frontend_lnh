import { useEffect, useState } from "react";
import MovieCard from "../components/layouts/MovieCard.jsx";
import Modal from "../components/layouts/Modal.jsx";
import { getContentApi } from "../apis/contentApi";
import useAuthStore from "../stores/useAuthStore";

const MyPage = () => {
  const [contents, setContents] = useState([]);
  const [selectedShow, setSelectedShow] = useState(null);
  const accessToken = useAuthStore((state) => state.accessToken);

  useEffect(() => {
    const fetchContents = async () => {
      if (!accessToken) {
        console.log("로그인 토큰이 없습니다.");
        return;
      }

      try {
        const data = await getContentApi(accessToken);
        console.log("서버에서 받은 콘텐츠:", data);

        const mappedData = data
          .filter(
            (item, index, self) =>
              index === self.findIndex((t) => t.tvMazeId === item.tvMazeId),
          )
          .map((item) => ({
            id: item.internalId,
            name: item.name,
            image: {
              medium: item.imageUrl,
            },
          }));

        setContents(mappedData);
      } catch (error) {
        console.error("콘텐츠 조회 실패", error);
      }
    };

    fetchContents();
  }, [accessToken]);

  return (
    <main className="p-10">
      <h1 className="text-white text-2xl font-bold mb-6">My page</h1>

      <section>
        <h2 className="text-white text-xl font-bold mb-4">최근 본 컨텐츠</h2>

        {contents.length === 0 ? (
          <p className="text-gray-400">최근 본 컨텐츠가 없습니다</p>
        ) : (
          <div className="grid grid-cols-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {contents.map((show) => (
              <div
                key={show.id}
                onClick={() => setSelectedShow(show)}
                className="cursor-pointer relative"
              >
                <MovieCard show={show} />
              </div>
            ))}
          </div>
        )}
      </section>

      <Modal show={selectedShow} onClose={() => setSelectedShow(null)} />
    </main>
  );
};

export default MyPage;
