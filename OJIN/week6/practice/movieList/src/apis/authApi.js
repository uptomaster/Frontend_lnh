import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const loginAPI = async (username, password) => {
  //하나의 객체로 username과 password를 전달받기
  try {
    const { data } = await axios.post(`${BASE_URL}/api/auth/login`, {
      username,
      password,
    });
    const accessToken = data.accessToken;

    if (!accessToken) {
      // accessToken이 없는 경우 로그인 실패
      throw new Error("로그인 실패");
    }

    return accessToken; // 로그인 성공 시 accessToken 반환
  } catch (error) {
    throw new Error("로그인 실패");
  }
};
