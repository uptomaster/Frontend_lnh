import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL

export const loginAPI = async({username, password}) =>{
    try{
        const {data} = await axios.post(`${BASE_URL}/api/auth/login`, {
            username,
            password
        })
        const accessToken = data.accessToken;

        if(!accessToken){
            throw new Error("로그인 실패");
        }
        return accessToken;
    } catch (error) {
        throw new Error("로그인 실패");
    }
}