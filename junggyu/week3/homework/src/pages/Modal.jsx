import out from '/src/assets/X.png'

const Modal = ({ movie, onClose }) => {
  if (!movie) return null;

  return (
    <div className=" fixed inset-0 flex items-center justify-center bg-black/80 ">
        <div className="relative w-[420px] bg-gray-800 rounded-lg p-6 ">
            <button onClick={onClose} className=" cursor-pointer absolute top-[7px] right-[7px] hover:scale-130  ">
                <img src={out} className='h-[50px] w-[50px]' />
            </button>
            <img src={movie.movieImage} alt={movie.title} className="w-[300px] rounded mb-4 mx-auto"/>
            <h2 className="text-2xl font-semibold">{movie.title}</h2>
            <hr className="my-4" />
            <p className="text-gray-200">🎭 주연배우: {movie.actor}</p>
            <p className="text-gray-200">🎬 감독: {movie.director}</p>
            <p className="text-gray-200">📝 설명: {movie.description}</p>
            <p className="text-gray-400 text-sm mt-2">📅 개봉일: {movie.releaseDate}</p>
        </div>
    </div>
  );
};

export default Modal;