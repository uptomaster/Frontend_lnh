const MovieCard = ({ show }) => {
  return (
    <div className="bg-zinc-900 rounded-lg overflow-hidden shadow-lg w-full border border-zinc-800">
      <img
        src={
          show.image?.medium ??
          'https://via.placeholder.com/210x295?text=No+Image'
        }
        alt={show.name}
        className="w-full aspect-[2/3] object-cover"
      />
      {/* 반응형 포인트: md(760px) 기준으로 패딩과 텍스트 크기 변경 */}
      <div className="p-2 md:p-3">
        <p className="text-white font-semibold truncate text-sm md:text-base">
          {show.name}
        </p>
        <p className="text-zinc-500 text-[10px] md:text-xs mt-1 truncate">
          {show.genres?.join(', ') || 'No Genres'}
        </p>
        <p className="text-zinc-600 text-[9px] md:text-[10px] mt-1">
          📅 {show.premiered || 'N/A'}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;