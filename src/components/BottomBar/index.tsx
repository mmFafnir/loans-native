import React, {FC, useState} from 'react';
import {BottomNavigation, MD2DarkTheme} from 'react-native-paper';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {EnumScreen} from '../../types/Enums';
import {StyleSheet, Text, View} from 'react-native';
import styled from 'styled-components/native';

const BottomBar: FC<BottomTabBarProps> = ({
  state,
  insets,
  navigation,
  descriptors,
}) => {
  if (state.routeNames[state.index] === EnumScreen.MAIN) return <></>;
  return (
    <BottomNavigation.Bar
      navigationState={state}
      safeAreaInsets={insets}
      activeColor={'red'}
      style={styles.tabBar}
      onTabPress={({route, preventDefault}) => {
        const event = navigation.emit({
          type: 'tabPress',
          target: route.key,
          canPreventDefault: true,
        });

        if (event.defaultPrevented) {
          preventDefault();
        } else {
          navigation.navigate(route.name);
          // ...CommonActions.navigate(route.name, route.params),
          // target: state.key,
        }
      }}
      renderIcon={({route, focused, color}) => {
        const {options} = descriptors[route.key];

        if (options.tabBarIcon) {
          return options.tabBarIcon({focused, color, size: 24});
        }

        return null;
      }}
      renderLabel={({route}) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        return <TabText>{String(label)}</TabText>;
      }}
    />
  );
};

export default BottomBar;

const TabText = styled.Text`
  text-align: center;
  color: #73a7fc;
  color: #73a7fc;
  font-weight: 700;
`;

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#fff',
  },
});
