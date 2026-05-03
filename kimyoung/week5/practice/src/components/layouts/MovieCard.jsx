import React from 'react';

const MovieCard = ({ movie, onOpenModal }) => {
  // 데이터가 없을 경우를 대비한 안전장치
  if (!movie) return null;

  // 1. API 데이터(show)와 기존 로컬 데이터(movieImage) 구조를 모두 지원하도록 변수 설정
  const title = movie.name || movie.title;

  // API는 movie.image.medium에, 기존 데이터는 movie.movieImage에 주소가 있습니다.
  const posterPath =
    movie.image?.medium ||
    movie.movieImage ||
    'https://via.placeholder.com/210x295?text=No+Image';

  const rating = movie.rating?.average || movie.rating || '-';
  const genres = movie.genres?.join(', ') || 'Genre';

  return (
    <div
      onClick={() => onOpenModal && onOpenModal(movie)}
      className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition duration-300 cursor-pointer border border-gray-700 h-full"
    >
      <img
        src={posterPath}
        alt={title}
        className="w-full aspect-[2/3] object-cover"
      />
      <div className="p-4">
        <h3 className="text-white font-bold truncate text-sm">{title}</h3>
        <p className="text-gray-400 text-xs mt-1 truncate">{genres}</p>
        <div className="flex justify-between items-center mt-3">
          <span className="text-yellow-400 text-xs font-bold">★ {rating}</span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
