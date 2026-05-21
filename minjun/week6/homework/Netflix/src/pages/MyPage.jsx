import { useState, useEffect } from "react";
import MovieModal from "../components/MovieModal";
import MovieCard from "../components/MovieCard";
import axios from "axios";
import useAuthStore from "../stores/useAuthStore";

const MyPage = () => {
  const [savedShows, setSavedShows] = useState([]);
  const [selectedShow, setSelectedShow] = useState(null);

  const accessToken = useAuthStore((state) => state.accessToken);

  useEffect(() => {
    const fetchSavedContents = async () => {
      try {
        const res = await axios.get("http://13.209.77.164:8080/api/contents", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        const formattedData = res.data.map((item) => ({
          id: item.contentId,
          name: item.title,
          image: { medium: item.imageUrl },
          summary: item.summary,
        }));

        setSavedShows(formattedData);
      } catch (error) {
        console.error("저장된 콘텐츠 조회 실패 (F12 네트워크 확인):", error);
      }
    };

    if (accessToken) fetchSavedContents();
  }, [accessToken]);

  return (
    <main className="min-h-screen bg-[#141414] pt-24 md:pt-28 p-6 md:p-10 space-y-6">
      <h1 className="text-white text-xl md:text-2xl font-bold">마이페이지</h1>

      <section>
        <h2 className="text-white text-lg md:text-xl font-bold mb-4">
          서버에 저장된 콘텐츠
        </h2>
        {savedShows.length === 0 ? (
          <p className="text-gray-400">저장된 콘텐츠가 없습니다.</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4">
            {savedShows.map((show) => (
              <div
                key={show.id}
                className="relative cursor-pointer hover:scale-105 transition-transform"
                onClick={() => setSelectedShow(show)}
              >
                <MovieCard show={show} />
              </div>
            ))}
          </div>
        )}
      </section>

      <MovieModal show={selectedShow} onClose={() => setSelectedShow(null)} />
    </main>
  );
};

export default MyPage;
