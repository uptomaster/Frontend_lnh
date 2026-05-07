import React from 'react';

const MovieModal = ({ movie, setModalOpen }) => {
  const { movieImage, title, releaseDate, mainCharacter, director, description } = movie;

  return (
    // 배경 어둡게 처리 (조건 반영)
    <div 
      className="fixed inset-0 z-[100] flex justify-center items-center bg-black/80 backdrop-blur-sm p-4"
      onClick={() => setModalOpen(false)} // 배경 클릭 시 닫기 (조건 반영)
    >
      {/* 모달 본체: e.stopPropagation()으로 내부 클릭 시 닫힘 방지 */}
      <div 
        className="relative bg-zinc-900 w-full max-w-2xl rounded-xl overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* 우측 상단 X 버튼 (조건 반영) */}
        <button 
          className="absolute top-4 right-4 text-white hover:text-red-500 text-2xl z-10 transition-colors"
          onClick={() => setModalOpen(false)}
        >
          ✕
        </button>

        <div className="flex flex-col md:flex-row">
          {/* 포스터 이미지 (조건 반영) */}
          <img 
            src={movieImage} 
            alt={title} 
            className="w-full md:w-1/2 aspect-[2/3] object-cover"
          />
          
          {/* 상세 정보 */}
          <div className="p-8 flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-white mb-2">{title}</h2>
            <p className="text-red-600 font-bold mb-4 tracking-tighter">LIFE MOVIE ‼️</p>
            
            <div className="space-y-4 text-zinc-300 text-sm">
              <p className="leading-relaxed">
                <span className="text-zinc-500 font-medium">줄거리:</span> {description}
              </p>
              <div className="border-t border-zinc-800 pt-4 space-y-2">
                <p><span className="text-zinc-500">감독:</span> {director}</p>
                <p><span className="text-zinc-500">출연:</span> {mainCharacter}</p>
                <p className="text-zinc-600">📅 개봉일: {releaseDate}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;