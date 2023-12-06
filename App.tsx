/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Logo from './src/components/UI/Logo';
import styled from 'styled-components/native';
import MainScreen from './src/screens/MainScreen';
import Main from './src/Main';
import {Text, View} from 'react-native';
import FormScreen from './src/screens/FormScreen';
import Header from './src/components/Header';
import PostScreen from './src/screens/PostScreen';
import {store} from './src/store';
import {Provider} from 'react-redux';
import TabsHeader from './src/components/TabsHeader';

export type RootStackParamList = {
  FirstPage: undefined;
  MainPage: undefined;
  FormPage: undefined;
  PostPage: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = (): JSX.Element => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="FirstPage">
          <Stack.Screen
            name={'FirstPage'}
            component={MainScreen}
            options={{
              headerStyle: {backgroundColor: '#252526'},
              headerTitle: () => <Logo />,
              headerTitleAlign: 'center',
            }}
          />
          <Stack.Screen
            name={'MainPage'}
            component={Main}
            options={{
              header({navigation}) {
                return (
                  <>
                    <Header />
                    <TabsHeader />
                  </>
                );
              },
            }}></Stack.Screen>

          <Stack.Screen
            name={'FormPage'}
            component={FormScreen}
            options={{
              header: ({navigation}) => <Header navigation={navigation} />,
            }}
          />

          <Stack.Screen
            name={'PostPage'}
            component={PostScreen}
            options={{
              header: ({navigation}) => <Header navigation={navigation} />,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;

export const StylePageViewDark = styled.View`
  background-color: #252526;
  color: #fff;
`;
export const StylePageViewLight = styled.View`
  background-color: #fff;
  color: #fff;
  flex: 1;
  flex-direction: 'column';
  align-items: 'center';
  justify-content: 'center';
  padding-left: 16px;
  padding-right: 16px;
`;
