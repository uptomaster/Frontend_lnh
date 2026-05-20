import { create } from 'zustand'; //zustand 상태 라이브러리
import { persist } from 'zustand/middleware'; //zustand 상태 영속화 미들웨어

const useAuthStore = create(
  persist(
    (set) => ({
      //초기 상태 설정
      accessToken: null,
      //로그인 여부 함수
      isLoggedIn: () => false, //상태 변수
      //토큰 저장함수
      setAccessToken: (token) =>
     set({ accessToken: token, isLoggedIn: !!token }), //isLoggiedIn을 ture로 변경
      //토큰 삭제함수
      clearAccessToken: () => set({ accessToken: null, isLoggedIn: false }),
    }),
    {
      name: 'auth-storage',
    }
  )
);

export default useAuthStore;
