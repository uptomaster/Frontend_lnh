const MovieCard = ({ show }) => {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg w-full">
      <img
        src={
          show.image?.medium ??
          'https://via.placeholder.com/210x295?text=No+Image'
          //show 안의 image가 있다면, medium 값을 가져와라! null이면 undefined로 반환해라
          // ?? <- 왼쪽 값이 null/undefined면 오른쪽(링크)값을 대신 가져와라!
        }
        alt={show.name}
        className="w-full aspect-[2/3] object-cover p-2 rounded-2xl"
      />
      <div className="p-2">
        <p className="text-white font-semibold truncate">{show.name}</p>
        <p className="text-gray-400 text-xs mt-1 truncate">
          {show.genres?.join(', ')}
          //show.genres가 있니? 그럼 join(', ')로 합쳐서 보여라
        </p>
        <p className="text-gray-400 text-xs mt-1">📅 {show.premiered}</p>
      </div>
    </div>
  );
};

export default MovieCard;
