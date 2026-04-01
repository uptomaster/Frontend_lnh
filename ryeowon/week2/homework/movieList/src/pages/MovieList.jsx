import movieData from '../data/movie.json';

function Card({movieImage, releaseDate, actor, title, director, description}) {
  return (
      <main className="p-7">
      <section className="mt-7 relative w-93 bg-black rounded-lg shadow transition-transform duration-300 overflow-hidden cursor-pointer">
        <div className="aspect-[2/3] w-full">
          <img
            src={movieImage}
            alt={`${title} 영화 포스터`}
            className="w-full h-full rounded mb-4 object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/75 opacity-0 hover:opacity-100 transition duration-300">  {/* hover시 나타날 요소들 */}
          <p className="text-gray-200"> 주연배우: {actor}</p>
          <p className="text-gray-200"> 줄거리: {description}</p>
          <p className="text-gray-400 text-sm mt-2"> 개봉일: {releaseDate}</p>
        </div>
      </section>
      <div className = "p-3">
          <h2 className="text-2xl font-semibold">{title}</h2>
          <p className="text-gray-200"> 감독: {director}</p>
        </div>
    </main>
  );
};

const MovieList = () => {
  return (
    <div className="flex flex-row items-start">
    {movieData.map((movie) => (
        <Card
          key={movie.id}
          movieImage={movie.movieImage}
          releaseDate={movie.releaseDate}
          actor={movie.actor}
          title={movie.title}
          director={movie.director}
          description={movie.description}
        />
      ))}
    </div>
  );
};
   

export default MovieList;