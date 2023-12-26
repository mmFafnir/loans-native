import React, {FC, ReactNode, useEffect} from 'react';
import {Dimensions, Linking, StyleSheet} from 'react-native';
import {RootStackParamList, StylePageViewLight} from '../../App';
import styled from 'styled-components/native';
import {Button} from 'react-native-paper';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {useTypeSelector} from '../hooks/useTypeSelector';
import {useTypeDispatch} from '../hooks/useTypeDispatch';
import {setResponseStatus, setStatusDefault} from '../store/Slices/formSlice';
import StatusSuccess from '../module/Status/StatusSuccess';
import StatusOther from '../module/Status/StatusOther';
import StatusSearchLead from '../module/Status/StatusSearchLead';
import {TypeResponseStatusForm} from '../store/Slices/formSlice/interface';
import styles from '../module/Status/styles';
import useIsReady from '../hooks/useIsReady';
import LoadingScreen from '../components/UI/Loading/LoadingScreen';

export type StatusScreenProp = NativeStackNavigationProp<
  RootStackParamList,
  'FirstPage'
>;

const renderComponents = (status: TypeResponseStatusForm) => {
  if (status === 'sold') return <StatusSuccess />;
  if (status === 'In Progress') return <StatusSearchLead />;
  if (status === 'reject')
    return (
      <StatusOther
        img={require('../assets/images/people/reject.png')}
        color={styles.red.color}
        title="REJECT"
        redirect={true}>
        <Text>We didn't find any suitable loans for you</Text>
        <Text>
          You can look at other similar offers or try filling out the form again
          in 3 minutes
        </Text>
      </StatusOther>
    );
  if (status === 'have')
    return (
      <StatusOther
        img={require('../assets/images/people/have.png')}
        color={styles.orange.color}
        title="SORRY">
        <Text>You already have an active moderation request</Text>
        <Text>Please, wait for end of processing</Text>
      </StatusOther>
    );

  if (status === 'error')
    return (
      <StatusOther
        img={require('../assets/images/people/have.png')}
        color={'red'}
        title="SERVER ERROR">
        <Text>Please, try againe later</Text>
      </StatusOther>
    );
};

const StatusScreen: FC = () => {
  const isReady = useIsReady();
  const {responseStatus, redirect_url} = useTypeSelector(state => state.form);
  const navigation = useNavigation<StatusScreenProp>();
  const dispatch = useTypeDispatch();
  const goHomeScreen = () => {
    navigation.navigate('MainPage');
    if (responseStatus === 'sold' || responseStatus === 'reject') {
      dispatch(setResponseStatus('have'));
    }
  };

  const openUrl = () => {
    if (!redirect_url) return;
    Linking.openURL(redirect_url);
  };

  useEffect(() => {
    console.log(responseStatus);
  }, [responseStatus]);

  return (
    <>
      <LoadingScreen isReady={isReady || !responseStatus} />
      <StylePageViewLight style={styles.screen}>
        <BorderView>
          {responseStatus && renderComponents(responseStatus)}
        </BorderView>

        {redirect_url && (
          <Button
            contentStyle={[styles.buttonContent]}
            style={[styles.button, styles.buttonTransparent]}
            mode="outlined"
            onPress={openUrl}>
            <ButtonText style={{color: '#73A7FC'}}>open link</ButtonText>
          </Button>
        )}

        <Button
          contentStyle={styles.buttonContent}
          style={[styles.button, redirect_url && {marginTop: 0}]}
          mode="elevated"
          onPress={goHomeScreen}>
          <ButtonText>ok</ButtonText>
        </Button>
      </StylePageViewLight>
    </>
  );
};

export default StatusScreen;

const BorderView = styled.View`
  border: 1px solid #c2c2c2;
  border-radius: 20px;
  padding: 38px 19px;
  padding-bottom: 20px;
  position: relative;
`;

const Text = styled.Text`
  color: #000;
  font-size: 18px;
  font-family: 'Inter-Regular';
  margin-bottom: 10px;
  line-height: 19.8px;
`;

const ButtonText = styled.Text`
  font-size: 21px;
  font-family: 'Inter-Bold';
  color: #fff;
  text-transform: uppercase;
`;
