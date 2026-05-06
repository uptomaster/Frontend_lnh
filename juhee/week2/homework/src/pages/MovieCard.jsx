const MovieCard = ({movie, onClick})=>{
    const { movieImage, releaseDate, actor, title, director, description } =
    movie;

    return (
        
        <section className="p-10" onClick={onClick}>
          <section className="w-65 bg-white p-4 rounded-lg shadow hover:scale-106">
            <img
              src={movieImage}
              alt={`${title} 영화 포스터`}
              className="w-full rounded mb-4"
            />
            <h2 className="text-2xl font-semibold">{title}</h2>
            <hr className="my-4" />
            <p className="text-black">🎭 주연배우: {actor}</p>
            <p className="text-black">🎬 감독: {director}</p>
            <p className="text-black">📝 설명: {description}</p>
            <p className="text-black text-sm mt-2">📅 개봉일: {releaseDate}</p>
          </section>
        </section>
      );
};
export default MovieCard;