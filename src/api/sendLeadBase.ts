import axios from 'axios';

export const sendLeadBase = async (res: any) => {
  console.log(JSON.stringify(res));
  try {
    const {data} = await axios.post(
      'https://usacashlink.com/api/test_send_api_end',
      {response: res},
    );

    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
};
