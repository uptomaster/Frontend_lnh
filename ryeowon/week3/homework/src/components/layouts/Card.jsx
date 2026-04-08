const Card = ({
  movieImage,
  releaseDate,
  actor,
  title,
  director,
  description,
  onClick, 
}) => {
  return (
    <main className="p-7">
      <section
        className="mt-7 relative w-93 bg-black rounded-lg shadow transition-transform duration-300 overflow-hidden cursor-pointer group hover:scale-101"
        onClick={onClick} 
      >
        <div className="aspect-[2/3] w-full">
          <img
            src={movieImage}
            alt={`${title} 영화 포스터`}
            className="w-full h-full rounded mb-4 object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-black/75 opacity-0 group-hover:opacity-100 transition duration-300"></div>

        <div className="absolute top-50 bottom-3 left-10 right-10 opacity-0 group-hover:opacity-100 transition duration-300 text-center space-y-5">
          <p className="text-gray-500 text-sm mb-1">출연</p>
          <p className="text-gray-200 font-medium whitespace-pre-line">
            {actor}
          </p>
          <p className="text-gray-400 text-sm mt-2">
            {releaseDate} 개봉
          </p>
        </div>
      </section>

      <div className="p-3">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <p className="text-gray-200">{director}</p>
      </div>
    </main>
  );
};

export default Card;