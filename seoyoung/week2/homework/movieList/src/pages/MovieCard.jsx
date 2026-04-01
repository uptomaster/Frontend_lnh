import movieData from '../data/movie.json';

const MovieCard = () => {
  return (
    <main className="p-10">
      {movieData.map((movie) => (
        <section
          key={movie.title}
          className="w-100 bg-gray-800 p-6 rounded-lg shadow"
        >
          <img
            src={movie.movieImage}
            alt={'${movie.title} 영화 포스터'}
            className="w-full rounded mb-4"
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
      ))}
    </main>
  );
};

export default MovieCard;
