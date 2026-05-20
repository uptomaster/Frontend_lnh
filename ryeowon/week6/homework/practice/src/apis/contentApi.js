import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const saveContentApi = async (show, accessToken) => {
  const response = await axios.post(`${BASE_URL}/api/contents`, {
    id: show.id,
    name: show.name,
    image: {
      medium: show.image?.medium,
    },
  },
  {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    }
  }

);

  return response.data;
};

export const getContentApi = async (accessToken) => {
  const response = await axios.get(
    `${BASE_URL}/api/contents`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  return response.data;
};
