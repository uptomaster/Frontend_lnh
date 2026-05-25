import { Calendar, Star, Tv, X } from 'lucide-react';

const MovieModal = ({ movie, onClose }) => {
  if (!movie) return null;

  const title = movie.name || movie.title || '제목 없음';

  const posterPath =
    movie.image?.original ||
    movie.image?.medium ||
    movie.movieImage ||
    'https://via.placeholder.com/400x600?text=No+Image';

  const summary = movie.summary
    ? movie.summary.replace(/<[^>]+>/g, '')
    : movie.description || '설명이 없습니다.';

  const rating = movie.rating?.average || movie.rating || 'N/A';

  const premieredYear =
    movie.premiered?.split('-')[0] || movie.releaseDate || '정보 없음';

  return (
    <div
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-[100] p-4 md:p-6 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-gray-900 rounded-2xl overflow-hidden max-w-3xl w-full max-h-[90vh] shadow-2xl flex flex-col md:flex-row border border-gray-800 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 text-white/50 hover:text-white z-[110] bg-black/20 p-1 rounded-full md:bg-transparent"
        >
          <X size={28} />
        </button>

        <div className="w-full md:w-72 h-64 md:h-auto flex-shrink-0">
          <img
            src={posterPath}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-6 md:p-8 flex flex-col gap-4 overflow-y-auto">
          <div>
            <h2 className="text-white text-2xl md:text-3xl font-bold pr-8">
              {title}
            </h2>

            <div className="flex flex-wrap gap-2 mt-3">
              {movie.genres?.map((genre) => (
                <span
                  key={genre}
                  className="bg-red-600 text-white text-[10px] px-2.5 py-1 rounded-md font-bold uppercase"
                >
                  {genre}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 text-sm text-gray-300 border-y border-gray-800 py-4">
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <span>{rating} / 10</span>
            </div>

            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-gray-400" />
              <span>{premieredYear}</span>
            </div>

            {movie.network && (
              <div className="flex items-center gap-2 col-span-2">
                <Tv className="w-4 h-4 text-gray-400" />
                <span>{movie.network.name}</span>
              </div>
            )}
          </div>

          <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-4">
            {summary}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;
