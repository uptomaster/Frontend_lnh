import { useEffect } from 'react';

const MovieModal = ({ movie, onClose }) => {
  if (!movie) return null;
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);
  //useEffect로 라이프사이클 실행함
  //렌더링시 마운트가 되어서, overflow 즉 스크롤이 숨겨지고,
  //언마운트(끝날 때)  unset으로 다시 되돌려 놓을 수 있음 !!
  //document.body.style.overflow => 웹페이지 전체의.몸통부분의.디자인설정에서.스크롤바를 -> 숨겨라

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
          src={
            movie.image?.medium ??
            'https://via.placeholder.com/210x295?text=No+Image'
          }
          alt={`${movie.name} 영화 포스터`}
          className="w-full h-auto max-h-[65vh] rounded mb-4 aspect-[2/3] object-cover"
        />
        {/*화면 높이의 65%로 화면 높이 제한*/}
        <button
          onClick={onClose}
          className="absolute text-white text-2xl top-1 right-2 cursor-pointer"
        >
          X
        </button>
        <h2 className="m-2 text-2xl font-semibold hover:text-purple-300">
          {movie.name}
        </h2>
        <hr className="my-4" />
        <p className="text-gray-200 text-center font-bold italic">
          {movie.intro}
        </p>
        <button className="bg-white text-black m-4 p-4 mt-8 cursor-pointer rounded-lg">
          ▶ 시청하기
        </button>
        <button className="text-white m-4 p-4 mt-8 cursor-pointer rounded-lg">
          ♥ 찜하기
        </button>
        <button className="text-white m-4 p-4 mt-8 cursor-pointer rounded-lg">
          공유
        </button>
      </div>
    </div>
  );
};

export default MovieModal;
