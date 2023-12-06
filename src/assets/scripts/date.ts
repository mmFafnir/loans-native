import dayjs from 'dayjs';
import {DateType} from 'react-native-ui-datepicker';

interface IParams {
  date?: string;
  nextDate?: number;
}
export const getDate = (params?: IParams) => {
  const date = params?.date;
  const nextDate = params?.nextDate;
  let currentDate = date ? new Date(date) : new Date();
  return dayjs(
    currentDate.setDate(currentDate.getDate() + (nextDate ? nextDate : 0)),
  ).format('YYYY-MM-DD');
};

export const isWeekend = (date: Date) => {
  const day = date.getDay();
  return day === 0 || day === 6;
};
