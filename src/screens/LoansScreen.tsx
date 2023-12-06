import React from 'react';
import {StylePageViewLight} from '../../App';
import {ScrollView} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import LoanCard from '../components/Cards/LoanCard';
import styled from 'styled-components/native';
import {RootTabParamList} from '../Main';

export type LoansScreenProp = NativeStackNavigationProp<
  RootTabParamList,
  'Loans'
>;

const data = [
  {
    title: '',
    data: new Array(21).fill(null),
  },
];

const LoansScreen = () => {
  return (
    <StylePageViewLight style={{paddingRight: 0}}>
      <ScrollView>
        <LoansList>
          {data[0].data.map((item, index) => (
            <LoanCard key={index} />
          ))}
        </LoansList>
      </ScrollView>
    </StylePageViewLight>
  );
};

export default LoansScreen;

const LoansList = styled.View`
  padding-top: 10px;
  padding-bottom: 10px;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`;
