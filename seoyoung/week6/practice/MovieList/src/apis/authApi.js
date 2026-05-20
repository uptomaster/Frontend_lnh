import axios from 'axios'; //HTTP 클라이언트 라이브러리

const BASE_URL = import.meta.env.VITE_BASE_URL;

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

//로그아웃도 잇으면 좋겠네~
