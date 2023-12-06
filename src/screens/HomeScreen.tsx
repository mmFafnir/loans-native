import {Image, StyleSheet, Text, View} from 'react-native';
import {StylePageViewLight} from '../../App';
import SliderRange from '../components/SliderRange';
import {Button} from 'react-native-paper';
import styled from 'styled-components/native';
import MainAnimated from '../components/Animated/MainAnimated';
import {FC} from 'react';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {MainScreenProp} from './MainScreen';
import {Path, Svg} from 'react-native-svg';

const colorsText = ['#73A7FC', '#72BC82'];

const HomeScreen = (): JSX.Element => {
  const navigation = useNavigation<MainScreenProp>();

  const goFormScreen = () => navigation.navigate('FormPage');

  return (
    <StylePageViewLight style={styles.screen}>
      <MainView>
        <MainImage source={require('../assets/images/people/main2.png')} />
        <View>
          <MainText style={styles.colorFirst}>TAKE A LOAN</MainText>
          <MainText style={styles.colorFirst}>FOR</MainText>
          <MainText style={styles.colorSecond}>2 EASY</MainText>
          <MainText style={styles.colorSecond}>STEPS</MainText>
          <Svg
            style={styles.svg}
            width="154"
            height="20"
            viewBox="0 0 154 20"
            fill="none">
            <Path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M154 2.5H0V0.5H154V2.5Z"
              fill="#73A7FC"
            />
            <Path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M84.7017 10.1311L78.2202 19.0878C77.8224 19.6374 77.1776 19.6374 76.7798 19.0878L70.2983 10.1311C69.9006 9.58146 69.9006 8.69034 70.2983 8.14071C70.696 7.59109 71.3409 7.59109 71.7386 8.14071C73.2282 10.1991 76.4815 9.1454 76.4815 6.60463L76.4815 1.51847C76.4815 0.955986 76.9375 0.5 77.5 0.5C78.0625 0.5 78.5185 0.955985 78.5185 1.51847L78.5185 6.60463C78.5185 9.14539 81.7718 10.1991 83.2614 8.14072C83.6591 7.59109 84.304 7.59109 84.7017 8.14072C85.0994 8.69034 85.0994 9.58146 84.7017 10.1311Z"
              fill="#73A7FC"
            />
          </Svg>
        </View>
      </MainView>
      <SliderRange />
      <Button
        contentStyle={styles.buttonContent}
        style={styles.button}
        mode="elevated"
        onPress={goFormScreen}>
        <ButtonText>get loan</ButtonText>
      </Button>
    </StylePageViewLight>
  );
};

export default HomeScreen;

const MainView = styled.View`
  flex-direction: row;
  position: relative;
  padding: 0px 16px;
  overflow: hidden;
  flex: 1;
  justify-content: flex-end;
`;

const MainText = styled.Text`
  text-align: right;
  font-size: 35.837px;
  font-weight: 800;
  line-height: 35.837px;
  margin-bottom: 5px;
`;

const MainImage = styled.Image`
  position: absolute;
  left: 10px;
  top: 0;
`;

const ButtonText = styled.Text`
  font-size: 21px;
  font-weight: 700;
  color: #fff;
  text-transform: uppercase;
`;

const styles = StyleSheet.create({
  screen: {
    marginTop: 40,
    paddingBottom: 20,
  },
  button: {
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 30,
    marginBottom: 'auto',
    borderRadius: 16,
    border: '2px solid #73A7FC',
    backgroundColor: '#73A7FC',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
  },

  buttonContent: {
    height: 53,
  },
  svg: {
    marginLeft: 'auto',
    marginTop: 5,
  },

  colorFirst: {
    color: colorsText[0],
  },
  colorSecond: {
    color: colorsText[1],
  },
});

// <MainAnimated />;
