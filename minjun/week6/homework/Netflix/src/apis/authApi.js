import axios from "axios";

// .env 파일을 못 읽어오더라도 절대 undefined가 되지 않게 안전장치를 둡니다.
const BASE_URL = import.meta.env.VITE_BASE_URL || "http://13.209.77.164:8080";

export const loginApi = async ({ username, password }) => {
  try {
    const { data } = await axios.post(`${BASE_URL}/api/auth/login`, {
      username,
      password,
    });

    const accessToken = data.accessToken;

    if (!accessToken) {
      throw new Error("로그인 실패");
    }
    return accessToken;
  } catch (error) {
    // 괄호 안에 (error)라고 받아왔기 때문에 이 중괄호 안에서만 error 변수를 쓸 수 있습니다.
    console.error("로그인 API 요청 중 에러 발생:", error);
    throw new Error("로그인 실패");
  }
  // ❌ 에러를 유발하던 finally { console.log(error); } 블록을 완전히 제거했습니다!
};
