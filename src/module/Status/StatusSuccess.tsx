import {FC, useEffect} from 'react';
import {Image, Linking, View} from 'react-native';
import {Circle, Svg} from 'react-native-svg';
import styled from 'styled-components/native';
import {useTypeSelector} from '../../hooks/useTypeSelector';

import styles, {TitleText} from './styles';

const StatusSuccess: FC = () => {
  const {redirect_url} = useTypeSelector(state => state.form);

  useEffect(() => {
    if (!redirect_url) return;
    setTimeout(() => {
      Linking.openURL(redirect_url);
    }, 3000);
  }, []);
  return (
    <ViewFlexRow>
      <View style={[styles.svg, styles.svgSuccess]}>
        <Svg width="236" height="425" viewBox="0 0 236 425" fill="none">
          <Circle cx="236" cy="189" r="236" fill="#FFF0C3" />
          <Circle cx="185" cy="189" r="126" fill="#83BD6F" />
        </Svg>
      </View>
      <TitleText style={styles.green}>SUCCESS</TitleText>
      <View style={{justifyContent: 'space-between'}}>
        <View style={{maxWidth: 142, marginTop: 20, marginBottom: 20}}>
          <SubtitleText style={{fontWeight: '800'}}>Thank you!</SubtitleText>
          <SubtitleText>Your request has been submitted</SubtitleText>
        </View>
        <View style={{maxWidth: 170}}>
          <SubtitleText>
            You will
            <GreenText> now be redirected to the lender's website</GreenText>
          </SubtitleText>
          <BigText style={styles.orange}>SOON</BigText>
        </View>
      </View>
      <View style={{maxWidth: 200}}>
        <Image
          style={{transform: [{translateY: 73}]}}
          source={require('../../assets/images/people/success.png')}
        />
      </View>
    </ViewFlexRow>
  );
};

export default StatusSuccess;

const ViewFlexRow = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const BigText = styled.Text`
  font-size: 57px;
  font-family: 'Inter-Bold';
`;

const GreenText = styled.Text`
  color: #2ba117;
  font-size: 24px;
  font-weight: 700;
`;

const SubtitleText = styled.Text`
  font-size: 20px;
  font-family: 'Inter-Medium';
  line-height: 28px;
  color: #000;
`;
