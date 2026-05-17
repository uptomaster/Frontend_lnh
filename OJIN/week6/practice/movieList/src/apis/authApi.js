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
    const refreshToken = data.refreshToken;

    if (!accessToken || !refreshToken) {
      // accessToken, refreshToken이 없는 경우 로그인 실패
      throw new Error("로그인 실패");
    }

    return { accessToken, refreshToken }; // 로그인 성공 시 accessToken, refreshToken 반환
  } catch (error) {
    throw new Error("로그인 실패");
  }
};

export const reissueAPI = async (refreshToken) => {
  try {
    const { data } = await axios.post(
      `${BASE_URL}/api/auth/reissue`,
      JSON.stringify(refreshToken),
    );

    return {
      accessToken: data.accessToken,
      refreshToken: data.refreshToken,
    };
  } catch (error) {
    throw new Error("토큰 재발급 실패");
  }
};

export const signupAPI = async (email, password) => {
  try {
    const { data } = await axios.post(`${BASE_URL}/api/auth/signup`, {
      email,
      password,
    });

    return data;
  } catch (error) {
    throw new Error("회원가입 실패");
  }
};
