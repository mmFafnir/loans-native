import {Dispatch, FC, SetStateAction, useEffect} from 'react';
import {Dimensions, Pressable, StyleSheet} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import {Path, Svg} from 'react-native-svg';
import styled from 'styled-components/native';

interface IProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  text: string;
}

const SelectButton: FC<IProps> = ({open, setOpen, text}) => {
  const scale = useSharedValue(1);

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{scaleY: withSpring(scale.value)}],
  }));

  const toggleOpen = () => setOpen(prev => !prev);

  useEffect(() => {
    scale.value = open ? -1 : 1;
  }, [open]);

  return (
    <Pressable onPress={toggleOpen}>
      <ButtonView
        style={[
          styles.shadowButton,
          {width: Dimensions.get('window').width - 32},
        ]}>
        <ButtonText>{text}</ButtonText>
        <Animated.View style={[animatedStyles, styles.icon]}>
          <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <Path
              d="M6 9L12 15L18 9"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </Svg>
        </Animated.View>
      </ButtonView>
    </Pressable>
  );
};

export default SelectButton;

const ButtonView = styled.View`
  border-radius: 8px;
  background-color: #73a7fc;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
  height: 56px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 8px;
`;

const ButtonText = styled.Text`
  font-size: 14px;
  color: #fff;
  flex: 0 1 350px;
`;

const styles = StyleSheet.create({
  shadowButton: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
  },

  icon: {
    flexShrink: 0,
    flexBasis: 20,
  },
});
