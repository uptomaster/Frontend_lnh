import React from 'react';

// props로 movie 객체와 함께 onClick 함수를 받아온다.
// show라는 이름으로도 데이터를 받을 수 있게 show = movie 설정을 추가
const MovieCard = ({ movie, show, onClick }) => {
  // 만약 props로 show가 들어오면 그것을 사용하고 아니면 movie를 사용
  const data = show || movie;

  return (
    // 가장 바깥쪽 div에 group 클래스 추가 => 마우스 올릴때 정보 보이게 하기 위함
    // 호버 시 살짝 커지는 효과(hover:scale-105)
    <div className="group relative rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 hover:z-10 bg-gray-900 text-white aspect-[2/3] cursor-pointer" onClick={() => onClick && onClick(data)}>
      
      {/* 포스터 이미지 (기본으로 보이는 부분) */}
      {/* 데이터가 없을 경우 placeholder 이미지 출력 */}
      <img 
        src={
          data.image?.medium || data.poster || 'https://via.placeholder.com/210x295?text=No+Image'
        } 
        alt={data.name || data.title} 
        className="w-full h-full object-cover"
      />

      {/* 기본 상태 => 투명하고 아래로 살짝 내려가 있음 */}
      {/* 부모가 호버 => 정보가 나타나고 올라옴 */}
      <div className="absolute inset-0 bg-black/80 p-5 flex flex-col justify-end opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
        <h3 className="text-xl font-bold mb-2 truncate">{data.name || data.title}</h3>
        
        {/* 배열일 경우 join으로 합쳐서 출력 */}
        <p className="text-sm text-gray-400 mb-2">
          {data.genres ? data.genres.join(', ') : data.director}
        </p>

        {/* 줄거리 요약 (HTML 태그 제거 로직 추가 가능) */}
        <p className="text-sm text-gray-300 line-clamp-3 mb-3">
          {data.summary ? data.summary.replace(/<[^>]*>?/gm, '') : data.plot}
        </p>

        {/* 날짜 및 추가 정보 */}
        <p className="text-sm text-gray-400">📅 {data.premiered || data.releaseDate}</p>
        
        {/* 기존에 있던 출연진 정보 유지 */}
        {data.cast && (
          <p className="text-xs text-indigo-400 font-semibold truncate mt-1">출연: {data.cast}</p>
        )}
      </div>
    </div>
  );
};

export default MovieCard;