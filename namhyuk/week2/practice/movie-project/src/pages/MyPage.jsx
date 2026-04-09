import { useState } from "react";
import MovieModal from "../components/MovieModal";
import MovieCard from "../components/MovieCard";
import useRecentShows from "../hooks/useRecentShow";


const MyPage = () => {
  const {recentShow, removeShow} = useRecentShows();
  const {selectShow, setSelectShow} = useState(null);

  return(
    <main className="p-10 space-y-7">
      <h1 className="text-white text-2xl font-bold">마이페이지</h1>

      <section>
        <h2>최근 본 컨텐츠 </h2>
        {recentShows.length === 0 ? (<p>최근 본 컨텐츠가 없습니다..</p>) : ([])};
        <div>
          {recentShows.map((show) => {
            <div key={show.id} onClick={() => {setSelectShow(show)}} className="relative">
              <Movie show={shows}>
                <button onClick={(e) => {
                  e.stopPropagation();
                  removeShow(show.id);

                }} className="absolute top-2 right-2 text-white text-xs">
                  X
                </button>
              </Movie>
            </div>
          })}
        </div>  
      
      </section>
      <Modal show={selectShow} onClose={() => {
        setSelectShow
      }}></Modal>
    </main>
  )
}
export default MyPage;