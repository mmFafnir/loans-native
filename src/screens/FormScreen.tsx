import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList, StylePageViewLight} from '../../App';
import GetForm from '../module/GetForm/GetForm';
import {Provider} from 'react-native-paper';
import {StyleSheet} from 'react-native';

export type MainScreenProp = NativeStackNavigationProp<
  RootStackParamList,
  'FormPage'
>;

const FormScreen = (): JSX.Element => {
  return (
    <Provider>
      <StylePageViewLight style={styles.page}>
        <GetForm />
      </StylePageViewLight>
    </Provider>
  );
};

const styles = StyleSheet.create({
  page: {
    paddingLeft: 10,
    flex: 1,
    paddingRight: 10,
  },
});

export default FormScreen;
