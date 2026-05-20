import useAuthStore from '../stores/useAuthStore';
import axios from 'axios'; //HTTP 클라이언트 라이브러리
import { useActionData } from 'react-router-dom';

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const loginAPI = async ({ username, password }) => {
  try {
    const { data } = await axios.post(`${BASE_URL}/api/auth/login`, {
      username,
      password,
    });

    const accessToken = data.accessToken;

    if (!accessToken) {
      throw new Error('로그인 실패긔');
    }
    return accessToken;
  } catch (error) {
    console.error('에러 원인:', error.response?.data || error.message);
    throw new Error('로그인 실패햇긔');
  }
};

export const logoutAPI = async (accessToken) => {
  try {
    //첫번째 인자 : 요청 보낼 URL wnth
    //두번쨰 인자 : 서버로 보낼 본문 데이터(유저네임, 비밀번호 등)
    //세번째 인자 : 헤더 정보나 인증 토큰 등을 담는 설정
    const { data } = await axios.post(
      `${BASE_URL}/api/auth/logout`,
      {},
      //Authorization: <타입> <토큰(자격 증명)>
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return data;
  } catch (error) {
    console.error('에러 원인:', error.response?.data || error.message);
    throw new Error('로그아웃 실패햇긔');
  }
};

export const signupAPI = async ({ email, password }) => {
  try {
    const { data } = await axios.post(`${BASE_URL}/api/auth/signup`, {
      email,
      password,
    });

    return data;
  } catch (error) {
    console.error('에러 원인:', error.response?.data || error.message);
    throw new Error('회원가입 실패');
  }
};

export const ContentSaveAPI = async (show) => {
  const token = useAuthStore.getState().accessToken;
  console.log('현재 토큰 확인', token);

  try {
    const request = {
      id: show.id,
      name: show.name,
      image: {
        medium: show.image?.medium ?? show.image?.original ?? '',
      },
    };

    const { data } = await axios.post(`${BASE_URL}/api/contents`, request, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });

    return data;
  } catch (error) {
    console.error('에러 원인:', error.response?.data || error.message);
    throw new Error('영화 목록 저장 실패');
  }
};

export const ContentGETAPI = async (accessToken) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/api/contents`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`, // 백엔드 검문소 통과용 토큰 탑재
      },
    });

    return data;
  } catch (error) {
    console.error('에러 원인:', error.response?.data || error.message);
    throw new Error('영화 목록 저장 실패');
  }
};
