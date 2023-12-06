import React, {useEffect, useRef, useState} from 'react';
import {Image, StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import AppIntroSlider from 'react-native-app-intro-slider';
import SliderPagination from './SliderPagination';

import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {Button} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {MainScreenProp} from '../../screens/MainScreen';

type TypeSlide = {
  img: number;
  text: string;
  id: number;
};

const slides: TypeSlide[] = [
  {
    id: 1,
    img: require('../../assets/images/slider-main/1.png'),
    text: 'Добро пожаловать!',
  },
  {
    id: 2,
    img: require('../../assets/images/slider-main/2.png'),
    text: 'Рассмотрение в течении 5 минут',
  },
  {
    id: 3,
    img: require('../../assets/images/slider-main/3.png'),
    text: 'Без справок о доходах',
  },
  {
    id: 4,
    img: require('../../assets/images/slider-main/4.png'),
    text: 'Быстро получить, легко отдать',
  },
  {
    id: 5,
    img: require('../../assets/images/slider-main/5.png'),
    text: '',
  },
];

const Slider = (): JSX.Element => {
  const navigation = useNavigation<MainScreenProp>();

  const sliderRef = useRef<AppIntroSlider>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [disabled, setDisabled] = useState<boolean>(false);

  const pressBtnProgress = useSharedValue(1);
  const pressBtnStyle = useAnimatedStyle(() => {
    return {
      opacity: pressBtnProgress.value,
    };
  });

  const reanimatedWorklet = () => {
    ('worklet');
    pressBtnProgress.value = withTiming(
      slides.length - 1 === currentIndex ? 0 : 1,
      {duration: 100},
    );
  };

  const goToSlide = (nextIndex: number) => {
    if (!sliderRef.current || nextIndex >= slides.length) return;
    setCurrentIndex(nextIndex);
    sliderRef.current.goToSlide(nextIndex);
  };

  const nextScreen = () => navigation.navigate('MainPage');

  useEffect(() => {
    setDisabled(slides.length - 1 === currentIndex);
    reanimatedWorklet();
  }, [currentIndex]);
  return (
    <SliderView>
      <Animated.View style={[pressBtnStyle]}>
        <Button
          onPress={nextScreen}
          mode="text"
          style={styles.pressable}
          disabled={disabled}
          rippleColor={'#ffd06c33'}>
          <ButtonText>Пропустить</ButtonText>
        </Button>
      </Animated.View>
      <AppIntroSlider
        ref={sliderRef}
        onSlideChange={(a, b) => setCurrentIndex(a)}
        renderPagination={activeIndex => (
          <SliderPagination
            slideNext={goToSlide}
            active={activeIndex}
            total={slides.length}
          />
        )}
        data={slides}
        renderItem={({item}) => (
          <SlideView key={item.id}>
            <SlideViewImage style={{flex: 1}}>
              <Image source={item.img} />
            </SlideViewImage>
            <SlideText>{item.text}</SlideText>
          </SlideView>
        )}
      />
      {/* <Button title="Далее" onPress={goToSlide} /> */}
    </SliderView>
  );
};

export default Slider;

const SliderView = styled.View`
  display: flex;
  color: #fff;
`;

const SlideView = styled.View`
  flex: 1;
  padding: 0px 16px;
`;

const SlideViewImage = styled.View`
  border-radius: 20px;
  border: 4px solid #ffd06c;
  background: #fff;
  max-height: 229px;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const SlideText = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  margin-top: 20px;
`;

const ButtonText = styled.Text`
  background-color: transparent;
  margin-left: auto;
  font-size: 14px;
  color: #858585;
  font-weight: 700;
`;

const styles = StyleSheet.create({
  pressable: {
    marginTop: 20,
    marginBottom: 28,
    marginRight: 21,
    marginLeft: 'auto',
  },
});
