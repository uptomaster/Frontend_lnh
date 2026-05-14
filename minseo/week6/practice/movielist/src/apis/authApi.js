import axios from 'axios'

const BASE_URL = import.meta.env.VITE_BASE_URL

// [수정] 오진 님처럼 일반 인자 두 개를 받는 것으로 통일해서 실수를 방지합시다.
export const loginAPI = async ({username, password}) => { 
    try {
        // 7번 줄을 이렇게 고치세요! (작은따옴표 ' 가 아니라 백틱 ` 입니다)
        const {data} = await axios.post(`${BASE_URL}/api/auth/login`, {
            username,
            password
        });

        // [핵심] response 박스 안의 data에서 accessToken을 꺼냅니다.
        const accessToken = data.accessToken;
        
        if (!accessToken) {
            throw new Error("토큰이 응답에 없습니다.");
        }

        localStorage.setItem("accessToken", accessToken);

        return accessToken;
    } catch (error) {
        // 상세 에러 확인용 (제출 시에는 지워도 돼요)
        console.error("API 에러 상세:", error.response?.data || error.message);
        throw new Error("로그인 실패");
    }
}