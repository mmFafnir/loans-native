import {useEffect, useState} from 'react';

import {useTimer as useHookTimer} from 'react-timer-hook';

const time = new Date();
time.setSeconds(time.getSeconds() + 200);

interface IProps {
  expiryTimestamp?: Date;
  callback?: () => void;
}

const useTimer = (params?: IProps) => {
  const {seconds, minutes, isRunning, start, pause, resume, restart} =
    useHookTimer({
      autoStart: false,
      expiryTimestamp:
        params && params.expiryTimestamp ? params.expiryTimestamp : time,
      onExpire: () => {
        pause();
        if (params?.callback) params.callback();
      },
    });

  const [timerText, setTimerText] = useState<string | null>(null);

  useEffect(() => {
    setTimerText(`${minutes}:${seconds < 10 ? 0 : ''}${seconds}`);
  }, [seconds]);

  useEffect(() => {
    setTimerText(null);
  }, [isRunning]);
  return {timerText, start, resume, restart, isRunning, pause};
};

export default useTimer;
