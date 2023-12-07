import React, {FC, ReactNode, useEffect} from 'react';
import {
  Dimensions,
  Image,
  ImageSourcePropType,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import {RootStackParamList, StylePageViewLight} from '../../App';
import styled from 'styled-components/native';
import {Circle, Svg} from 'react-native-svg';
import {Button} from 'react-native-paper';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {useTypeSelector} from '../hooks/useTypeSelector';

const StatusSuccess: FC = () => (
  <ViewFlexRow>
    <TitleText style={styles.green}>SUCCESS</TitleText>
    <View style={{justifyContent: 'space-between'}}>
      <View style={{maxWidth: 112, marginTop: 20}}>
        <SubtitleText style={{fontWeight: '800'}}>Thank you!</SubtitleText>
        <SubtitleText>Your request has been submitted</SubtitleText>
      </View>
      <View style={{maxWidth: 170}}>
        <SubtitleText>Our manager will contact you</SubtitleText>
        <BigText style={styles.orange}>SOON</BigText>
      </View>
    </View>
    <View>
      <Image
        style={{transform: [{translateY: 53}]}}
        source={require('../assets/images/people/success.png')}
      />
    </View>
    <View style={[styles.svg, styles.svgSuccess]}>
      <Svg width="236" height="425" viewBox="0 0 236 425" fill="none">
        <Circle cx="236" cy="189" r="236" fill="#FFF0C3" />
        <Circle cx="185" cy="189" r="126" fill="#83BD6F" />
      </Svg>
    </View>
  </ViewFlexRow>
);

interface IPropsOther {
  title: string;
  color: string;
  children: ReactNode;
  img: ImageSourcePropType;
}
const StatusOther: FC<IPropsOther> = ({title, color, children, img}) => (
  <View style={{maxHeight: 412 - 58}}>
    <TitleText style={{color: color}}>{title}</TitleText>
    <View style={{maxWidth: 280}}>{children}</View>
    <Image
      style={{alignSelf: 'center', transform: [{translateY: -15}]}}
      source={img}
    />
    <View style={[styles.svg, styles.svgOther]}>
      <Svg width="472" height="472" viewBox="0 0 472 472" fill="none">
        <Circle cx="236" cy="236" r="236" fill="#FFF0C3" />
        <Circle cx="230" cy="267" r="126" fill={color} />
      </Svg>
    </View>
  </View>
);

export type StatusScreenProp = NativeStackNavigationProp<
  RootStackParamList,
  'FirstPage'
>;

const renderComponents = (status: 'success' | 'have' | 'reject') => {
  if (status === 'success') return <StatusSuccess />;
  if (status === 'reject')
    return (
      <StatusOther
        img={require('../assets/images/people/reject.png')}
        color={styles.red.color}
        title="REJECT">
        <Text>Invalid data type</Text>
        <Text>Please, check all inputs on correctly and try againe</Text>
      </StatusOther>
    );
  if (status === 'have')
    return (
      <StatusOther
        img={require('../assets/images/people/have.png')}
        color={styles.orange.color}
        title="SORRY">
        <Text>You already have an active moderation request</Text>
        <Text>Please, wait for end of processing</Text>
      </StatusOther>
    );
};

const StatusScreen: FC = () => {
  const {responseStatus} = useTypeSelector(state => state.form);

  const navigation = useNavigation<StatusScreenProp>();

  const goHomeScreen = () => navigation.navigate('MainPage');
  const goFormScreen = () => navigation.navigate('FormPage');

  useEffect(() => {
    if (!responseStatus) goHomeScreen();
  }, []);

  if (!responseStatus) return <Text>Loading...</Text>;
  return (
    <StylePageViewLight style={styles.screen}>
      <BorderView>{renderComponents(responseStatus)}</BorderView>
      <Button
        contentStyle={styles.buttonContent}
        style={styles.button}
        mode="elevated"
        onPress={responseStatus === 'reject' ? goFormScreen : goHomeScreen}>
        <ButtonText>ok</ButtonText>
      </Button>
    </StylePageViewLight>
  );
};

export default StatusScreen;

const BorderView = styled.View`
  border: 1px solid #c2c2c2;
  border-radius: 20px;
  padding: 38px 19px;
  padding-bottom: 20px;
  position: relative;
`;

const ViewFlexRow = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`;

const TitleText = styled.Text`
  width: 100%;
  font-size: 32px;
  font-weight: 800;
  margin-bottom: 18px;
`;

const SubtitleText = styled.Text`
  font-size: 20px;
  font-weight: 500;
  line-height: 28px;
  color: #000;
`;

const Text = styled.Text`
  color: #000;
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 10px;
  line-height: 19.8px;
`;

const BigText = styled.Text`
  font-size: 59.76px;
  font-weight: 800;
`;

const ButtonText = styled.Text`
  font-size: 21px;
  font-weight: 700;
  color: #fff;
  text-transform: uppercase;
`;

const styles = StyleSheet.create({
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

  svg: {
    zIndex: -1,
    position: 'absolute',
    overflow: 'hidden',
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
});
