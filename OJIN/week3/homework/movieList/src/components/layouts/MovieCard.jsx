const MovieCard = ({ movie, onClick }) => {
  return (
    <section
      onClick={() => {
        onClick(movie);
      }}
      className="bg-gray-800 p-6 rounded-lg shadow transition-transform duration-200 hover:scale-105 cursor-pointer"
    >
      <img
        src={movie.movieImage}
        alt={`${movie.title} 영화 포스터`}
        className="w-full rounded mb-4"
      />
      <h2 className="text-2xl font-semibold">{movie.title}</h2>
      <hr className="my-4" />
      <p className="text-gray-200">🎭 주연배우: {movie.actor}</p>
      <p className="text-gray-200">🎬 감독: {movie.director}</p>
      <p className="text-gray-200 line-clamp-2">📝 설명: {movie.description}</p>
      <p className="text-gray-400 text-sm mt-2">
        📅 개봉일: {movie.releaseDate}
      </p>
    </section>
  );
};

export default MovieCard;
