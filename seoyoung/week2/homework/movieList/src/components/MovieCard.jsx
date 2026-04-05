const MovieCard = ({ movie }) => {
  return (
    <div>
      <section className="w-96 h-full bg-gray-800 p-6 rounded-lg shadow m-4 ">
        <img
          src={movie.movieImage}
          alt={`${movie.title} 영화 포스터`}
          className="aspect-[2/3] object-cover rounded mb-4" //이미지를 찌그러뜨리지 않음
        />
        <h2 className="m-2 text-2xl font-semibold hover:text-purple-300">
          {movie.title}
        </h2>
        <hr className="my-4" />
        <p className="text-gray-200">
          <span className="font-bold">👩‍🎤 주연배우 : </span>
          {movie.actor}
        </p>
        <p className="text-gray-200">
          <span className="font-bold">🤵‍♂️ 감독 : </span>
          {movie.director}
        </p>
        <p className="text-gray-200">
          <span className="font-bold">✍️ 설명 : </span>
          {movie.description}
        </p>
        <p className="text-gray-200 text-sm mt-2">
          <span className="font-bold">📅 개봉일 : </span>
          {movie.releaseDate}
        </p>
      </section>
    </div>
  );
};

export default MovieCard;
