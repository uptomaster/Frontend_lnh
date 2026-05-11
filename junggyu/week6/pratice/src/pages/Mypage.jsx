import { useState } from "react";
import Modal from "../components/Modal";
import MovieCard from "../components/MovieCard";
import useRecentShows from "../hooks/useRecentShow";
import out from '/src/assets/X.png'



const Mypage = () => {
  const {recentShows, removeShow} = useRecentShows();
  const [ selectedShow, setSelectedShow] = useState(null);





  return (
    <main className="text-white p-10">
      <section className="flex flex-col gap-2">
        <img
            src="/src/assets/profile.png"
            alt="프로필 이미지"
            className="w-28 h-28 rounded-2xl"
        />
        
        <h1 className="text-xl font-semibold text-center mb-[30px] w-28">안정규</h1>
      </section>

    

      <section>
          <h2>최근본 컨텐츠</h2>
          {recentShows.length ===0?(
            <p className="text-gray-400">최근 본 콘텐츠가 없습니다.</p>
          ):(
            <div>
              {recentShows.map((show)=>(
                <div key={show.id} onClick={()=> setSelectedShow(show)} className="w-[220px]">
                  <MovieCard movie={show} />
                  <button
                    onClick={(e)=> {
                      e.stopPropagation();
                      removeShow(show.id);
                    }}
                    >
                      <img src={out} className=' cursor-pointer hover:scale-130 h-[50px] w-[50px]' /> 
                    </button>
                </div>
              
              ))}
              </div>
            )}
          






      </section>
      <Modal show={ selectedShow} onClose={()=> selectedShow(null)}/>
    </main>
  );
}


export default Mypage