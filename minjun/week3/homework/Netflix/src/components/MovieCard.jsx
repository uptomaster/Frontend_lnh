const MovieCard = ({ movie, onClick }) => {
  const { movieImage, releaseDate, actor, title, director, description } =
    movie;

  return (
    <section className="w-full bg-gray-800 p-6 rounded-lg" onClick={onClick}>
      {/* 포스터 크기가 제각각이지 않도록 크기와 비율을 통일해줬음 */}
      <div className="aspect-[3/4] w-full overflow-hidden hover:scale-110">
        {/* 추가로 hover 시 이미지가 커지는 효과를 줬음 */}
        <img
          src={movieImage}
          alt={`${title} 영화포스터`}
          className="w-full h-full rounded mb-4"
        />
      </div>
      <h2 className="text-2xl font-semibold text-white">{title}</h2>
      <hr className="my-4" />
      <p className="text-gray-200">🎭 주연배우: {actor}</p>
      <p className="text-gray-200">🎬 감독: {director}</p>
      {/* 텍스트를 평소에는 1줄만 보여주다가 hover하면 전체 다 보이게 만들었음 */}
      {/* 원래는 딱 hover한 카드만 움직이게 하고 싶었다 */}
      <p className="text-gray-200 line-clamp-1 hover:line-clamp-none">
        📝 설명: {description}
      </p>
      <p className="text-gray-400 text-sm mt-2">📅 개봉일: {releaseDate}</p>
    </section>
  );
};

export default MovieCard;
