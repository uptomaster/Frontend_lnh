import { useEffect } from "react";
import { X, Star, Calendar, Tv } from "lucide-react";

const MovieModal = ({ show, onClose }) => {
  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [show]); 

  if (!show) return null;
  const summary = show.summary?.replace(/<[^>]+>/g, '') ?? '설명이 없습니다.';

  return (
    /* 모바일 터치 대응을 위해 z-[100]설정 */
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4"
      onClick={onClose}
    >
      {/* 모달 창 및 배치 반응형, 추가로 데스크톱은 설명이 사진 옆으로 나오도록 함 */}
      <div
        className="relative bg-gray-900 rounded-lg w-full max-w-md md:max-w-2xl shadow-2xl flex flex-col md:flex-row max-h-[90vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* 닫기 버튼 모바일일 때 오른쪽 상단 고정 */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 text-gray-400 hover:text-white bg-black/50 rounded-full p-1"
        >
          <X className="w-6 h-6" />
        </button>

        {/* 모바일일 떄 이미지 높이 고정*/}
        <div className="w-full md:w-1/2 h-64 md:h-auto overflow-hidden">
          <img
            src={
              show.image?.original ??
              show.image?.medium ??
              'https://via.placeholder.com/400x600?text=No+Image'
            }
            alt={show.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* 설명 영역 스크롤 최적화 */}
        <div className="p-6 flex flex-col gap-4 overflow-y-auto w-full md:w-1/2 no-scrollbar">
          <div>
            <h2 className="text-white text-xl md:text-2xl font-bold leading-tight pr-8">
              {show.name}
            </h2>
          </div>

          {/* 뱃지 및 상세 정보 반응형 */}
          <div className="flex flex-wrap gap-2">
            {show.genres?.map((g) => (
              <span
                key={g}
                className="bg-red-600 text-white text-[10px] md:text-xs px-2 py-1 rounded-full"
              >
                {g}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-2 text-sm text-gray-300">
            {show.rating?.average && (
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-400" />
                <span>{show.rating.average} / 10</span>
              </div>
            )}
            {show.premiered && (
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-gray-400" />
                <span>개봉: {show.premiered}</span>
              </div>
            )}
            {show.network?.name && (
              <div className="flex items-center gap-2">
                <Tv className="w-4 h-4 text-gray-400" />
                <span>채널: {show.network.name}</span>
              </div>
            )}
            {show.status && (
              <span
                className={`w-fit text-[10px] px-2 py-1 rounded-full font-semibold ${
                  show.status === 'Running'
                    ? 'bg-green-700 text-green-100'
                    : 'bg-gray-700 text-gray-300'
                }`}
              >
                {show.status}
              </span>
            )}
          </div>

          {/* 줄거리 반응형 */}
          <div className="mt-2">
             <h3 className="text-white font-semibold mb-1 text-sm md:text-base">줄거리</h3>
             <p className="text-gray-400 text-sm leading-relaxed">
               {summary}
             </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;