import {FC, useEffect, useState} from 'react';
import {StyleSheet, Linking} from 'react-native';
import {Card} from 'react-native-paper';
import Animated, {useAnimatedStyle, withSpring} from 'react-native-reanimated';
import {Path, Svg} from 'react-native-svg';
import styled from 'styled-components/native';

interface IProps {
  label?: string;
  defaultValue?: boolean;
  setValue: (value: boolean) => void;
}

const InputCheckbox: FC<IProps> = ({
  label = '',
  defaultValue = false,
  setValue,
}) => {
  const [checked, setChecked] = useState<boolean>(defaultValue);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: withSpring(checked ? 1 : 0, {
      duration: 300,
    }),
  }));

  useEffect(() => {
    setValue(checked);
  }, [checked]);
  return (
    <CheckboxView>
      <Card
        style={styles.card}
        elevation={1}
        onPress={() => setChecked(prev => !prev)}>
        <Animated.View style={animatedStyle}>
          <CheckboxIcon>
            <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <Path
                d="M16.6668 5L7.50016 14.1667L3.3335 10"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </Svg>
          </CheckboxIcon>
        </Animated.View>
      </Card>
      <LabelText
        onPress={() =>
          Linking.openURL('https://usacashlink.com/privacy-policy')
        }>
        {label}
      </LabelText>
    </CheckboxView>
  );
};

const CheckboxView = styled.View`
  flex-direction: row;
  align-items: center;
`;

const CheckboxIcon = styled.View`
  height: 23px;
  width: 23px;
  flex: 1;
  border-radius: 4px;
  background-color: #72d561;
  justify-content: center;
  align-items: center;
`;

const LabelText = styled.Text`
  color: #000;
  font-size: 14px;
  margin-left: 13px;
  text-decoration: underline;
`;

export default InputCheckbox;

const styles = StyleSheet.create({
  card: {
    height: 23,
    // width: 25,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
  },
});
