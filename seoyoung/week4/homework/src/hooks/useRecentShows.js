import { useState } from 'react';

const KEY = 'recentShows';

const useRecentShows = () => {
  //최근 본 영화 목록의 상태 바앙오기
  const [recentShows, setRecentShows] = useState(() => {
    JSON.parse(localStorage.getItem(KEY) ?? '[]');
    //값 없으면 빈 배열 사용
  });

  //최근 본 영화를 추가하기
  const addShow = (show) => {
    setRecentShows((prev) => {
      //새로운 배열 생성 -> 새로 클릭한 show를 맨 앞에 추가하고, 같은 아이디인건 제거함, 최대 10개 저장
      const next = [show, ...prev.filter((s) => s.id !== show.id)].slice(0, 10);

      localStorage.setItem(KEY, JSON.stringify(next));

      return next;
    });
  };

  //특정 영화를 삭제하기
  const removeShow = (id) => {
    setRecentShows((prev) => {
      //해당 아이디 제외한 영화만 남기고
      const next = prev.filter((s) => s.id !== id);

      //DB 업데이트
      localStorage.setItem(KEY, JSON.stringify(next));

      return next;
    });
  };

  //외부에서 사용할 값을 반환하기
  //최근 본 영화 목록, 추가함수, 삭제함수
  return { recentShows, addShow, removeShow };
};

export default useRecentShows;
