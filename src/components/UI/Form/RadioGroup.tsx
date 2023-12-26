import React, {FC} from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import {Card, RadioButton} from 'react-native-paper';
import styled from 'styled-components/native';
import ErrorMassage from './ErrorMassage';

type TypeItem = {
  label: string;
  value: string;
};

interface IProps {
  value: string;
  label: string;
  viewStyle?: StyleProp<ViewStyle>;
  errorMassage?: string;
  onChange: (value: string) => void;
  items: TypeItem[];
}

const RadioGroup: FC<IProps> = ({
  errorMassage,
  label,
  viewStyle = {},
  onChange,
  value,
  items,
}) => {
  return (
    <View style={[viewStyle, {marginBottom: 20}]}>
      <TitleView>
        <LabelText>{label}</LabelText>
        {errorMassage && <ErrorMassage>{errorMassage}</ErrorMassage>}
      </TitleView>
      <Card style={styles.card} elevation={3}>
        <RadioButton.Group
          onValueChange={value => onChange(value)}
          value={value}>
          {items.map(item => (
            <RadioButton.Item
              color="#73a7fc"
              style={styles.padding}
              labelStyle={{color: '#000'}}
              key={item.value}
              label={item.label}
              value={item.value}
            />
          ))}
        </RadioButton.Group>
      </Card>
    </View>
  );
};

const LabelText = styled.Text`
  overflow: hidden;
  color: #000;
  font-size: 14px;
  font-weight: 500;
  margin-left: 5px;
  margin-right: 5px;
  margin-bottom: 5px;
`;

const TitleView = styled.View`
  padding: 0px 5px;
`;

const styles = StyleSheet.create({
  card: {
    margin: 5,
    backgroundColor: '#fff',
    overflow: 'hidden',
  },
  padding: {
    paddingLeft: 20,
    paddingRight: 20,
  },
});

export default RadioGroup;
