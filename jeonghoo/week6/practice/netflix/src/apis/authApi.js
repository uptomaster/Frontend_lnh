import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const loginAPI = async ({ username, password }) => {
  const { data } = await axios.post(
    `${BASE_URL}/api/auth/login`,
    {
      username,
      password,
    }
  );

  return data.accessToken;
};

export const signupAPI = async ({ email, password }) => {
  const { data } = await axios.post(
    `${BASE_URL}/api/auth/signup`,
    {
      email,
      password,
    }
  );

  return data;
};

export const logoutAPI = async (accessToken) => {
  const { data } = await axios.post(
    `${BASE_URL}/api/auth/logout`,
    {},
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  return data;
};