import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList, StylePageViewDark} from '../../App';
import Slider from '../components/Slider';
import LoadingFirst from '../components/UI/Loading/LoadingFirst';
import {useState} from 'react';

export type MainScreenProp = NativeStackNavigationProp<
  RootStackParamList,
  'FirstPage'
>;

const MainScreen = (): JSX.Element => {
  const [isConnected, setIsConnected] = useState<boolean | null>(null);

  return (
    <StylePageViewDark
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
      }}>
      {!isConnected && <LoadingFirst setConnected={setIsConnected} />}

      <Slider />
    </StylePageViewDark>
  );
};

export default MainScreen;
