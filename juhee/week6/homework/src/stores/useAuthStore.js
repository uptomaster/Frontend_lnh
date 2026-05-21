import { create } from "zustand";
import { persist } from "zustand/middleware";

const useAuthStore = create(
    persist(
        (set, get)=>({
            accessToken: null,

            setAccessToken: (token)=> set({accessToken: token}),

            isLoggedIn: ()=> !!get().accessToken,
        }),
        {
            name: 'auth-storage',
        }
    )
)

export default useAuthStore;