import React from 'react';

const MovieCard = ({ movie, onOpenModal, onSave }) => {
  if (!movie) return null;

  const title = movie.name || movie.title;

  const posterPath =
    movie.image?.medium ||
    movie.image?.original ||
    movie.movieImage ||
    'https://via.placeholder.com/210x295?text=No+Image';

  const rating = movie.rating?.average || movie.rating || '-';
  const genres = Array.isArray(movie.genres)
    ? movie.genres.join(', ')
    : 'Genre';

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

        <div className="flex justify-between items-center mt-3 gap-2">
          <span className="text-yellow-400 text-xs font-bold">★ {rating}</span>

          {onSave && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onSave(movie);
              }}
              className="text-xs bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700 transition"
            >
              저장
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
