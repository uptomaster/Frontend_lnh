import axios from 'axios'; //HTTP 클라이언트 라이브러리

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const signupAPI = async ({ email, password }) => {
  try {
    const { data } = await axios.post(`${BASE_URL}/api/auth/signup`, {
      email,
      password,
    });

    return data;
  } catch (error) {
    console.error('에러 원인:', error.response?.data || error.message);
    throw new Error('회원가입 실패');
  }
};

export const loginAPI = async ({ username, password }) => {
  try {
    const { data } = await axios.post(`${BASE_URL}/api/auth/login`, {
      username,
      password,
    });

    const accessToken = data.accessToken;

    if (!accessToken) {
      throw new Error('로그인 실패긔');
    }
    return accessToken;
  } catch (error) {
    console.error('에러 원인:', error.response?.data || error.message);
    throw new Error('로그인 실패햇긔');
  }
};

export const logoutAPI = async (accessToken) => {
  try {
    //첫번째 인자 : 요청 보낼 URL wnth
    //두번쨰 인자 : 서버로 보낼 본문 데이터(유저네임, 비밀번호 등)
    //세번째 인자 : 헤더 정보나 인증 토큰 등을 담는 설정
    const { data } = await axios.post(
      `${BASE_URL}/api/auth/logout`,
      {},
      //Authorization: <타입> <토큰(자격 증명)>
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return data;
  } catch (error) {
    console.error('에러 원인:', error.response?.data || error.message);
    throw new Error('로그아웃 실패햇긔');
  }
};
