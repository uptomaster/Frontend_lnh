import { create } from 'zustand' // zustand 라이브러리에서 create 함수를 가져옴
import { persist } from 'zustand/middleware' // zustand의 persist 미들웨어를 가져옴

const useAuthStore = create(
    persist(

        (set) => ({

            accessToken: null, // 초기 accessToken 상태는 null

            // accessToken을 설정하는 함수
            setAccessToken: (token) => set({ accessToken: token}), // accessToken을 설정하는 함수

            // 로그인 상태를 확인하는 함수
            isLoggedIn: () => !!set().accessToken,
        }),
        {
            name: 'auth-storage', // 로컬 스토리지에 저장될 키 이름
        }
    )
)

export default useAuthStore // useAuthStore 훅을 내보냄