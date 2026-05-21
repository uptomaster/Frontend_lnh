import axios from 'axios'

const BASE_URL = import.meta.env.VITE_BASE_URL

// [팩트체크 완료] 로그인은 username과 password를 요구함
export const loginAPI = async ({username, password}) => { 
    try {
        const {data} = await axios.post(`${BASE_URL}/api/auth/login`, {
            username,
            password
        });
        const accessToken = data.accessToken;
        if (!accessToken) throw new Error("토큰이 응답에 없습니다.");
        
        localStorage.setItem("accessToken", accessToken);
        return accessToken;
    } catch (error) {
        console.error("로그인 실패:", error);
        throw new Error("로그인 실패");
    }
}

// [팩트체크 완료] 회원가입은 email과 password만 요구함
export const signupAPI = async ({ email, password }) => {
    try {
        const response = await axios.post(`${BASE_URL}/api/auth/signup`, {
            email,
            password
        });
        return response.data;
    } catch (error) {
        console.error("회원가입 실패:", error);
        throw new Error("회원가입 실패");
    }
}

// 로그아웃
export const logoutAPI = async (token) => {
    try {
        await axios.post(`${BASE_URL}/api/auth/logout`, {}, {
            headers: { Authorization: `Bearer ${token}` }
        });
    } catch (error) {
        console.error("로그아웃 실패:", error);
    }
}