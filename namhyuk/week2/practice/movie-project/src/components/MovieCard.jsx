// src/components/MovieCard.jsx
import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    // 가장 바깥쪽 div에 group 클래스 추가 => 마우스 올릴때 정보 보이게 하기 위함
    // 호버 시 살짝 커지는 효과(hover:scale-105)
    <div className="group relative rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 hover:z-10 bg-gray-900 text-white aspect-[2/3] cursor-pointer">
      
      {/* 포스터 이미지 (기본으로 보이는 부분) */}
      <img 
        src={movie.poster} 
        alt={movie.title} 
        className="w-full h-full object-cover" 
      />
      
      {/* 기본 상태 => 투명하고 아래로 살짝 내려가 있음 */}
      {/* 부모가 호버 => 정보가 나타나고 올라옴 */}
      <div className="absolute inset-0 bg-black/80 p-5 flex flex-col justify-end opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
        <h3 className="text-xl font-bold mb-2">{movie.title}</h3>
        <p className="text-sm text-gray-400 mb-2">{movie.releaseDate} • {movie.director}</p>
        <p className="text-sm text-gray-300 line-clamp-3 mb-3">{movie.plot}</p>
        <p className="text-xs text-indigo-400 font-semibold truncate">출연: {movie.cast}</p>
      </div>
    </div>
  );
};

export default MovieCard;