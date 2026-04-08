const MovieModal = ({ movie }) => {
  return (
    <div>
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
      ;
    </div>
  );
};

export default MovieModal;
