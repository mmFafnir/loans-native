import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList, StylePageViewDark} from '../../App';
import Slider from '../components/Slider';

export type MainScreenProp = NativeStackNavigationProp<
  RootStackParamList,
  'FirstPage'
>;

const MainScreen = (): JSX.Element => {
  return (
    <StylePageViewDark
      style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Slider />
    </StylePageViewDark>
  );
};

export default MainScreen;
