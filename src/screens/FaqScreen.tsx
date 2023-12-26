import React, {useState} from 'react';
import {ScrollView, View} from 'react-native';
import {StylePageViewLight} from '../../App';
import Select from '../components/Select';
import {faqData} from '../assets/data/faq';

const FaqScreen = () => {
  const [height, setHeight] = useState<number>(0);

  return (
    <StylePageViewLight
      onLayout={({nativeEvent}) => {
        const {height} = nativeEvent.layout;
        setHeight(height);
      }}
      style={{
        paddingLeft: 0,
        paddingRight: 0,
        paddingTop: 0,
      }}>
      <ScrollView>
        <View style={{minHeight: height, paddingTop: 20}}>
          {faqData.map(item => (
            <Select key={item.id} title={item.title} text={item.text} />
          ))}
        </View>
      </ScrollView>
    </StylePageViewLight>
  );
};

export default FaqScreen;
