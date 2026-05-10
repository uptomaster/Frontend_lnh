import { create } from "zustand"; // zustand 상태관리 라이브러리
import { persist } from "zustand/middleware"; // zustand 상태 영속화 미들웨어
const useAuthStore = create(
  persist(
    (set) => ({
      accessToken: null, // 초기 accessToken 상태 = null

      //토큰 저장 함수
      setAccessToken: (token) => set({ accessToken: token }),

      // 로그인 여부 확인. accessToken이 존재하면 true 반환
      isloggedIn: () => !!set().accessToken,
    }),
    { name: "auth-storage" },
  ),
);

export default useAuthStore;
