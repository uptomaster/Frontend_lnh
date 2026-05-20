//useRecent.jsx
import { useState, useEffect } from 'react';
import { ContentSaveAPI, ContentGETAPI } from '../apis/authApi';
import useAuthStore from '../stores/useAuthStore'; // 토큰 가져오기

const KEY = 'recentShows';

const useRecentShows = () => {
  const [serverShows, setServerShows] = useState([]);
  //최근 본 영화 목록의 상태 받아오기

  const accessToken = useAuthStore((state) => state.accessToken);

  const [recentShows, setRecentShows] = useState(() => {
    return JSON.parse(localStorage.getItem(KEY) ?? '[]');
    //값 없으면 빈 배열 사용
  });

  useEffect(() => {
    //백엔드에서 데이터를 가져오는 비동기(async)함수
    const getRecentMoives = async () => {
      try {
        //토큰 주고 함수 불러오기
        const data = await ContentGETAPI(accessToken);

        setServerShows(data);
      } catch (error) {
        console.log('데이터 불러오기 실패');
      }
    };
    //함수 실행
    getRecentMoives();
  }, [accessToken]);

  //최근 본 영화를 추가하기
  const addShow = async (show) => {
    if (!show) return;

    setRecentShows((prev) => {
      //prev가 배열이 아닐 때 해결
      const currentList = Array.isArray(prev) ? prev : [];

      //새로운 배열 생성 -> 새로 클릭한 show를 맨 앞에 추가하고, 같은 아이디인건 제거함, 최대 10개 저장
      const next = [show, ...currentList.filter((s) => s.id !== show.id)].slice(
        0,
        10
      );

      localStorage.setItem(KEY, JSON.stringify(next));

      return next;
    });

    try {
      //지금 누른 id 가 서버에 있는지 없는지 확인
      //이미 있으면 true, 없으면 false 반환
      const isAlreadySaved = serverShows.some(
        (save) =>
          String(save.tvMazeId) === String(show.id) ||
          String(save.id) === String(show.id)
      );

      if (!isAlreadySaved) {
        await ContentSaveAPI(show);
        console.log('저장완료');
        //서버 배열에도 저장해주기
        setServerShows((prev) => [show, ...prev]);
      }
    } catch (error) {
      console.error(
        '추가 과정에서 발생한 에러 : ',
        error.response?.data || error.message
      );
    }
  };

  //특정 영화를 삭제하기
  const removeShow = (targetTvMazeId) => {
    setRecentShows((prev) => {
      const currentList = Array.isArray(prev) ? prev : [];
      //해당 아이디 제외한 영화만 남기고
      const next = currentList.filter(
        (show) => String(show.id) !== String(targetTvMazeId)
      );
      localStorage.setItem(KEY, JSON.stringify(next));

      return next;
    });

    setServerShows((prev) =>
      prev.filter((show) => String(show.tvMazeId) != String(targetTvMazeId))
    );
  };

  //외부에서 사용할 값을 반환하기
  //최근 본 영화 목록, 추가함수, 삭제함수
  return { recentShows, serverShows, addShow, removeShow };
};

export default useRecentShows;
