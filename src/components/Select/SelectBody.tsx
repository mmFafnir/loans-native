import React, {FC, useEffect, useRef, useState} from 'react';
import styled from 'styled-components/native';
import {Dimensions, StyleSheet, View} from 'react-native';
import Animated, {
  measure,
  runOnUI,
  useAnimatedRef,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

interface IProps {
  open: boolean;
}

const SelectBody: FC<IProps> = ({open}) => {
  const bodyRef = useAnimatedRef<Animated.View>();
  const height = useSharedValue(0);

  const animatedHeight = useAnimatedStyle(() => ({
    height: height.value,
  }));

  useEffect(() => {
    if (open) {
      runOnUI(() => {
        'worklet';
        height.value = withTiming(measure(bodyRef)!.height + 5);
      })();
    } else {
      height.value = withTiming(0);
    }
  }, [open]);

  return (
    <Body style={[{width: Dimensions.get('window').width}]}>
      <Animated.View style={[animatedHeight, styles.body]}>
        <Animated.View ref={bodyRef} style={styles.absolute}>
          <BodyWrapper style={styles.shadow}>
            <BodyText>
              A payday loan is a short-term, high-interest loan typically due on
              the borrower's next payday, often for small amounts. It involves a
              post-dated check or electronic withdrawal and is known for its
              high fees and easy accessibility. However, these loans have faced
              criticism for their high costs and potential to trap borrowers in
              a cycle of debt.
            </BodyText>
          </BodyWrapper>
        </Animated.View>
      </Animated.View>
    </Body>
  );
};

export default SelectBody;

const Body = styled.View`
  margin: 0 auto;
  padding-bottom: 8px;
`;

const BodyWrapper = styled.View`
  padding: 20px;
  margin: 0px 16px;
  border-radius: 8px;
  background-color: #fff;
  height: max-content;
`;

const BodyText = styled.Text`
  font-size: 14px;
  color: #000;
`;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  body: {
    position: 'relative',
    overflow: 'hidden',
  },
  absolute: {
    position: 'absolute',
    width: '100%',
    top: 0,
  },
});
