import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {RootStackParamList, StylePageViewDark} from '../../App';
import {ActivityIndicator, Button} from 'react-native-paper';

import {fetch} from '@react-native-community/netinfo';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type LoadingScreenProp = NativeStackNavigationProp<
  RootStackParamList,
  'LoadingPage'
>;
const LoadingScreen = () => {
  const navigation = useNavigation<LoadingScreenProp>();

  const [isConnected, setIsConnected] = useState<boolean | null>(null);

  const checkConnect = () => {
    setIsConnected(null);
    fetch().then(state => {
      console.log(state.isWifiEnabled);
      console.log(state.type);

      setIsConnected(state.isConnected);
    });
  };

  useEffect(() => {
    setTimeout(() => {
      checkConnect();
    }, 2000);
  }, []);

  useEffect(() => {
    if (!isConnected) return;
    navigation.navigate('FirstPage');
  }, [isConnected]);
  return (
    <StylePageViewDark style={styles.screen}>
      {isConnected === null && (
        <ActivityIndicator size={'large'} animating={true} color={'#73A7FC'} />
      )}
      {isConnected === false && (
        <>
          <Text>No connect internet</Text>
          <Button onPress={checkConnect}>Update</Button>
        </>
      )}
    </StylePageViewDark>
  );
};

export default LoadingScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
  },
});
