import React, {FC, useEffect, useState} from 'react';
import {ImageBackground, View} from 'react-native';
import SliderRangeValue from './SliderRangeValue';
import SliderRangeTrack from './SliderRangeTrack';
import styled from 'styled-components/native';

const sliderValues = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];

const SliderRange = () => {
  const [value, setValue] = useState<number>(10);

  useEffect(() => {
    setValue(sliderValues[4]);
  }, []);
  return (
    <SliderRangeView>
      <BackgroundImage source={require('../../assets/images/map.png')} />
      <SliderTitle>CHOOSE AMOUNT</SliderTitle>
      <SliderRangeValue />
      <SliderRangeTrack values={sliderValues} defaultValue={sliderValues[4]} />
    </SliderRangeView>
  );
};

export default SliderRange;

const SliderRangeView = styled.View`
  position: relative;
  padding: 20px;
  text-align: center;
`;

const BackgroundImage = styled.Image`
  position: absolute;
  right: 0;
  top: 0;
`;

const SliderTitle = styled.Text`
  color: #fff;
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  line-height: 28px; /* 28px */
  margin-bottom: 10px;
`;
