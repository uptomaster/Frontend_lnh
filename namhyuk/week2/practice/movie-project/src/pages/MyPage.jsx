import { useState } from "react";
import MovieModal from "../components/MovieModal";
import MovieCard from "../components/MovieCard";
import useRecentShows from "../hooks/useRecentShow";

const MyPage = () => {
  const { recentShows, removeShow } = useRecentShows();
  const [selectShow, setSelectShow] = useState(null);

  return (
    <main className="p-10 space-y-7">
      <h1 className="text-white text-2xl font-bold">마이페이지</h1>

      <section>
        <h2>최근 본 컨텐츠 </h2>
        {recentShows.length === 0 ? (<p>최근 본 컨텐츠가 없습니다..</p>) : (
          <div className="grid grid-cols-4 gap-6">
            {recentShows.map((show, index) => {
              console.log("마이페이지에 들어온 데이터:", show);
              // show가 없거나 id가 없는 비정상 데이터 방어 로직
              if (!show) return null;

              // key값은 고유해야 하므로 show.id를 쓰고
              // 만약 데이터가 꼬여 id가 없을 경우를 대비해 index를 보조로 사용
              const uniqueKey = show.id ? `show-${show.id}` : `index-${index}`;

              return (
                <div
                  key={uniqueKey}
                  onClick={() => setSelectShow(show)}
                  className="relative group cursor-pointer"
                >
                  {/* MovieCard에 데이터를 넘겨줌 */}
                  <MovieCard movie={show} />
                  {/* 삭제 버튼이 MovieCard 내부가 아니라 위에 겹쳐지도록 배치 */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      removeShow(show.id);
                    }}
                    className="absolute top-2 right-2 z-20 bg-black/50 hover:bg-red-600 text-white w-6 h-6 rounded-full flex items-center justify-center transition-colors">
                    ✕
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </section>

      {selectShow && (
        <MovieModal show={selectShow} onClose={() => setSelectShow(null)} />
      )}
    </main>
  )
}
export default MyPage;