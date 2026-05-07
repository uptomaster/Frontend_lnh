import { create } from "zustand"; // zustand 상태 관리 라이브러리
import { persist } from "zustand/middleware"; // zustand 상태 영속화 미들웨어

const useAuthStore = create(
  persist((set, get)=>({
    // 초기 상태 설정
    accessToken: null, // 엑세스 토큰 null로 초기화

    // 토큰 저장함수
    setAccessToken: (token) => set({accessToken: token}),

    // 로그인 여부 확인 함수
    isLoggedIn: () => !!get().accessToken  }),
  {name: 'auth-storage',})
)

export default useAuthStore;