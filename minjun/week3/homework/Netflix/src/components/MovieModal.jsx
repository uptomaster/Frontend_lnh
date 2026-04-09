import { useEffect } from "react";

const MovieModal = ({ movie, onClose }) => {
  // 리액트 훅 사용
  useEffect(() => {
    // 모달 창 띄울 때 스크롤 숨겼음
    document.body.style.overflow = "hidden";

    // 원상복구
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  if (!movie) return null;

  return (
    // 배경 어두워짐 구현+모달 외부 클릭시 닫힘
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80"
      onClick={() => {
        console.log("모달 외부 클릭");
        // 자꾸 안돼서 작동되나 확인해보려고 넣음
        onClose();
      }}
    >
      {/* 모달 창 이미지 정렬*/}
      <div
        className="relative bg-gray-900 p-6 rounded-lg w-11/12 max-w-md shadow-2xl flex flex-col items-center"
        onClick={(e) => {
          console.log("모달 내부 클릭");
          e.stopPropagation();
        }}
        // 모달 내부 클릭했을 때 창꺼짐 방지
      >
        {/* X 버튼 구현 */}
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl font-bold transition-colors"
          onClick={onClose}
        >
          X
        </button>

        {/* 이미지 가져오기 */}
        <img
          src={movie.movieImage}
          alt={`${movie.title} 영화포스터`}
          className="w-full h-auto rounded-md shadow-lg"
        />
      </div>
    </div>
  );
};

export default MovieModal;
