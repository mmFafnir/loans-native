import React, {FC} from 'react';
import {ScrollView, Text, View} from 'react-native';
import {StylePageViewLight} from '../../App';
import styled from 'styled-components/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import PostCard from '../components/Cards/PostCard';
import {RootTabParamList} from '../Main';

export type BlogScreenProp = NativeStackNavigationProp<
  RootTabParamList,
  'Blog'
>;

const data = [
  {
    title: '',
    data: new Array(21).fill(null),
  },
];

const BlogScreen: FC = () => {
  return (
    <StylePageViewLight style={{paddingRight: 0}}>
      <ScrollView>
        <BlogList>
          {data[0].data.map((item, index) => (
            <PostCard key={index} />
          ))}
        </BlogList>
      </ScrollView>
    </StylePageViewLight>
  );
};

const BlogList = styled.View`
  padding-top: 10px;
  padding-bottom: 10px;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export default BlogScreen;
