const MovieModal = ({ movie, onClose }) => {
  if (!movie) return null;

  const removeHtmlTags = (text) => {
    if (!text) return '줄거리 정보가 없습니다.';
    return text.replace(/<[^>]*>/g, '');
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-lg bg-zinc-900 p-6"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="absolute top-3 right-3 rounded bg-black px-3 py-1 text-white"
          onClick={onClose}
        >
          X
        </button>

        <div className="flex gap-6">
          <img
            src={
              movie.image?.original ||
              movie.image?.medium ||
              'https://via.placeholder.com/210x295?text=No+Image'
            }
            alt={`${movie.name} 포스터`}
            className="w-56 rounded object-cover"
          />

          <div className="space-y-3 text-white">
            <h2 className="text-2xl font-bold">{movie.name}</h2>
            <p className="text-sm text-gray-400">
              개봉일: {movie.premiered || '정보 없음'}
            </p>
            <p className="text-sm text-gray-400">
              장르:{' '}
              {movie.genres?.length > 0 ? movie.genres.join(', ') : '정보 없음'}
            </p>
            <p className="text-sm leading-6 text-gray-300">
              {removeHtmlTags(movie.summary)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;