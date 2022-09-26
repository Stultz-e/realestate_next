import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': ' a9fb15595emshf70d0de1807dbfbp15959bjsnca69f43283a6',
    },
  });

  return data;
};
