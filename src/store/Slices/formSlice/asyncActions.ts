import {createAsyncThunk} from '@reduxjs/toolkit';
import {FormValues} from './interface';
import axios from 'axios';
import {NetworkInfo} from 'react-native-network-info';
import UserAgent from 'react-native-user-agent';
import dayjs from 'dayjs';
import {differenceDate} from '../../../assets/scripts/differenceDate';
import {sendLeadBase} from '../../../api/sendLeadBase';

export const postForm = createAsyncThunk(
  'form/postForm',
  async (params: FormValues) => {
    const ip = await NetworkInfo.getIPAddress();
    const userAgent = await UserAgent.getWebViewUserAgent();
    const incomeNextDate2 = dayjs(params.incomeNextDate1).add(
      differenceDate(params.incomeNextDate1).day,
      'day',
    );
    const {data} = await axios.post('https://leads.zeroparallel.com/lead/', {
      apiId: 'D89AED7B93AE48B8ACEECC0FD82669FD',
      apiPassword: '43a50967f',
      closeConnection: 1,
      productId: 1,
      userIp: ip,
      userAgent: userAgent,
      ...params,
      price: 0,
      incomeNextDate2: dayjs(incomeNextDate2).format('YYYY-MM-DD'),
      webSiteUrl: 'https://usacashlink.com/',
      workPhone:
        params.incomeType == 'BENEFITS' ? '888888888' : params.workPhone,
      workCompanyName:
        params.incomeType == 'BENEFITS' ? 'benefits' : params.workCompanyName,
    });
    if (data.status == 4 || data.status == 5) {
      sendLeadBase(data);
      throw new Error();
    }
    console.log(data);
    return data;
  },
);
