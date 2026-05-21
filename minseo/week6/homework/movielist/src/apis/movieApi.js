import axios from 'axios'

const BASE_URL = import.meta.env.VITE_BASE_URL

export const saveMovieAPI = async (movieData, token) => {
    try {
        const response = await axios.post(`${BASE_URL}/api/contents`, movieData, {
            headers: { Authorization: `Bearer ${token}` }
        });
        return response.data;
    } catch (error) {
        console.error("영화 저장 실패:", error.response?.data || error.message);
        throw error;
    }
}

export const getSavedMoviesAPI = async (token) => {
    try {
        const response = await axios.get(`${BASE_URL}/api/contents`, {
            headers: { Authorization: `Bearer ${token}` }
        });
        return response.data;
    } catch (error) {
        console.error("영화 조회 실패:", error.response?.data || error.message);
        throw error;
    }
}