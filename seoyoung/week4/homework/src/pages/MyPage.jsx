import { useState } from 'react';
import MovieModal from '../components/MovieModal';
import MovieCard from '../components/MovieCard';
import useRecentShows from '../hooks/useRecentShows';

const Mypage = () => {
  //최근 본 데이터와 삭제함수
  const { recentShows, removieShow } = useRecentShows();
  //모달에 띄울 영화 정보를 관리하는 상태
  const [selectedShow, setSelectedShow] = useState(null);

  return (
    <main className="p-10 space-y-6">
      <h1 className="text-white text-2xl font-bold">마이페이지</h1>

      <section>
        <h2 className="text-white text-xl font-bold mb-4">최근 본 컨텐츠</h2>
        {recentShows.length === 0 ? (
          <p className="text-gray-400">최근 본 컨텐츠가 없습니다.</p>
        ) : (
          <div className="grid gird-cols-6 gap-4">
            {/*grid 기능으로 한 줄에 6개씩 배치*/}
            {/*카드를 클릭하면 해당 영화 데이터를 상태에 저장해서 Modal을 염*/}
            {recentShows.map((show) => (
              <div
                key={show.id}
                onClick={() => setSelectedShow(show)}
                className="relative group cursor-pointer"
              >
                {/*개별 MovieCard를 보여줌*/}
                <MovieCard show={show} />
                <button
                  onClick={(e) => {
                    //이벤트 버블링 방지 : 버튼을 클릭햇다고 부모 div의 onClick이 실행되지 않도록 함
                    e.stopPropagation();
                    //커스텀 훅의 remove함수 실행
                    removieShow(show.id);
                  }}
                  className="absolute top-2 right-2 bg-black/60 text-white text-xs rounded-full w-6 h-6 items-center justify-center hidden group-hover:flex"
                >
                  X
                </button>
              </div>
            ))}
          </div>
        )}
      </section>

      {/*모달 컴포넌트 : selecetedShow에 데이터가 있으면 보이고, 닫을 땐 다시 null로 변경됨*/}
      <MovieModal show={selectedShow} onClose={() => setSelectedShow(null)} />
    </main>
  );
};

export default Mypage;
