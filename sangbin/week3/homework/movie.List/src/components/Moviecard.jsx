const MovieCard = ({ movieImage, title, releaseDate, actor, director, description, onClick }) => {
  return (
    <section
      className="bg-gray-800 p-6 rounded-lg shadow hover:scale-105 transition-transform duration-200 cursor-pointer"
      onClick={onClick}
    >
      <img
        src={movieImage}
        alt={`${title} 영화 포스터`}
        className="w-full h-64 object-cover rounded mb-4"
      />
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      <hr className="my-3 border-gray-600" />
      <p className="text-gray-200"> 주연배우: {actor}</p>
      <p className="text-gray-200"> 감독: {director}</p>
      <p className="text-gray-200 mt-2"> {description}</p>
      <p className="text-gray-400 text-sm mt-2"> 개봉일: {releaseDate}</p>
    </section>
  );
};

export default MovieCard;