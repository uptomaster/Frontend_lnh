import React, { useEffect, useRef } from 'react';

// movie와 setModalOpen을 props로 받아온다.
const MovieModal = ({ movie, setModalOpen }) => {
  const modalRef = useRef();

  // 배경 스크롤 방지
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  // 모달 외부 클릭 시 닫기 핸들러
  const closeModal = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setModalOpen(false);
    }
  };

  return (
    // 모달 전체 배경 (어둡게 처리 + 블러 효과 추가)
    <div
      className="fixed inset-0 z-50 flex justify-center items-center bg-black/90 p-4 backdrop-blur-sm"
      onClick={closeModal} // 배경 클릭 시 닫기
    >
      {/* max-w-2xl -> max-w-4xl로 확장, flex flex-col md:flex-row로 가로 배치 */}
      <div
        ref={modalRef}
        className="relative w-full max-w-4xl bg-gray-900 rounded-2xl overflow-hidden shadow-2xl animate-fadeIn flex flex-col md:flex-row max-h-[90vh]"
      >
        {/* 닫기 버튼 */}
        <button
          className="absolute right-4 top-4 text-white text-2xl z-10 bg-black/40 hover:bg-black/60 transition-colors rounded-full w-10 h-10 flex items-center justify-center"
          onClick={() => setModalOpen(false)}
        >
          ✕
        </button>

        {/* 왼쪽 포스터 영역: 이미지가 과하게 커지는 것을 방지하여 화질 유지 */}
        <div className="md:w-5/12 bg-black flex items-center justify-center">
          <img
            className="w-full h-full object-contain"
            src={movie?.poster}
            alt={movie?.title}
            style={{ imageRendering: '-webkit-optimize-contrast' }}
          />
        </div>

        {/* 오른쪽 상세 정보 영역: 내용이 길어질 경우 내부 스크롤 가능하게 처리 */}
        <div className="md:w-7/12 p-8 md:p-12 text-white overflow-y-auto">
          <h2 className="text-4xl font-bold mb-3">{movie?.title}</h2>
          
          <p className="text-indigo-400 text-lg font-semibold mb-6">
            {movie?.releaseDate} • {movie?.director}
          </p>

          <div className="space-y-6">
            <div>
              <h4 className="text-gray-400 text-sm font-bold uppercase tracking-wider mb-2">줄거리</h4>
              <p className="text-gray-200 leading-relaxed text-lg">
                {movie?.plot}
              </p>
            </div>

            <div>
              <h4 className="text-gray-400 text-sm font-bold uppercase tracking-wider mb-2">출연진</h4>
              <p className="text-gray-200 text-base">
                {movie?.cast}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;