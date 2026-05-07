const MovieCard = ({ movie, onClick }) => {
  return (
    <article
      className="cursor-pointer overflow-hidden rounded-lg border border-gray-700 bg-zinc-900"
      onClick={onClick}
    >
      <div className="h-[330px] overflow-hidden">
        <img
          src={
            movie.image?.medium ||
            'https://via.placeholder.com/210x295?text=No+Image'
          }
          alt={`${movie.name} 포스터`}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="space-y-2 p-3">
        <h2 className="truncate text-base font-semibold text-white">
          {movie.name}
        </h2>

        <p className="truncate text-xs text-gray-400">
          장르: {movie.genres?.length > 0 ? movie.genres.join(', ') : '정보 없음'}
        </p>

        <p className="text-xs text-gray-400">
          📅 {movie.premiered || '개봉일 정보 없음'}
        </p>
      </div>
    </article>
  );
};

export default MovieCard;