import { useState } from "react";
import Modal from "../components/MovieModal";
import MovieCard from "../components/MovieCard";
import useRecentShow from "../hooks/useRecentShow";

const MyPage = () => {
  const { recentShows, removeShow } = useRecentShow();
  const [selectedShow, setSelectedShow] = useState(null);

  return (
    <main className="p-10 space-y-7">
      <h1 className="text-white text-2x1 font-bold">마이페이지</h1>

      <section>
        <h2>최근 본 콘텐츠</h2>
        {recentShows.length === 0 ? (
          <p>최근 본 콘텐츠가 없습니다</p>
        ) : (
          <div
            key={show.id}
            onClick={() => setSelectedShow(show)}
            className="relateiv"
          >
            <MovieCard show={show} />
            <button
              onClick={(e) => {
                e.stopPropagation();
                removeShow(show.id);
              }}
              className="absolute top-2 rigit-2 text-white text-xs"
            >
              X
            </button>
          </div>
        )}
      </section>
      <Modal show={selectedShow} />
    </main>
  );
};

export default MyPage;
