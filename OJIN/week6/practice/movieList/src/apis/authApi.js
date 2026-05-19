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

export const logoutAPI = async (accessToken) => {
  try {
    const { data } = await axios.post(`${BASE_URL}/api/auth/logout`, {});

    return data;
  } catch (error) {
    throw new Error("로그아웃 실패");
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
// 영화카드 데이터를 스웨거에 작성된 형태로 POST 요청
export const saveContentAPI = async (movie, accessToken) => {
  try {
    const { data } = await axios.post(
      `${BASE_URL}/api/contents`,
      {
        id: movie.id,
        name: movie.name,
        image: {
          medium: movie.image?.medium,
        },
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );

    return data;
  } catch (error) {
    throw new Error("컨텐츠 저장 실패");
  }
};
//마이페이지에 서버에 저장된 콘텐츠 보여주기
export const getContentsAPI = async (accessToken) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/api/contents`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return data;
  } catch (error) {
    throw new Error("컨텐츠 조회 실패");
  }
};
