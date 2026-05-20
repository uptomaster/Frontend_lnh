import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const useAuthStore = create(
    persist(
        (set, get) => ({
            accessToken: null, 
            
            setAccessToken: (token) => set({ accessToken: token }),

            // [수정] 정석 문법인 get()으로 수정
            isLoggedIn: () => !!get().accessToken, 

            // ✨ [추가] 로그아웃 시 스토리지 비우기 함수
            clearAuth: () => {
                set({ accessToken: null });
                localStorage.removeItem("accessToken");
            }
        }),
        {
            name: 'auth-storage',
        }
    )
)

export default useAuthStore