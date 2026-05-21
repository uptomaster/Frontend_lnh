import { X, Star, Calendar, Tv } from 'lucide-react';

const MovieModal = ({ show, onClose }) => {
  //show가 없으면 렌더링하지 않음
  if (!show) return null;

  //TV MAZE API의 summary기 HTML 태그를 포함하기 때문에, 정규식을 이용해서 태그를 제거함
  const summary = show.summary?.replace(/<[^>]+>/g, '') ?? '설명이 없습니다.';

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-6"
    >
      {/*모달 실제 컨텐츠 영역 */}
      <div
        className="bg-gray-900 rounded-2xl overflow-hidden max-w-2xl w-full shadow-2xl flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/*왼쪽 영역 : 포스터 이미지 */}
        <img
          src={
            //원본 -> 중간크기 -> 플레이스 홀더 순으로 유효한 이미지 할당
            show.image?.original ??
            show.image?.medium ??
            'http://via.placeholder.com/400x600?text=No+Image'
          }
          alt={show.name}
          className="max-h-52 md:max-h=none w-full p-2 rounded-xl md:w-64 object-cover flex-shrink-0"
        />
        {/*오른쪽 영역 : 상세 정보 */}
        <div className="p-6 flex flex-col lg:gap-4 gap-3 overflow-y-auto">
          <div className="flex items-start justify-between gap-4">
            <h2 className="text-white md:text-2xl text-xl font-bold leading-tight">
              {show.name}
            </h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white flex-shrink-0"
            >
              <X className="w-5 h-5 cursor-pointer" />
            </button>
          </div>

          {/*장르 뱃지 리스트 : 배열을 순회하면서 장르별로 렌더링 하도록 함*/}
          <div className="flex flex-wrap gap-2">
            {show.genres?.map((g) => (
              <span
                key={g}
                className="bg-red-600 text-white text-xs px-2 py-1 rounded-full"
              >
                {g}
              </span>
            ))}
          </div>

          {/*메타 정보 : 평점, 방영일, 방송사, 상태 정보*/}
          <div className="flex flex-col gap-2 text-sm text-gray-300">
            {/*평정 정보가 있을 때만 렌더링함*/}
            {show.rating?.average && (
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-400" />
                <span>{show.rating.average} / 10</span>
              </div>
            )}

            {/*방영일 정보가 있을 때만 렌더링함*/}
            {show.premiered && (
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-yellow-400" />
                <span>{show.premiered}</span>
              </div>
            )}
            {/*방송사 정보가 있을 때만 렌더링*/}
            {show.network?.name && (
              <div className="flex items-center gap-2">
                <Tv className="w-4 h-4 text-yellow-400" />
                <span>{show.network.name}</span>
              </div>
            )}
            {/*방영 상태가 'Running'일 때만 초록색 배경으로 강조함*/}
            {show.status && (
              <span
                className={`w-fit text-xs px-2 py-1 rounded-full font-semibold ${show.status === 'Running' ? 'bg-green-700 text-green-100' : 'bg-gray-700 text-gray-300'}`}
              >
                {show.status}
              </span>
            )}
          </div>

          {/*가공된 줄거리 텍스트를 출력함*/}
          <p className="text-gray-400 text-sm leading-relaxed">{summary}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;
