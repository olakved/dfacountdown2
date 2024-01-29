import axios from 'axios';
type Prop = {
  url: string;
  data?: {
    [index: string]: string | number | undefined | string[];
  };
};

export const postRequest = async ({ url, data }: Prop) => {
  const response = await axios.post(url, data, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response;
};
