import {FC, useEffect} from 'react';
import {Image, ImageBackground, StyleSheet, View} from 'react-native';
import Slider from 'react-native-a11y-slider';
import {useTypeDispatch} from '../../hooks/useTypeDispatch';
import {setRange} from '../../store/Slices/rangeSlice';

const CustomMarker = () => {
  return (
    <Image
      source={require('./images/coin.png')}
      style={{
        width: CustomMarker.size,
        height: CustomMarker.size,
      }}
    />
  );
};
CustomMarker.size = 50;

interface IProps {
  values: number[];
  defaultValue: number;
}

const SliderRangeTrack: FC<IProps> = ({defaultValue, values}) => {
  const dispatch = useTypeDispatch();
  const handleChange = (values: number[]) => {
    dispatch(setRange(values[0]));
  };

  useEffect(() => {
    dispatch(setRange(defaultValue));
  }, []);

  return (
    <ImageBackground
      source={require('./images/sliderTrack.png')}
      resizeMode={'contain'}>
      <Slider
        min={values[0]}
        max={values[values.length - 1]}
        values={[defaultValue]}
        sliderValues={values}
        style={styles.slider}
        onChange={handleChange}
        labelComponent={() => <View></View>}
        labelStyle={{display: 'none'}}
        selectedTrackStyle={{opacity: 0}}
        trackStyle={{opacity: 0}}
        markerComponent={CustomMarker}
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  slider: {
    // width: 280,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});

export default SliderRangeTrack;
