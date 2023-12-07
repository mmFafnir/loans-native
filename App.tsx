/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Logo from './src/components/UI/Logo';
import styled from 'styled-components/native';
import MainScreen from './src/screens/MainScreen';
import Main from './src/Main';
import FormScreen from './src/screens/FormScreen';
import Header from './src/components/Header';
import {store} from './src/store';
import {Provider} from 'react-redux';
import TabsHeader from './src/components/TabsHeader';
import StatusScreen from './src/screens/StatusScreen';
import LoadingScreen from './src/screens/LoadingScreen';

export type RootStackParamList = {
  LoadingPage: undefined;
  FirstPage: undefined;
  MainPage: undefined;
  FormPage: undefined;
  StatusPage: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = (): JSX.Element => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="LoadingPage">
          <Stack.Screen
            name={'LoadingPage'}
            component={LoadingScreen}
            options={{
              header: () => <></>,
            }}
          />
          <Stack.Screen
            name={'FirstPage'}
            component={MainScreen}
            options={{
              headerBackVisible: false,
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
            }}
          />

          <Stack.Screen
            name={'FormPage'}
            component={FormScreen}
            options={{
              header: ({navigation}) => <Header navigation={navigation} />,
            }}
          />

          <Stack.Screen
            name={'StatusPage'}
            component={StatusScreen}
            options={{
              header: ({navigation}) => <Header />,
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
