import {View, Image} from 'react-native';
import styles, {TitleText} from './styles';
import styled from 'styled-components/native';
import {ActivityIndicator} from 'react-native-paper';
import {
  setRedirectUrl,
  setResponseStatus,
  setStartCheck,
} from '../../store/Slices/formSlice';
import {useTypeDispatch} from '../../hooks/useTypeDispatch';
import useTimer from '../../hooks/useTimer';
import {useEffect} from 'react';
import {useTypeSelector} from '../../hooks/useTypeSelector';
import {checkStatusLead} from '../../api/checkStatusLead';
import {sendLeadBase} from '../../api/sendLeadBase';

const color = '#4F82E3';

let intervalId: NodeJS.Timeout | null = null;
const StatusSearchLead = () => {
  const {lead_id, responseStatus, startCheck} = useTypeSelector(
    state => state.form,
  );
  const dispatch = useTypeDispatch();

  const {timerText, restart, isRunning, pause, resume} = useTimer({
    callback: () => {
      clearCurrentInterval();
      checkStatus(true);
    },
  });

  const onStartTimer = () => {
    const time = new Date();
    time.setSeconds(time.getSeconds() + 180);
    restart(time);
  };

  const clearCurrentInterval = () => {
    if (!intervalId) return;
    clearInterval(intervalId);
  };

  const checkStatus = (stop?: boolean) => {
    if (!lead_id) return;
    checkStatusLead(lead_id)
      .then(res => {
        if (res.status === 1) {
          clearCurrentInterval();
          dispatch(setRedirectUrl(res.redirect_url));
          dispatch(setResponseStatus('sold'));
          sendLeadBase(res);
          pause();
        }
        if (stop) {
          dispatch(setRedirectUrl(res.rejectUrl));
          dispatch(setResponseStatus('reject'));
          sendLeadBase(res);
        }
      })
      .catch(res => {
        console.log(res);
      });
  };

  const startStatusCheck = () => {
    checkStatus();
    intervalId = setInterval(() => {
      checkStatus();
    }, 5000);
  };

  useEffect(() => {
    if (!startCheck) {
      onStartTimer();
      startStatusCheck();
      dispatch(setStartCheck(true));
    } else {
      resume();
    }
  }, [responseStatus]);

  return (
    <View style={{minHeight: 400}}>
      <View style={[styles.svg, styles.svgOther]}>
        <Image source={require('../../assets/images/clock.png')} />
      </View>
      <TitleText style={{color: color}}>
        Looking for the right lender for you
      </TitleText>
      <ActivityIndicator
        style={styles.loader}
        animating={true}
        size={'large'}
        color={color}
      />
      <View style={{maxWidth: 'auto'}}>
        <SubText>Approximate waiting time:</SubText>
        <TimerView>
          <TimerText>{timerText ? timerText : '0:00'}</TimerText>
        </TimerView>
      </View>
      <SubText style={{marginTop: 20, fontSize: 20, color: '#D46600'}}>
        Please do not close applications
      </SubText>
    </View>
  );
};

export default StatusSearchLead;

const SubText = styled.Text`
  font-size: 24px;
  font-weight: 700;
  color: #000;
  text-align: center;
`;

const TimerView = styled.View`
  width: 170px;
  height: 58px;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-top: 20px;
  background-color: ${color};
  border-radius: 18px;
`;

const TimerText = styled.Text`
  color: #fff;
  text-align: center;
  font-size: 40px;
  font-weight: 700;
`;
