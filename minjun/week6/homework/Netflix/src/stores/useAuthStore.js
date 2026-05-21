import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useAuthStore = create(
  persist(
    (set) => ({
      // 초기 상태값 선언
      user: null,

      setAccessToken: (token) => {
        if (token) {
          set({ accessToken: token });
        }
      },

      // 통합 인증 함수
      setAuth: (token, user) => {
        if (token) {
          set({ accessToken: token, user });
        }
      },

      // 로그아웃 (Zustand와 로컬스토리지를 초기화)
      logout: () => {
        set({ accessToken: null, user: null });
        useAuthStore.persist.clearStorage(); // 스토리지 청소 완료
      },
    }),
    {
      name: "auth-storage",
    },
  ),
);

export default useAuthStore;
