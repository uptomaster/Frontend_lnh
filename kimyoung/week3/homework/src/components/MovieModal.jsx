import React, { useEffect } from 'react';

const MovieModal = ({ movie, onClose }) => {
  // 모달 오픈 시 배경 스크롤 방지
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  if (!movie) return null;

  return (
    <div
      className="fixed inset-0 bg-black/80 z-[100] flex justify-center items-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-gray-900 text-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative border border-gray-700"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white text-3xl z-10"
        >
          &times;
        </button>

        <div className="flex flex-col md:flex-row">
          <img
            src={movie.movieImage}
            alt={movie.title}
            className="w-full md:w-1/2 h-[500px] object-cover"
          />
          <div className="p-8 md:w-1/2 flex flex-col justify-center">
            <h2 className="text-4xl font-bold mb-4">{movie.title}</h2>
            <div className="space-y-3 text-gray-300">
              <p>
                <span className="text-gray-500">감독</span> {movie.director}
              </p>
              <p>
                <span className="text-gray-500">출연</span> {movie.actor}
              </p>
              <p>
                <span className="text-gray-500">개봉</span> {movie.releaseDate}
              </p>
              <hr className="border-gray-700 my-4" />
              <p className="leading-relaxed italic text-gray-400">
                &quot;{movie.description}&quot;
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;
