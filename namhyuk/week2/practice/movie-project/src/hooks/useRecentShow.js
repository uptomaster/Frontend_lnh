import React from "react";
import { useState } from "react";

const useRecentShows = () => {
  const [recentShows, setRecentShows] = useState([() => {
    // 있으면 recentShows 반환, 없으면 빈 배열 반환
    JSON.parse(localStorage.getItem('recentShows') ?? '[]');
  }]);

  const addShow = (show) => {
    setRecentShows((prev) => {
      const next = [show, ...prev.filter((s) => {
        s.id !== show.id;
      })].slice(0,10); // 10장 정도만 보여줌
      localStorage.setItem('recentShows', JSON.stringify(next)); // JSON 객체를 문자열로 변환
      return next; // 객체 반환
    })
  }
  const removeShow = (id) => {
    setRecentShows((prev) => {
      const next = prev.filter((s) => {
        s.id!== id;
      });
      localStorage.setItem('recentShows', JSON.stringify(next));
      return next;
    })
  }
  // 만든 함수 반환
  return { recentShows, addShow, removeShow};
}

export default useRecentShows;
