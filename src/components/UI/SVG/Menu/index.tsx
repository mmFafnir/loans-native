import React, {FC, ReactNode, useEffect} from 'react';
import {View} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

interface IProps {
  children: ReactNode;
  focus: boolean;
}

const timingConfig = {
  duration: 1000,
};
const MenuIcon: FC<IProps> = ({children, focus}) => {
  const scale = useSharedValue(1);
  const translateY = useSharedValue(0);

  const setActiveIcon = () => {
    'worker';
    scale.value = withTiming(0.8);
    translateY.value = withTiming(-5);
  };
  const setUnActiveIcon = () => {
    'worker';
    scale.value = withTiming(1);
    translateY.value = withTiming(1);
  };

  useEffect(() => {
    console.log(focus);
    if (focus) {
      setActiveIcon();
    } else {
      setUnActiveIcon();
    }
  }, [focus]);

  return (
    <Animated.View
      style={{
        transform: [
          {
            scale,
          },
          {
            translateY,
          },
        ],
      }}>
      {children}
    </Animated.View>
  );
};

export default MenuIcon;
