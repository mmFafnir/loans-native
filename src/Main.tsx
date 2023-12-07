import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import FaqScreen from './screens/FaqScreen';
import {BottomNavigation} from 'react-native-paper';
import {useTypeSelector} from './hooks/useTypeSelector';

export type RootTabParamList = {
  Home: undefined;
  Loans: undefined;
  Blog: undefined;
  FAQ: undefined;
};

const Main = () => {
  const {tab} = useTypeSelector(state => state.tab);

  const [routes] = React.useState([
    {key: 'home', title: 'Home'},
    {key: 'faq', title: 'Faq'},
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeScreen,
    faq: FaqScreen,
  });
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
