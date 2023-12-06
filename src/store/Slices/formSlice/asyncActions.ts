import {createAsyncThunk} from '@reduxjs/toolkit';
import {FormValues} from './interface';
import axios from 'axios';
import {NetworkInfo} from 'react-native-network-info';
import UserAgent from 'react-native-user-agent';

export const postForm = createAsyncThunk(
  'form/postForm',
  async (params: FormValues) => {
    const ip = await NetworkInfo.getIPAddress();
    const userAgent = await UserAgent.getWebViewUserAgent();
    console.log(userAgent);
    const {data} = await axios.post('https://leads.zeroparallel.com/lead/', {
      apiId: 'D89AED7B93AE48B8ACEECC0FD82669FD',
      apiPassword: '43a50967f',
      testMode: 1,
      productId: 1,
      userIp: ip,
      userAgent: userAgent,
      ...params,
      price: 0,
      incomeNextDate2: '',
      webSiteUrl: 'https://usacashlink.com/',
      workPhone:
        params.incomeType == 'BENEFITS' ? '888888888' : params.workPhone,
      workCompanyName:
        params.incomeType == 'BENEFITS' ? 'benefits' : params.workCompanyName,
    });
    console.log(data);
    return data;
  },
);
