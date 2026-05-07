import { useEffect } from "react";
import { X, Star, Calendar, Tv } from "lucide-react";

const MovieModal = ({ show, onClose }) => {
  // 리액트 훅 사용
  useEffect(() => {
    // 1. show(데이터)가 있을 때만 잠그기
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      // 2. show가 null이 되면 풀기
      document.body.style.overflow = "unset";
    }

  //  페이지 나갔을 때
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [show]); 

  if (!show) return null;
  const summary = show.summary?.replace(/<[^>]+>/g, '') ?? '설명이 없습니다.';

  return (
    // 배경 어두워짐 구현+모달 외부 클릭시 닫힘
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80"
      onClick={() => {
        console.log("모달 외부 클릭");
        // 자꾸 안돼서 작동되나 확인해보려고 넣음
        onClose();
      }}
    >
      {/* 모달 창 이미지 정렬*/}
      <div
        className="relative bg-gray-900 p-6 rounded-lg w-11/12 max-w-md shadow-2xl flex flex-col items-center"
        onClick={(e) => {
          console.log("모달 내부 클릭");
          e.stopPropagation();
        }}
        // 모달 내부 클릭했을 때 창꺼짐 방지
      >
       

        {/* 이미지 가져오기 */}
        <img
          src={
            show.image?.original ??
            show.image?.medium ??
            'https://via.placeholder.com/400x600?text=No+Image'
          }
          alt={show.name}
          className="w-full p-2 rounded-xl md:w-64 object-cover flex-shrink-0"
        />
        <div className="p-6 flex flex-col gap-4 overflow-y-auto">
          <div className="flex items-start justify-between gap-4">
            <h2 className="text-white text-2xl font-bold leading-tight">
              {show.name}
            </h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white flex-shrink-0"
            >
              <X className="w-5 h-5 cursor-pointer" />
            </button>
          </div>

          {/* 뱃지 */}
          <div className="flex flex-wrap gap-2">
            {/* 장르 가져오기, map으로 여러 뱃지를 가져옴 */}
            {show.genres?.map((g) => (
              <span
                key={g}
                className="bg-red-600 text-white text-xs px-2 py-1 rounded-full"
              >
                {g}
              </span>
            ))}
          </div>

          {/* 평점, 개봉일, 방송사, 완결여부 가져오기 */}
          <div className="flex flex-col gap-2 text-sm text-gray-300">
            {show.rating?.average && (
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-400" />
                <span>{show.rating.average} / 10</span>
              </div>
            )}
            {show.premiered && (
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-gray-400" />
                <span>{show.premiered}</span>
              </div>
            )}
            {show.network?.name && (
              <div className="flex items-center gap-2">
                <Tv className="w-4 h-4 text-gray-400" />
                <span>{show.network.name}</span>
              </div>
            )}
            {show.status && (
              <span
                className={`w-fit text-xs px-2 py-1 rounded-full font-semibold ${
                  show.status === 'Running'
                    ? 'bg-green-700 text-green-100'
                    : 'bg-gray-700 text-gray-300'
                }`}
              >
                {show.status}
              </span>
            )}
          </div>

          {/* 줄거리 */}
          <p className="text-gray-400 text-sm leading-relaxed">{summary}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;
