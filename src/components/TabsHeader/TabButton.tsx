import React, {FC, ReactNode} from 'react';
import {
  Animated,
  Pressable,
  StyleProp,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import {Card} from 'react-native-paper';
import styled from 'styled-components/native';
import {useTypeDispatch} from '../../hooks/useTypeDispatch';
import {setTab} from '../../store/Slices/tabSlice';

interface IProps {
  colorFirst: Animated.AnimatedInterpolation<string | number>;
  colorSecond: Animated.AnimatedInterpolation<string | number>;
  style?: Animated.WithAnimatedValue<StyleProp<ViewStyle>>;
  label: string;
  children?: ReactNode;
  index: number;
}

const TabButton: FC<IProps> = ({
  colorFirst,
  colorSecond,
  label,
  children = <></>,
  index,
  style = {},
}) => {
  const dispatch = useTypeDispatch();
  const TabButtonAnimated = Animated.createAnimatedComponent(TabView);
  const TabTextAnimated = Animated.createAnimatedComponent(TabText);

  const changeTab = () => dispatch(setTab(index));

  return (
    <Card style={[styles.button, style]} elevation={5}>
      <Pressable onPress={changeTab}>
        <TabButtonAnimated style={{backgroundColor: colorFirst}}>
          <TabTextAnimated style={{color: colorSecond}}>
            {label}
          </TabTextAnimated>
          {children}
        </TabButtonAnimated>
      </Pressable>
    </Card>
  );
};

const TabText = styled.Text`
  color: #fff;
  text-align: center;
  font-size: 20px;
  overflow: visible;
  line-height: 22px;
  font-family: 'Inter-Bold';
`;

const TabView = styled.View`
  height: 53px;
  border-radius: 10px;
  background: #73a7fc;
  justify-content: center;
  flex-direction: row;
  align-items: center;
`;

const styles = StyleSheet.create({
  button: {
    flex: 1,
  },
});

export default TabButton;
