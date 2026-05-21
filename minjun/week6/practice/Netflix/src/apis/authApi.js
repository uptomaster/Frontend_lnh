import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;
// swagger에서 보내야하는 요소 확인
export const loginApi = async ({ username, password }) => {
  try {
    const { data } = await axios.post(`${BASE_URL}/api/auth/login`, {
      // post로 요청하라함

      username,
      password,
    });
    const accessToken = data.accessToken;

    if (!accessToken) {
      throw new Error("로그인 실패");
    }
    return accessToken;
  } catch (error) {
    throw new Error("로그인 실패");
  } finally {
    console.log(error);
  }
};
