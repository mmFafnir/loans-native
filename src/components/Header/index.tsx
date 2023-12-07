import React, {FC, useEffect, useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {G, Path, Svg} from 'react-native-svg';
import styled from 'styled-components/native';
import Logo from '../UI/Logo';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Card, IconButton} from 'react-native-paper';
import {MainScreenProp} from '../../screens/MainScreen';

interface IProps {
  navigation?:
    | BottomTabNavigationProp<ParamListBase>
    | NativeStackNavigationProp<ParamListBase>;
}

const Header: FC<IProps> = ({navigation}) => {
  const customNavigate = useNavigation<MainScreenProp>();
  const goBack = () => navigation?.goBack();
  const goMain = () => customNavigate.navigate('MainPage');

  return (
    <Card
      style={styles.card}
      mode={
        customNavigate.getState().routeNames[
          customNavigate.getState().index
        ] === 'FormPage'
          ? 'elevated'
          : 'contained'
      }>
      <HeaderWrapper>
        {navigation && (
          <View style={styles.wrapper}>
            <IconButton
              icon={() => (
                <Svg height={20} width={20} viewBox="20 20 448 512">
                  <Path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
                </Svg>
              )}
              size={20}
              onPress={goBack}
            />
          </View>
        )}
        <LogoView>
          <Pressable onPress={goMain}>
            <Logo />
          </Pressable>
        </LogoView>
      </HeaderWrapper>
    </Card>
  );
};

export default Header;

const HeaderWrapper = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  padding-left: 5px;
  height: 52px;
  position: relative;
`;

const LogoView = styled.View`
  position: absolute;
  align-self: 'center';
`;

const styles = StyleSheet.create({
  wrapper: {
    marginRight: 'auto',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 0,
  },
});
