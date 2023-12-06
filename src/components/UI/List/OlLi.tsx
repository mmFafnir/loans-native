import React, {FC} from 'react';
import {StyleProp, Text, TextStyle} from 'react-native';
import styled from 'styled-components/native';

interface IProps {
  children: string;
  number: number;
  textStyle?: StyleProp<TextStyle>;
}
const OlLi: FC<IProps> = ({
  children,
  number,
  textStyle = {color: '#000', fontSize: 12, lineHeight: 16.8},
}) => {
  return (
    <LiView>
      <Text style={[textStyle, {marginRight: 3}]}>{`${number}.`}</Text>
      <Text style={textStyle}>{children}</Text>
    </LiView>
  );
};

export default OlLi;

const LiView = styled.View`
  flex-direction: row;
`;
