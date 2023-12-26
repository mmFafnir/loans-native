import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList, StylePageViewLight} from '../../App';
import GetForm from '../module/GetForm/GetForm';
import {Provider} from 'react-native-paper';
import {StyleSheet} from 'react-native';
import {memo} from 'react';
import useIsReady from '../hooks/useIsReady';
import LoadingScreen from '../components/UI/Loading/LoadingScreen';

export type FormScreenProp = NativeStackNavigationProp<
  RootStackParamList,
  'FormPage'
>;

const FormScreen = (): JSX.Element => {
  const isReady = useIsReady();

  return (
    <>
      <LoadingScreen isReady={isReady} />
      {isReady && (
        <Provider>
          <StylePageViewLight style={styles.page}>
            <GetForm />
          </StylePageViewLight>
        </Provider>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  page: {
    paddingLeft: 10,
    flex: 1,
    paddingRight: 10,
  },
});

export default memo(FormScreen);
