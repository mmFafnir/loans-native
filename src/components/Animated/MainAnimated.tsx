import React, {useEffect} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Animated, {
  SharedValue,
  useAnimatedProps,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {Circle, Svg} from 'react-native-svg';

const MainAnimated = () => {
  const scaleSmall = useSharedValue(0);
  const scaleBig = useSharedValue(0);
  const opacity = useSharedValue(0);

  const AnimatedSvg = Animated.createAnimatedComponent(Svg);

  const getScale = (scale: SharedValue<number>) => {
    'worklet';
    return {
      scale: withTiming(scale.value, {
        duration: 500,
      }),
    };
  };

  const animatedSmallScale = useAnimatedStyle(() => ({
    transform: [getScale(scaleSmall)],
  }));

  const animatedBilScale = useAnimatedStyle(() => ({
    transform: [getScale(scaleBig)],
  }));

  const animatedOpacity = useAnimatedStyle(() => ({
    opacity: withTiming(opacity.value),
  }));

  useEffect(() => {
    scaleBig.value = 1;
    setTimeout(() => (scaleSmall.value = 1), 400);
    setTimeout(() => (opacity.value = 1), 800);
  }, []);

  return (
    <View style={styles.main}>
      <AnimatedSvg
        style={[styles.absolute, styles.circleSmall, animatedSmallScale]}
        width="163"
        height="163"
        viewBox="0 0 163 163"
        fill="none">
        <Circle cx="81.5" cy="81.5" r="81.5" fill="#FFDA72" />
      </AnimatedSvg>
      <AnimatedSvg
        style={[styles.absolute, animatedBilScale]}
        width="249"
        height="249"
        viewBox="0 0 249 249"
        fill="none">
        <Circle cx="124.5" cy="124.5" r="124.5" fill="#FFF0C3" />
      </AnimatedSvg>
      <Animated.Image
        style={[styles.images, animatedOpacity]}
        source={require('../../assets/images/people/main.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    marginTop: 50,
    flex: 1,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  absolute: {
    position: 'absolute',
  },
  circleSmall: {
    zIndex: 1,
  },

  images: {
    zIndex: 3,
  },
});

export default MainAnimated;
