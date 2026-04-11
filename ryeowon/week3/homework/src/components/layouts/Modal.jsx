const Modal = ({ movie, onClose }) => {
  if (!movie) return null;

  return (
    <div
      className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="relative bg-[#000018] text-white rounded-xl w-[500px] p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-3 right-3 text-xl font-bold cursor-pointer"
          onClick={onClose}
        >
          X
        </button>

        <img
          src={movie.movieImage}
          alt={movie.title}
          className="w-full h-[300px] object-cover rounded-lg mb-4"
        />

        <h2 className="text-2xl font-bold mb-2">{movie.title}</h2>
        <p className="mb-1">개봉일: {movie.releaseDate}</p>
        <p className="mb-1">감독: {movie.director}</p>
        <p className="mb-1">배우: {movie.actor}</p>
        <p className="mt-4 text-gray-300">{movie.description}</p>
      </div>
    </div>
  );
};

export default Modal;