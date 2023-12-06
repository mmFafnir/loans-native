import React, {useEffect, useState} from 'react';
import {Animated, Pressable, StyleSheet, View} from 'react-native';
import {Button, Card} from 'react-native-paper';
import {Path, Svg} from 'react-native-svg';
import styled from 'styled-components/native';
import TabButton from './TabButton';
import {useTypeSelector} from '../../hooks/useTypeSelector';

const TabsHeader = () => {
  const {tab} = useTypeSelector(state => state.tab);
  const [colorFist, setColorFirst] = useState(new Animated.Value(1));
  const [colorSecond, setColorSecond] = useState(new Animated.Value(0));

  const backgroundColorFirst = colorFist.interpolate({
    inputRange: [0, 1],
    outputRange: ['#fff', '#73a7fc'],
  });

  const backgroundColorSecond = colorSecond.interpolate({
    inputRange: [0, 1],
    outputRange: ['#fff', '#73a7fc'],
  });

  useEffect(() => {
    Animated.timing(colorFist, {
      toValue: tab == 0 ? 1 : 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
    Animated.timing(colorSecond, {
      toValue: tab == 1 ? 1 : 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [tab]);

  const PathAnimated = Animated.createAnimatedComponent(Path);
  return (
    <TabsView>
      <TabButton
        label="GET LOAN"
        colorFirst={backgroundColorFirst}
        colorSecond={backgroundColorSecond}
        index={0}
      />
      <TabButton
        label="FAQ"
        colorFirst={backgroundColorSecond}
        colorSecond={backgroundColorFirst}
        style={{marginLeft: 10}}
        index={1}>
        <Svg
          style={styles.svg}
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="none">
          <PathAnimated
            d="M12.7499 20.65C13.2193 20.65 13.5999 20.0792 13.5999 19.375C13.5999 18.6708 13.2193 18.1 12.7499 18.1C12.2805 18.1 11.8999 18.6708 11.8999 19.375C11.8999 20.0792 12.2805 20.65 12.7499 20.65Z"
            fill={backgroundColorFirst}
          />
          <PathAnimated
            d="M12.75 0.25C5.70343 0.25 0 5.95249 0 13C0 20.0466 5.70249 25.75 12.75 25.75C19.7966 25.75 25.5 20.0475 25.5 13C25.5 5.95343 19.7975 0.25 12.75 0.25ZM12.75 23.7578C6.80447 23.7578 1.99219 18.9463 1.99219 13C1.99219 7.05447 6.80367 2.24219 12.75 2.24219C18.6955 2.24219 23.5078 7.05367 23.5078 13C23.5078 18.9455 18.6963 23.7578 12.75 23.7578Z"
            fill={backgroundColorFirst}
          />
          <PathAnimated
            d="M12.75 7.05C10.4066 7.05 8.5 8.79313 8.5 10.9357C8.5 11.4722 8.97568 11.9071 9.5625 11.9071C10.1493 11.9071 10.625 11.4722 10.625 10.9357C10.625 9.86443 11.5783 8.99286 12.75 8.99286C13.9217 8.99286 14.875 9.86443 14.875 10.9357C14.875 12.007 13.9217 12.8786 12.75 12.8786C12.1632 12.8786 11.6875 13.3135 11.6875 13.85V16.2786C11.6875 16.8151 12.1632 17.25 12.75 17.25C13.3368 17.25 13.8125 16.8151 13.8125 16.2786V14.6985C15.6435 14.2661 17 12.743 17 10.9357C17 8.79313 15.0935 7.05 12.75 7.05Z"
            fill={backgroundColorFirst}
          />
        </Svg>
      </TabButton>
    </TabsView>
  );
};

export default TabsHeader;

const TabsView = styled.View`
  padding-top: 20px;
  flex-direction: row;
  align-items: center;
  padding: 0px 15px;
  background-color: transparent;
`;

const styles = StyleSheet.create({
  button: {
    flex: 1,
  },
  svg: {
    marginLeft: 10,
  },
});
