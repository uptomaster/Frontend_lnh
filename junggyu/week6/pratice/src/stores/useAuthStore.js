import { create } from "zustand";
import { persist } from "zustand/middleware";

const useAuthStore = create(
    persist(
        (set) => ({
            //초기 상태 설정
            accessToken: null,
            
            // 토큰 저장 함수
            setAccessToken: (token) => set({ accessToken: token }),
            
            //로그인 여부 확인 함수
            isLoggedIn: () => !!set.accessToken,
        }),
        {
            name : `auth-storage`,
        }
    )
);

export default useAuthStore;