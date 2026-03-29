import movieData from '../data/movie.json';

const MovieList = () => {
  const { movieImage, releaseDate, actor, title, director, description } =
    movieData;

  return (
    <main className="p-10">
      <section className="w-100 bg-gray-800 p-6 rounded-lg shadow">
        <img
          src={movieImage}
          alt={'${title} 영화 포스터'}
          className="w-full rounded mb-4"
        />
        <h2 className="m-2 text-2xl font-semibold hover:text-blue-300">
          {title}
        </h2>
        <hr className="my-4" />
        <p className="text-gray-200">
          <span className="font-bold">👩‍🎤 주연배우 : </span>
          {actor}
        </p>
        <p className="text-gray-200">
          <span className="font-bold">🤵‍♂️ 감독 : </span>
          {director}
        </p>
        <p className="text-gray-200">
          <span className="font-bold">✍️ 설명 : </span>
          {description}
        </p>
        <p className="text-gray-200 text-sm mt-2">
          <span className="font-bold">📅 개봉일 : </span>
          {releaseDate}
        </p>
      </section>
    </main>
  );
};

export default MovieList;
