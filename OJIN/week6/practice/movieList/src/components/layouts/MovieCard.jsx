const MovieCard = ({ movie }) => {
  return (
    <section className="bg-gray-800 p-6 rounded-lg shadow transition-transform duration-200 hover:scale-105 cursor-pointer">
      <img
        src={
          movie.image?.medium ??
          "https://via.placeholder.com/210x295?text=No+Image"
        }
        alt={`${movie.name} 영화 포스터`}
        className="w-full rounded mb-4"
      />
      <div className="p-2">
        <p className="text-2xl font-semibold">{movie.name}</p>
        <p className="text-gray-400 text-xs mt-1 truncate">
          {movie.genres?.join(", ")}
        </p>
        <p className="text-gray-400 text-sm mt-2">
          📅 개봉일: {movie.premiered}
        </p>
      </div>
    </section>
  );
};

export default MovieCard;
