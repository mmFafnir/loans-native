import React, {FC, useState} from 'react';
import {Pressable, StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import {Button, Card, Modal, Portal} from 'react-native-paper';
import styled from 'styled-components/native';
import {EnumStatusInput} from '../../../types/Enums';
import {SvgStatus} from '../SVG/Menu/SvgStatus';

interface IProps {
  defaultValue?: number;
  status?: EnumStatusInput;
  label: string;
  onChange: (value: number) => void;
  contentStyles?: StyleProp<ViewStyle>;
}

const InputSelect: FC<IProps> = ({
  defaultValue = 100,
  status,
  label,
  onChange,
  contentStyles = {},
}) => {
  const [value, setValue] = useState<number>(defaultValue);
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const changeValue = (newValue: number) => {
    setValue(newValue);
    onChange(newValue);
    hideModal();
  };

  return (
    <View style={[{marginBottom: 20}, contentStyles]}>
      <LabelText>{label}</LabelText>
      <Pressable onPress={showModal}>
        <Card
          mode="elevated"
          elevation={2}
          contentStyle={{
            flexDirection: 'row',
            alignItems: 'center',
          }}
          style={styles.card}>
          <InputText>{value === 1001 ? '$1000-2500' : `${value}$`}</InputText>
          {status && (
            <StatusView>
              <SvgStatus status={status === EnumStatusInput.SUCCESS} />
            </StatusView>
          )}
        </Card>
      </Pressable>
      <Portal>
        <Modal visible={visible} onDismiss={hideModal}>
          <ModalView>
            <ModalLabel>{label}</ModalLabel>

            {new Array(11).fill(null).map((_, index) => (
              <Button
                key={index}
                mode="text"
                rippleColor={'#73a7fc37'}
                style={styles.button}
                contentStyle={{
                  justifyContent: 'flex-start',
                  backgroundColor:
                    value === (index + 1) * 100 ? '#73a7fc37' : 'transparent',
                }}
                onPress={() =>
                  changeValue(index == 10 ? 1001 : (index + 1) * 100)
                }>
                <SelectText>
                  {index == 10 ? '$1000-2500' : `${index + 1}00$`}
                </SelectText>
              </Button>
            ))}
          </ModalView>
        </Modal>
      </Portal>
    </View>
  );
};

export default InputSelect;

const LabelText = styled.Text`
  overflow: hidden;
  color: #000;
  font-size: 14px;
  font-weight: 500;
  margin-left: 5px;
  margin-right: 5px;
  margin-bottom: 5px;
`;

const ModalLabel = styled.Text`
  font-size: 16px;
  color: #000;
  margin: 0px 10px;
  margin-bottom: 10px;
  font-weight: 600;
`;

const InputText = styled.Text`
  height: 100%;
  font-size: 14px;
  flex: 1;
  color: #000;
`;

const StatusView = styled.View`
  width: 20px;
  height: 20px;
`;

const ModalView = styled.View`
  background-color: #fff;
  margin-left: 10px;
  margin-right: 10px;
  padding: 10px 0px;
  border-radius: 8px;
`;

const SelectText = styled.Text`
  padding: 0px 20px;
  text-align: left;
  color: #000;
  font-size: 14px;
  font-weight: 500;
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

  button: {
    borderRadius: 0,
  },
});

interface IPropsSvgStatus {
  status: boolean;
}
