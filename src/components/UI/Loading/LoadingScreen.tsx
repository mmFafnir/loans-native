import React, {FC, useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';

import {ActivityIndicator} from 'react-native-paper';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import {StylePageViewDark, StylePageViewLight} from '../../../../App';

interface IProps {
  theme?: 'dark' | 'light';
  isReady: boolean;
}

const LoadingScreen: FC<IProps> = ({isReady, theme = 'light'}) => {
  const [hide, setHide] = useState<boolean>(false);
  const opacity = useSharedValue(1);
  const stylesAnimated = useAnimatedStyle(() => ({
    opacity: withSpring(opacity.value, {
      duration: 500,
    }),
  }));

  useEffect(() => {
    if (!isReady) return;
    opacity.value = 0;
    setTimeout(() => {
      setHide(true);
    }, 510);
  }, [isReady]);

  const AnimatedView = Animated.createAnimatedComponent(
    theme === 'dark' ? StylePageViewDark : StylePageViewLight,
  );

  if (hide) return <></>;
  return (
    <AnimatedView style={[stylesAnimated, styles.screen]}>
      <ActivityIndicator size={'large'} animating={true} color={'#73A7FC'} />
    </AnimatedView>
  );
};

export default LoadingScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    zIndex: 20,
  },
});
