import { create } from 'zustand'; //zustand 상태 라이브러리
import { persist } from 'zustand/middleware'; //zustand 상태 영속화 미들웨어

const useAuthStore = create(
  persist(
    (set) => ({
      //초기 상태 설정
      accessToken: null,
      //토큰 저장함수
      setAccessToken: (token) => set({ accessToken: token }),
      //로그인 여부 함수
      isLoggedIn: () => !!set().accessToken,
    }),
    {
      name: 'auth-storage',
    }
  )
);

export default useAuthStore;
