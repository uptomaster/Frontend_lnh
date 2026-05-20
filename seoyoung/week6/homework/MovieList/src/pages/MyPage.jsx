import MovieModal from '../components/MovieModal';
import MovieCard from '../components/MovieCard';
import useRecentShows from '../hooks/useRecentShows';
import { useState } from 'react';

const Mypage = () => {
  //모달에 띄울 선택된 영화의 정보 자체를 담음
  const [selectedShow, setSelectedShow] = useState(null);
  //커스텀 훅에서 가져온 영화 삭제 기능
  const { removeShow, serverShows, recentShows } = useRecentShows();

  return (
    <main className="p-10 space-y-6">
      <h1 className="text-white text-2xl font-bold">마이페이지</h1>

      <section>
        <h2 className="text-white text-xl font-bold mb-4">최근 본 컨텐츠</h2>
        {serverShows.length === 0 ? (
          <p className="text-gray-400">최근 본 컨텐츠가 없습니다.</p>
        ) : (
          <div className="grid grid-cols-6 gap-4">
            {/*grid 기능으로 한 줄에 6개씩 배치*/}
            {/*카드를 클릭하면 해당 영화 데이터를 상태에 저장해서 Modal을 염*/}
            {serverShows.map((show) => {
              //방금 클릭한 카드의 모든 데이터 가져오기
              const mergedData = recentShows.find(
                (recent) => String(recent.id) === String(show.tvMazeId)
              );

              //모든 데이터를 다 가질 수 있도록 이어붙이기(백엔드에서 장르 등등은 주지 않기 때문)
              const card = {
                ...show,
                ...(mergedData || {}),
                image: {
                  medium: show.imageUrl,
                },
              };

              return (
                <div
                  key={show.tvMazeId}
                  //클릭 시 해당 영화 저장
                  onClick={() => setSelectedShow(card)}
                  className="relative group cursor-pointer"
                >
                  {/*개별 MovieCard를 보여줌*/}
                  <MovieCard show={card} />

                  <button
                    onClick={(e) => {
                      //이벤트 버블링 방지 : 버튼을 클릭햇다고 부모 div의 onClick이 실행되지 않도록 함
                      e.stopPropagation();
                      //커스텀 훅의 remove함수 실행
                      removeShow(show.tvMazeId);
                    }}
                    className="absolute top-2 right-2 bg-black/60 text-white text-xs rounded-full w-6 h-6 items-center justify-center hidden group-hover:flex"
                  >
                    X
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/*모달 컴포넌트 : selecetedShow에 데이터가 있으면 보이고, 닫을 땐 다시 null로 변경됨*/}
      <MovieModal show={selectedShow} onClose={() => setSelectedShow(null)} />
    </main>
  );
};

export default Mypage;
