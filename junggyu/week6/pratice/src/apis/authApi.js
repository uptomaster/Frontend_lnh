import axios from "axios";

const BASE_URL =import.meta.env.VITE_BASE_URL;

export const loginAPI = async( {username , password}) => {
    try {
        const {data} = await axios.post(`${BASE_URL}/api/auth/login`, {
            username,
            password
        });

        const acessToken = data.accessToken;

        if(!acessToken){
            throw new Error("로그인 실패")
        }   
        return acessToken;
    } catch (error) {
        throw new Error("로그인 실패");
    }
}