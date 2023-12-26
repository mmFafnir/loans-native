import React, {FC, useEffect, useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {ActivityIndicator, Button} from 'react-native-paper';

import {fetch} from '@react-native-community/netinfo';
import {StylePageViewDark} from '../../../../App';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import {Circle, Svg} from 'react-native-svg';
import styled from 'styled-components/native';

interface IProps {
  setConnected: (value: boolean | null) => void;
}
const LoadingFirst: FC<IProps> = ({setConnected}) => {
  const [isConnected, setIsConnected] = useState<boolean | null>(null);

  const opacity = useSharedValue(1);

  const stylesAnimated = useAnimatedStyle(() => ({
    opacity: withSpring(opacity.value, {
      duration: 500,
    }),
  }));

  const checkConnect = () => {
    setConnected(null);
    fetch().then(state => {
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
    opacity.value = 0;
    setTimeout(() => {
      setConnected(isConnected);
    }, 500);
  }, [isConnected]);

  const AnimatedView = Animated.createAnimatedComponent(StylePageViewDark);

  return (
    <AnimatedView style={[styles.screen, stylesAnimated]}>
      {isConnected === null && (
        <ActivityIndicator size={'large'} animating={true} color={'#73A7FC'} />
      )}
      {isConnected === false && (
        <>
          <BorderView>
            <ViewFlexRow>
              <TitleText style={{color: '#AF70E0'}}>Oops.... </TitleText>
              <View style={{justifyContent: 'space-between'}}>
                <View style={{maxWidth: 112, marginTop: 20}}>
                  <SubtitleText style={{fontWeight: '800'}}>
                    No internet connection
                  </SubtitleText>
                  <SubtitleText>Check the internet connection</SubtitleText>
                </View>
              </View>
              <View>
                <Image
                  style={{transform: [{translateY: 53}, {translateX: 50}]}}
                  source={require('../../../assets/images/people/success.png')}
                />
              </View>
              <View
                style={[
                  {
                    zIndex: -1,
                    position: 'absolute',
                    overflow: 'hidden',
                    top: -38,
                    right: -19,
                    borderTopEndRadius: 20,
                  },
                ]}>
                <Svg width="236" height="425" viewBox="0 0 236 425" fill="none">
                  <Circle cx="236" cy="189" r="236" fill="#FFF0C3" />
                  <Circle cx="185" cy="189" r="126" fill="#AF70E0" />
                </Svg>
              </View>
            </ViewFlexRow>
          </BorderView>
          <Button
            contentStyle={styles.buttonContent}
            style={styles.button}
            mode="elevated"
            onPress={checkConnect}>
            <ButtonText>Update</ButtonText>
          </Button>
        </>
      )}
    </AnimatedView>
  );
};

export default LoadingFirst;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 20,
    zIndex: 20,
  },
  button: {
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 'auto',
    marginBottom: 22,
    borderRadius: 16,
    border: '2px solid #73A7FC',
    backgroundColor: '#73A7FC',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
  },

  buttonContent: {
    height: 53,
  },
});

const ViewFlexRow = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`;

const BorderView = styled.View`
  border: 1px solid #c2c2c2;
  border-radius: 20px;
  padding: 38px 19px;
  padding-bottom: 20px;
  position: relative;
`;

const TitleText = styled.Text`
  width: 100%;
  font-size: 32px;
  font-weight: 800;
  margin-bottom: 18px;
`;

const SubtitleText = styled.Text`
  font-size: 20px;
  font-weight: 500;
  line-height: 28px;
  color: #fff;
  margin-bottom: 13px;
`;

const ButtonText = styled.Text`
  font-size: 20px;
  font-family: 'Inter-Bold';
  color: #fff;
  text-transform: uppercase;
`;
