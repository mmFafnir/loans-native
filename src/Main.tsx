import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import Header from './components/Header';
import {EnumScreen} from './types/Enums';
import HomeIcon from './components/UI/SVG/Menu/HomeIcon';
import MenuIcon from './components/UI/SVG/Menu';
import LoansScreen from './screens/LoansScreen';
import LoansIcon from './components/UI/SVG/Menu/LoansIcon';
import BlogScreen from './screens/BlogScreen';
import BlogIcon from './components/UI/SVG/Menu/BlogIcon';
import FaqScreen from './screens/FaqScreen';
import FaqIcon from './components/UI/SVG/Menu/FaqIcon';
import {BottomNavigation} from 'react-native-paper';
import {useTypeSelector} from './hooks/useTypeSelector';

export type RootTabParamList = {
  Home: undefined;
  Loans: undefined;
  Blog: undefined;
  FAQ: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

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

//  <Tab.Navigator tabBar={props => <></>}>
//       <Tab.Group
//         screenOptions={{
//           tabBarLabelStyle: {color: 'red'},
//           headerShown: false,
//         }}>
//         <Tab.Screen
//           name={EnumScreen.HOME}
//           component={HomeScreen}
//           options={{
//             tabBarIcon: ({color, size, focused}) => {
//               return (
//                 <MenuIcon focus={focused}>
//                   <HomeIcon />
//                 </MenuIcon>
//               );
//             },
//           }}
//         />
//         <Tab.Screen
//           name={EnumScreen.FAQ}
//           component={FaqScreen}
//           options={{
//             tabBarIcon: ({color, size, focused}) => {
//               return (
//                 <MenuIcon focus={focused}>
//                   <FaqIcon />
//                 </MenuIcon>
//               );
//             },
//           }}
//         />
//       </Tab.Group>
//     </Tab.Navigator>
