type TypeDifDare = {
  minutes: number;
  hours: number;
  day: number;
};

export const differenceDate = (date: string): TypeDifDare => {
  const currentDate = new Date();
  const givenDate = new Date(date);
  //@ts-ignore
  const ms = givenDate - currentDate;
  const minutes = Math.floor(ms / (1000 * 60));
  const hours = Math.floor(minutes / 60);
  const day = Math.ceil(hours / 24);
  return {minutes, hours, day};
};

export const sumDate = (date1: string, date2: string) => {};

export const sumDayToDate = (date: string, day: number) => {};
