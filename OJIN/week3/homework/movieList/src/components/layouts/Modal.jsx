import { useEffect } from "react";

const MovieModal = ({ movie, onClose }) => {
  // 모달이 열릴 동안 배경 스크롤 방지
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  if (!movie) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl rounded-2xl bg-gray-900 p-6 text-white shadow-2xl"
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-md bg-gray-700 px-3 py-1 text-lg font-bold hover:bg-gray-600"
        >
          X
        </button>

        <div className="mt-6 flex flex-col gap-4">
          <h2 className="text-3xl font-bold">{movie.title}</h2>

          <p className="text-gray-200">🎭 주연배우: {movie.actor}</p>
          <p className="text-gray-200">🎬 감독: {movie.director}</p>
          <p className="text-gray-200 leading-7">
            📝 설명: {movie.description}
          </p>
          <p className="text-gray-400">📅 개봉일: {movie.releaseDate}</p>

          <div className="mt-4">
            <h3 className="mb-3 text-xl font-semibold">예고편</h3>
            <div className="aspect-video w-full overflow-hidden rounded-xl">
              <iframe
                className="h-full w-full"
                src={movie.trailerLink}
                title={`${movie.title} 예고편`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;
