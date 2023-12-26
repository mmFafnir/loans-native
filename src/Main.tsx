import React, {useEffect} from 'react';
import HomeScreen from './screens/HomeScreen';
import FaqScreen from './screens/FaqScreen';
import {BottomNavigation} from 'react-native-paper';
import {useTypeSelector} from './hooks/useTypeSelector';
import {useNavigation} from '@react-navigation/native';
import {MainScreenProp} from './screens/MainScreen';
import {RootStackParamList} from '../App';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useTypeDispatch} from './hooks/useTypeDispatch';
import {setScreen} from './store/Slices/tabSlice';

export type HomeScreenProp = NativeStackNavigationProp<
  RootStackParamList,
  'FirstPage'
>;
const Main = () => {
  const {tab, screen} = useTypeSelector(state => state.tab);
  const dispatch = useTypeDispatch();
  const navigation = useNavigation<HomeScreenProp>();
  const [routes] = React.useState([
    {key: 'home', title: 'Home'},
    {key: 'faq', title: 'Faq'},
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeScreen,
    faq: FaqScreen,
  });

  useEffect(() => {
    // dispatch(setScreen('MainPage'));
    navigation.navigate(screen);
  }, [screen]);
  return (
    <BottomNavigation
      navigationState={{index: tab, routes}}
      onIndexChange={() => {}}
      barStyle={{display: 'none'}}
      renderScene={renderScene}
    />
  );
};

export default Main;
