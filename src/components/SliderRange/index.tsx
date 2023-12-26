import React, {FC, memo, useEffect, useState} from 'react';
import {Dimensions, ImageBackground, View} from 'react-native';
import SliderRangeValue from './SliderRangeValue';
import SliderRangeTrack from './SliderRangeTrack';
import styled from 'styled-components/native';
import {Surface} from 'react-native-paper';

const sliderValues = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];

const SliderRange = () => {
  const [value, setValue] = useState<number>(10);
  useEffect(() => {
    setValue(sliderValues[4]);
  }, []);
  return (
    // <Surface style={{borderRadius: 20}} elevation={4}>
    <SliderRangeView>
      <BackgroundImage
        // style={{width: Dimensions.get('screen').width - 32}}
        source={require('../../assets/images/map.png')}>
        <SliderTitle>CHOOSE AMOUNT</SliderTitle>
        <SliderRangeValue />
        <SliderRangeTrack
          values={sliderValues}
          defaultValue={sliderValues[4]}
        />
      </BackgroundImage>
    </SliderRangeView>
    // </Surface>
  );
};

export default memo(SliderRange);

const SliderRangeView = styled.View`
  position: relative;
  text-align: center;
  border-radius: 20px;
  overflow: hidden;
`;

const BackgroundImage = styled.ImageBackground`
  padding: ${Dimensions.get('screen').width > 360 ? '20px 40px' : '20px 20px'};
`;

const SliderTitle = styled.Text`
  color: #fff;
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  line-height: 28px; /* 28px */
  margin-bottom: 10px;
`;
