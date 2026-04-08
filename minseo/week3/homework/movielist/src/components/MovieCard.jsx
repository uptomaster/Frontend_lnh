const MovieCard = ({ movie }) => {
  const { movieImage, title, releaseDate, mainCharacter, director, description } = movie;

  return (
    <section className="w-full max-w-sm bg-zinc-900 border border-zinc-800 p-0 rounded-lg overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-300">
      <img
        src={movieImage}
        alt={`${title} 포스터`}
        className="w-full aspect-[2/3] object-cover"
      />
      <div className="p-6">
        <h2 className="text-2xl font-bold text-white mb-1 truncate">{title}</h2>
        <p className="text-red-600 font-bold mb-4 text-sm tracking-widest">LIFE MOVIE ‼️</p>
        
        <div className="space-y-2 text-sm text-zinc-400">
          <p className="leading-relaxed text-zinc-200 line-clamp-3 h-16">
            <span className="text-zinc-500 font-medium">줄거리:</span> {description}
          </p>
          <hr className="border-zinc-800 my-4" />
          <p><span className="text-zinc-500">등장이물:</span> {mainCharacter}</p>
          <p><span className="text-zinc-500">감독:</span> {director}</p>
          <p className="text-xs pt-4 text-zinc-600">📅 {releaseDate} </p>
        </div>
      </div>
    </section>
  );
};

export default MovieCard;