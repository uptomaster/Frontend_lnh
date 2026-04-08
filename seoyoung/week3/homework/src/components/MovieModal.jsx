import './MovieModal.css';

const MovieModal = ({ movie, onClose }) => {
  return (
    <div
      className="bg-black/80 p-4 z-50 flex items-center justify-center fixed inset-0"
      onClick={onClose}
    >
      {/*fixed를 사용해서 그 위에 중첩되게 떠있는 화면효과 주기*/}
      {/*inset-0 상화좌우 모든 방향의 여백을 0으로 만들기*/}
      <div
        className="relative bg-black p-8  max-w-md rounded-2xl"
        onClick={
          (e) => e.stopPropagation() //이 아래 자식 박스들은 onClick 신호가 가지 않음
        }
      >
        <img
          src={movie.movieImage}
          alt={`${movie.title} 영화 포스터`}
          className="w-full h-auto max-h-[65vh] rounded mb-4 aspect-[2/3] object-cover"
        />
        {/*화면 높이의 65%로 화면 높이 제한*/}
        <button
          onClick={onClose}
          className="absolute text-white text-2xl top-1 right-2"
        >
          X
        </button>
        <h2 className="m-2 text-2xl font-semibold hover:text-purple-300">
          {movie.title}
        </h2>
        <hr className="my-4" />
        <p className="text-gray-200">
          <span className="font-bold">👩‍🎤 주연배우 : </span>
          {movie.actor}
        </p>
      </div>
    </div>
  );
};

export default MovieModal;
