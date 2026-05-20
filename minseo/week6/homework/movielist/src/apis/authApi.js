import axios from 'axios'

const BASE_URL = import.meta.env.VITE_BASE_URL

export const loginAPI = async ({username, password}) => { 
    try {
        const {data} = await axios.post(`${BASE_URL}/api/auth/login`, { username, password });
        const accessToken = data.accessToken;
        
        if (!accessToken) throw new Error("토큰이 응답에 없습니다.");

        localStorage.setItem("accessToken", accessToken);
        return accessToken;
    } catch (error) {
        console.error("API 에러 상세:", error.response?.data || error.message);
        throw new Error("로그인 실패");
    }
}

// ✨ [추가] 회원가입 API
export const signupAPI = async ({ username, password, email, nickname }) => {
    try {
        const response = await axios.post(`${BASE_URL}/api/auth/signup`, {
            username, password, email, nickname
        });
        return response.data;
    } catch (error) {
        console.error("회원가입 에러:", error.response?.data || error.message);
        throw new Error("회원가입 실패");
    }
}

// ✨ [추가] 로그아웃 API (토큰 필수)
export const logoutAPI = async (token) => {
    try {
        await axios.post(`${BASE_URL}/api/auth/logout`, {}, {
            headers: { Authorization: `Bearer ${token}` }
        });
    } catch (error) {
        console.error("로그아웃 에러:", error.response?.data || error.message);
        throw new Error("로그아웃 실패");
    }
}