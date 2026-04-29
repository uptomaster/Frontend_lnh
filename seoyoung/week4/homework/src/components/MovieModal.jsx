import { X, Star, Calendar, Tv } from 'lucide-react';

const MovieModal = ({ show, onClose }) => {
  //show가 없으면 렌더링하지 않음
  if (!show) return null;

  //TV MAZE API의 summary기 HTML 태그를 포함하기 때문에, 정규식을 이용해서 태그를 제거함
  const summary = show.summary?.replace(/<[^>]+>/g, '') ?? '설명이 없습니다.';

  return (
    <div onClick={onClose}>
      {/*모달 실제 컨텐츠 영역 */}
      <div onClick={(e) => e.stopPropagation()}>
        {/*왼쪽 영역 : 포스터 이미지 */}
        <img
          src={
            //원본 -> 중간크기 -> 플레이스 홀더 순으로 유효한 이미지 할당
            show.Image?.original ??
            show.image?.medium ??
            'http://via.placeholder.com/400x600?=No+Image'
          }
          alt={show.name}
        />
        {/*오른쪽 영역 : 상세 정보 */}
        <div>
          <h2>{show.name}</h2>
          <button onClick={onClose}>
            <X />
          </button>
        </div>
        {/*장르 뱃지 리스트 : 배열을 순회하면서 장르별로 렌더링 하도록 함*/}
        <div>
          {show.geres?.map((g) => (
            <span key={g}>{g}</span>
          ))}
        </div>
        {/*메타 정보 : 평점, 방영일, 방송사, 상태 정보*/}
        <div>
          {/*평정 정보가 있을 때만 렌더링함*/}
          {show.rating?.average && (
            <div>
              <Star />
              <span>{show.rating.average} / 10</span>
            </div>
          )}
          {/*방영일 정보가 있을 때만 렌더링함*/}
          {show.premiered && (
            <div>
              <Calendar />
              <span>{show.premiered}</span>
            </div>
          )}
          {/*방송사 정보가 있을 때만 렌더링*/}
          {show.network?.name && (
            <div>
              <Tv />
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
        <p>{summary}</p>
      </div>
    </div>
  );
};

export default MovieModal;
