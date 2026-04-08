import React from 'react';

// movie와 setModalOpen을 props로 받아온다.
const MovieModal = ({ movie, setModalOpen }) => {
  return (
    // 모달 전체 배경 (어둡게 처리)
    <div className="fixed inset-0 z-50 flex justify-center items-center bg-black/80 p-4">
      
      {/* 모달 박스 컨테이너 */}
      <div className="relative w-full max-w-2xl bg-gray-900 rounded-xl overflow-hidden shadow-2xl">
        
        {/* 닫기 버튼 */}
        <button 
          className="absolute right-4 top-4 text-white text-2xl hover:text-gray-400 transition-colors z-10" onClick={() => setModalOpen(false)} // 닫기 기능
        >
          ✕
        </button>

        {/* 영화 포스터 이미지 */}
        <img 
          className="w-full aspect-video object-cover" src={movie?.poster} alt={movie?.title} 
        />
        
        {/* 영화 상세 정보 영역 */}
        <div className="p-8 text-white">
          <h2 className="text-3xl font-bold mb-2">{movie?.title}</h2>
          <p className="text-indigo-400 font-semibold mb-4">
            {movie?.releaseDate} • {movie?.director}
          </p>
          
          <div className="space-y-4">
            <div>
              <h4 className="text-gray-400 text-sm mb-1">줄거리</h4>
              <p className="text-gray-200 leading-relaxed">{movie?.plot}</p>
            </div>
            
            <div>
              <h4 className="text-gray-400 text-sm mb-1">출연진</h4>
              <p className="text-gray-200">{movie?.cast}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;