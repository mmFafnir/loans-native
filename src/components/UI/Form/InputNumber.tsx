import {FC, ReactNode} from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import {Card} from 'react-native-paper';
import styled from 'styled-components/native';
import {SvgStatus} from '../SVG/Menu/SvgStatus';
import ErrorMassage from './ErrorMassage';
import {
  TextInputMask,
  TextInputMaskOptionProp,
  TextInputMaskTypeProp,
} from 'react-native-masked-text';
import {validPhoneNumber} from '../../../assets/scripts/validNumbers';

interface IProps {
  defaultValue?: string;
  value: string;
  label: string;
  placeholder?: string;
  type: TextInputMaskTypeProp;
  validNumber?: boolean;
  options?: TextInputMaskOptionProp;
  viewStyle?: StyleProp<ViewStyle>;
  errorMassage?: string;
  onChange: (value: string) => void;
  questionMassage?: ReactNode;
}

const InputNumber: FC<IProps> = ({
  defaultValue = '',
  errorMassage,
  placeholder,
  label,
  viewStyle = {},
  onChange,
  options,
  value,
  validNumber = false,
  type,
  questionMassage = <></>,
}) => {
  // const [text, setText] = React.useState(defaultValue);

  return (
    <View style={[viewStyle, {marginBottom: 20}]}>
      <LabelHeader>
        <LabelText>{label}</LabelText>
        {questionMassage}
      </LabelHeader>
      {errorMassage ? (
        <ErrorMassage>{errorMassage}</ErrorMassage>
      ) : (
        validNumber &&
        !validPhoneNumber(value) && (
          <ErrorMassage>
            digits including area code must not start with 0 or 1 and 4 digit
            must be greater than or equal to 2
          </ErrorMassage>
        )
      )}
      <Card
        mode="elevated"
        elevation={2}
        contentStyle={{
          flexDirection: 'row',
          alignItems: 'center',
        }}
        style={styles.card}>
        <TextInputMask
          style={styles.input}
          type={type}
          keyboardType="numeric"
          options={options ? options : undefined}
          value={String(value)}
          placeholder={placeholder}
          onChangeText={onChange}
          defaultValue={defaultValue}
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

export default InputNumber;

const LabelHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-left: 5px;
  margin-right: 5px;
  margin-bottom: 5px;
`;

const LabelText = styled.Text`
  overflow: hidden;
  color: #000;
  font-size: 14px;
  font-weight: 500;
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
  input: {
    height: '100%',
    fontSize: 14,
    flex: 1,
  },
});
