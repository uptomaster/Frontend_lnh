import axios from 'axios' // HTTP 클라이언트 라이브러리

const BASE_URL = import.meta.env.VITE_BASE_URL // 환경 변수에서 BASE_URL 가져오기

export const loginAPI = async ( { username, password } ) => {
    try {
        const {data} = await axios.post(`${BASE_URL}/api/auth/login`, {
            username,
            password,
        })
        
        const accessToken = data.accessToken;

        if (!accessToken) {
            throw new Error("로그인 실패")
        }

        return accessToken
    } catch (error) {
        throw new Error("로그인 실패")
    }
}
