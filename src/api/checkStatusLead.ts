import axios from 'axios';

const apiId = 'D89AED7B93AE48B8ACEECC0FD82669FD';
const apiPassword = '43a50967f';

export const checkStatusLead = async (lead_id: string) => {
  const {data} = await axios.post(
    `https://leads.zeroparallel.com/lead/check-lead-status?apiId=${apiId}&apiPassword=${apiPassword}&checkKey=${lead_id}`,
  );
  // console.log(data);
  return data;
};
