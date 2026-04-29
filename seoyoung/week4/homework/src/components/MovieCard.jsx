const MovieCard = ({ show }) => {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden showdow-lg w-full">
      <img
        src={
          show.image?.medium ??
          'https://via.placeholder.com/210x295?text=No+Image'
        }
        alt={show.name}
        className="w-full aspect[2/3] object-cover p-2 rounded-2xl"
      />

      {/*텍스트 정보 영역*/}
      <div className="p-2">
        <p className="text-white font-semibold truncate">{show.name}</p>

        {/*장르 정보 : 배열형태인 genres를 쉼표로 구분된 문자열로 출력*/}
        <p className="text-gray-400 text-xs mt-1 truncate">
          {show.genres?.join(',')}
        </p>

        {/*개봉일/방영일 정보*/}
        <p className="text-gray-400 text-xs mt-1">🎥{show.premiered}</p>
      </div>
    </div>
  );
};

export default MovieCard;
