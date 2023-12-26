import {useNavigation} from '@react-navigation/native';
import React, {FC, useEffect, useState} from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import {Button} from 'react-native-paper';
import {Circle, Svg} from 'react-native-svg';
import styled from 'styled-components/native';
import {MainScreenProp} from '../../screens/MainScreen';

interface IProps {
  active: number;
  total: number;
  slideNext: (nextIndex: number) => void;
}

interface IPropsBol {
  index: number;
  active: number;
  style?: StyleProp<ViewStyle>;
}

const Point: FC<IPropsBol> = ({active, style, index}) => {
  return (
    <Svg style={style} width="25" height="24" viewBox="0 0 25 24" fill="none">
      <Circle
        cx="12.5"
        cy="12"
        r="4.5"
        fill="#FFD06C"
        opacity={active === index ? 1 : 0}
      />
      <Circle cx="12.5" cy="12" r="10.5" stroke="#FFD06C" stroke-width="3" />
    </Svg>
  );
};

const SliderPagination: FC<IProps> = ({
  active,
  total,
  slideNext,
}): JSX.Element => {
  const navigation = useNavigation<MainScreenProp>();

  const [isEnd, setIsEnd] = useState<boolean>(false);

  const nextSlide = () => slideNext(active + 1);

  const goToMain = () => navigation.navigate('MainPage');

  useEffect(() => {
    setIsEnd(active !== total - 1);
  }, [active]);

  return (
    <View>
      <Pagination>
        {Array(total)
          .fill(null)
          .map((_, index) => (
            <Point
              key={index}
              style={{marginRight: index !== total - 1 ? 13 : 0}}
              active={active}
              index={index}
            />
          ))}
      </Pagination>
      <Button
        mode="contained"
        compact={true}
        style={styles.btnNext}
        contentStyle={styles.btnNextContent}
        dark={false}
        onPress={!isEnd ? goToMain : nextSlide}>
        <ButtonNextText>{isEnd ? 'Далее' : 'Войти'}</ButtonNextText>
      </Button>
    </View>
  );
};

export default SliderPagination;

const Pagination = styled.View`
  position: static;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 30px;
  padding: 0px 10px;
`;

const ButtonNextText = styled.Text`
  text-align: center;
  color: #242424;
  font-size: 16px;
  text-transform: uppercase;
`;

const styles = StyleSheet.create({
  btnNext: {
    justifyContent: 'center',
    width: 200,
    padding: 0,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 20,
    borderRadius: 8,
    backgroundColor: '#FFD06C',
  },
  btnNextContent: {
    height: 50,
  },
});
