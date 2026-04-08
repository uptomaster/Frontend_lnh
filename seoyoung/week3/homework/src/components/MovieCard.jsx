import { useReducer } from 'react';
import MovieModal from './MovieModal.jsx';

function reducer(state, action) {
  switch (action.type) {
    case 'ClickMovie':
      return {
        ...state,
        isClick: !state.isClick, //현재 상태의 isClick 반전
      };
    default:
      return state;
  }
}
const MovieCard = ({ movie }) => {
  const [movieState, dispatch] = useReducer(reducer, {
    ...movie,
    isClick: false,
  });

  const onClickMovie = () => {
    dispatch({
      type: 'ClickMovie',
    });
  };
  return (
    <div>
      {movieState.isClick && (
        <MovieModal movie={movie} onClose={onClickMovie} />
      )}
      {/*movieState.isClick이 true여야지 작동하게함, 다시 클릭하면 닫힘*/}
      {/*이 MovieCard 는 하나의 영화만 갖고 있으므로, 각각의 영화에 따로 실행됨, map함수를 사용할 필요가 없음*/}
      <section
        className="w-96 h-full bg-gray-800 p-6 rounded-lg shadow m-4"
        onClick={onClickMovie}
      >
        <img
          src={movie.movieImage}
          alt={`${movie.title} 영화 포스터`}
          className="aspect-[2/3] object-cover rounded mb-4" //이미지를 찌그러뜨리지 않음
        />
        <h2 className="m-2 text-2xl font-semibold hover:text-purple-300">
          {movie.title}
        </h2>
        <hr className="my-4" />
        <p className="text-gray-200">
          <span className="font-bold">👩‍🎤 주연배우 : </span>
          {movie.actor}
        </p>
        <p className="text-gray-200">
          <span className="font-bold">🤵‍♂️ 감독 : </span>
          {movie.director}
        </p>
        <p className="text-gray-200">
          <span className="font-bold">✍️ 설명 : </span>
          {movie.description}
        </p>
        <p className="text-gray-200 text-sm mt-2">
          <span className="font-bold">📅 개봉일 : </span>
          {movie.releaseDate}
        </p>
      </section>
    </div>
  );
};

export default MovieCard;
