import React, {FC, useState} from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import {Card} from 'react-native-paper';
import styled from 'styled-components/native';
import {EnumStatusInput} from '../../../types/Enums';
import {SvgStatus} from '../SVG/Menu/SvgStatus';
import ErrorMassage from './ErrorMassage';

interface IProps {
  defaultValue?: string;
  value: string;
  label: string;
  placeholder?: string;
  viewStyle?: StyleProp<ViewStyle>;
  errorMassage?: string;
  onChange: (value: string) => void;
}

const Input: FC<IProps> = ({
  defaultValue = '',
  errorMassage,
  placeholder,
  label,
  viewStyle = {},
  onChange,
  value,
}) => {
  // const [text, setText] = React.useState(defaultValue);

  return (
    <View style={[viewStyle, {marginBottom: 20}]}>
      <LabelText>{label}</LabelText>
      {errorMassage && <ErrorMassage>{errorMassage}</ErrorMassage>}
      <Card
        mode="elevated"
        elevation={1}
        contentStyle={{
          flexDirection: 'row',
          alignItems: 'center',
        }}
        style={styles.card}>
        <InputText
          defaultValue={defaultValue}
          value={value}
          placeholder={placeholder}
          onChangeText={onChange}
        />
        {errorMassage && (
          <StatusView>
            <SvgStatus status={false} />
          </StatusView>
        )}
      </Card>
    </View>
  );
};

export default Input;

const LabelText = styled.Text`
  overflow: hidden;
  color: #000;
  font-size: 14px;
  font-weight: 500;
  margin-left: 5px;
  margin-right: 5px;
  margin-bottom: 5px;
`;

const InputText = styled.TextInput`
  height: 100%;
  font-size: 14px;
  flex: 1;
`;

const StatusView = styled.View`
  width: 20px;
  height: 20px;
`;

const styles = StyleSheet.create({
  card: {
    justifyContent: 'center',
    height: 56,
    margin: 5,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#fff',
    overflow: 'visible',
  },
});

interface IPropsSvgStatus {
  status: boolean;
}
