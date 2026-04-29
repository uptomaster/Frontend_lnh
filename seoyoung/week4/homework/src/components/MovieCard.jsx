const MovieCard = ({ show }) => {
  return (
    <div>
      <img
        src={
          show.image?.medium ??
          'https://via.placeholder.com/210x295?text=No+Image'
        }
        alt={show.name}
      />

      {/*텍스트 정보 영역*/}
      <div>
        <p>{show.name}</p>
        {/*장르 정보 : 배열형태인 genres를 쉼표로 구분된 문자열로 출력*/}
        <p>{show.genres?.join(',')}</p>

        {/*개봉일/방영일 정보*/}
        <p>🎥{show.premiered}</p>
      </div>
    </div>
  );
};

export default MovieCard;
