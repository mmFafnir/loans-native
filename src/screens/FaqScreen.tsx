import React from 'react';
import {ScrollView} from 'react-native';
import {StylePageViewLight} from '../../App';
import Select from '../components/Select';

const FaqScreen = () => {
  return (
    <StylePageViewLight
      style={{paddingLeft: 0, paddingRight: 0, paddingTop: 0}}>
      <ScrollView style={{paddingTop: 20}}>
        <Select />
        <Select />
        <Select />
        <Select />
        <Select />
      </ScrollView>
    </StylePageViewLight>
  );
};

export default FaqScreen;
