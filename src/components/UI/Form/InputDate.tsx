import {FC, useEffect, useState} from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {Card, Modal, Portal} from 'react-native-paper';
import styled from 'styled-components/native';
import DateTimePicker, {DateType} from 'react-native-ui-datepicker';
import dayjs from 'dayjs';
import {isWeekend} from '../../../assets/scripts/date';
import ErrorMassage from './ErrorMassage';

interface IProps {
  defaultValue?: string;
  mode?: 'flat' | 'outlined';
  label: string;
  onChange: (value: string) => void;
  minDate?: string;
  maxDate?: string;
  validWeekend?: boolean;
}

const InputDate: FC<IProps> = ({
  defaultValue = '',
  mode = 'outlined',
  label,
  onChange,
  minDate,
  maxDate,
  validWeekend = false,
}) => {
  const [weekend, serWeekend] = useState<boolean>(
    isWeekend(defaultValue ? new Date(defaultValue) : new Date()),
  );
  const [currentValue, setCurrentValue] = useState<DateType>(
    defaultValue ? dayjs(defaultValue) : dayjs(),
  );

  const setValue = () => {
    if (validWeekend) {
      const d = new Date(dayjs(currentValue).format('YYYY-MM-DD'));
      serWeekend(isWeekend(d));
    }
    onChange(dayjs(currentValue).format('YYYY-MM-DD'));
  };
  const [visible, setVisible] = useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  useEffect(() => {
    setValue();
  }, [currentValue]);

  return (
    <View style={{marginBottom: 20}}>
      <LabelText>{label}</LabelText>
      {validWeekend && weekend && (
        <ErrorMassage>Payment is not possible on weekends</ErrorMassage>
      )}
      <Pressable onPress={showModal}>
        <Card
          mode="elevated"
          elevation={2}
          contentStyle={{
            flexDirection: 'row',
            alignItems: 'center',
          }}
          style={styles.card}>
          <InputText>{dayjs(currentValue).format('DD/MM/YYYY')}</InputText>
        </Card>
      </Pressable>
      <Portal>
        <Modal visible={visible} onDismiss={hideModal}>
          <ModalView>
            <DateTimePicker
              value={currentValue}
              onValueChange={setCurrentValue}
              minimumDate={minDate}
              maximumDate={maxDate}
            />
          </ModalView>
        </Modal>
      </Portal>
    </View>
  );
};

export default InputDate;

const LabelText = styled.Text`
  overflow: hidden;
  color: #000;
  font-size: 14px;
  font-weight: 500;
  margin-left: 5px;
  margin-right: 5px;
  margin-bottom: 5px;
`;

const InputText = styled.Text`
  height: 100%;
  font-size: 14px;
  flex: 1;
  color: #000;
`;

const ModalView = styled.View`
  background-color: #fff;
  margin-left: 20px;
  margin-right: 20px;
  padding: 10px;
  border-radius: 8px;
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
