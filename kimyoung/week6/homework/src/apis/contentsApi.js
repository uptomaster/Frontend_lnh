import axios from 'axios';

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const getContentsAPI = async () => {
  const { data } = await axios.get(`${BASE_URL}/api/contents`);
  return data;
};

export const saveContentAPI = async ({ id, name, image }) => {
  const { data } = await axios.post(`${BASE_URL}/api/contents`, {
    id,
    name,
    image: {
      medium: image,
    },
  });

  return data;
};
