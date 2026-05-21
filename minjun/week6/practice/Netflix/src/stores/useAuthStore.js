import { create } from "zustand";
import { persist } from "zustand/middleware";

const useAuthStore = create(
  persist(
    (set) => ({
      accessToken: null,
      setAccessToken: (token) =>
        set({
          accessToken: token,
        }),
      isLoggenIn: () => !!set().accessToken,
    }),
    {
      name: "auth-storage",
    },
  ),
);
export default useAuthStore;
