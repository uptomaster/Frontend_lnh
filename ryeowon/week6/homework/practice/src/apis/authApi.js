import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const loginAPI = async(username, password) => {
    try {
        const response = await axios.post(`${BASE_URL}/api/auth/login`, {
            username,
            password
        });

        const accessToken = response.data.accessToken;
        
        if(!accessToken){
            throw new Error("로그인 실패")
        }


        return accessToken;
    } catch {
         throw new Error("로그인 실패");
    }
}

export const signupAPI = async(email, password) => {
    try {
        const response = await axios.post(`${BASE_URL}/api/auth/signup`,{
            email,
            password
        });

        return response.data;

    } catch {
        throw new Error("회원가입 실패");
    }
}