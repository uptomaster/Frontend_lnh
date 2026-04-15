import { X, Star, Calendar, Tv } from 'lucide-react';

const MovieModal = ({ movie, onClose }) => {
  if (!movie) return null;

  // HTML 태그 제거 로직
  const summary = movie.summary?.replace(/<[^>]+>/g, '') ?? '설명이 없습니다.';

  return (
    <div
      className="fixed inset-0 bg-black/75 flex items-center justify-center z-[100] p-6"
      onClick={onClose}
    >
      <div
        className="bg-gray-900 rounded-2xl overflow-hidden max-w-2xl w-full shadow-2xl flex flex-col md:flex-row border border-gray-800"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={
            movie.image?.original ??
            movie.image?.medium ??
            'https://via.placeholder.com/400x600'
          }
          alt={movie.name}
          className="w-full md:w-64 object-cover flex-shrink-0"
        />

        <div className="p-6 flex flex-col gap-4 overflow-y-auto">
          <div className="flex items-start justify-between gap-4">
            <h2 className="text-white text-2xl font-bold">{movie.name}</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white"
            >
              <X size={24} />
            </button>
          </div>

          <div className="flex flex-wrap gap-2">
            {movie.genres?.map((g) => (
              <span
                key={g}
                className="bg-red-600 text-white text-[10px] px-2 py-1 rounded-full"
              >
                {g}
              </span>
            ))}
          </div>

          <div className="flex flex-col gap-2 text-sm text-gray-300">
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-yellow-400" />
              <span>{movie.rating?.average || 'N/A'} / 10</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-gray-400" />
              <span>{movie.premiered || '정보 없음'}</span>
            </div>
            {movie.network && (
              <div className="flex items-center gap-2">
                <Tv className="w-4 h-4 text-gray-400" />
                <span>{movie.network.name}</span>
              </div>
            )}
          </div>

          <p className="text-gray-400 text-sm leading-relaxed">{summary}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;
