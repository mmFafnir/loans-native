import {Dimensions, StyleSheet} from 'react-native';
import styled from 'styled-components/native';

const stylesStatus = StyleSheet.create({
  screen: {
    paddingTop: 30,
  },
  green: {
    color: '#259823',
  },
  orange: {
    color: '#F8894B',
  },
  red: {
    color: '#F35959',
  },
  max112: {
    maxWidth: 112,
  },

  loader: {
    marginTop: 40,
    marginBottom: 50,
    transform: [{scale: 1.3}],
  },

  svg: {
    zIndex: -1,
    position: 'absolute',
    overflow: 'hidden',
  },

  img: {
    alignSelf: 'center',
    position: 'relative',
    zIndex: 1,
    transform: [{translateY: -15}],
  },

  svgOther: {
    alignSelf: 'center',
    bottom: -20,
    width: Dimensions.get('screen').width - 34,
    height: 412 - 58,
    left: -19,
    alignItems: 'center',
    borderRadius: 20,
  },
  svgSuccess: {
    top: -38,
    right: -19,
    borderTopEndRadius: 20,
  },
  button: {
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 'auto',
    marginBottom: 22,
    borderRadius: 16,
    border: '2px solid #73A7FC',
    backgroundColor: '#73A7FC',
  },
  buttonTransparent: {
    borderColor: '#73A7FC',
    borderWidth: 2,
    backgroundColor: 'transparent',
  },
  buttonContent: {
    height: 53,
  },
});

export default stylesStatus;

export const TitleText = styled.Text`
  width: 100%;
  font-size: 32px;
  font-weight: 800;
  font-family: 'Inter-Bold';
  margin-bottom: 18px;
`;
