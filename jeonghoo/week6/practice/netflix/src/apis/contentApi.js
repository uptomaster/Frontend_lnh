import axios from 'axios';

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const saveContentAPI = async ({ accessToken, movie }) => {
  const { data } = await axios.post(
    `${BASE_URL}/api/contents`,
    {
      id: movie.id,
      name: movie.name,
      image: {
        medium:
          movie.image?.medium ||
          'https://via.placeholder.com/210x295?text=No+Image',
      },
    },
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  return data;
};

export const getContentsAPI = async (accessToken) => {
  const { data } = await axios.get(`${BASE_URL}/api/contents`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return data;
};