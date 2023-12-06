import {FC} from 'react';
import {RootStackParamList, StylePageViewLight} from '../../App';
import {ScrollView, StyleSheet, Text} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import styled from 'styled-components/native';
import OlLi from '../components/UI/List/OlLi';

export type PostScreenProp = NativeStackNavigationProp<
  RootStackParamList,
  'PostPage'
>;

const PostScreen: FC = () => {
  return (
    <StylePageViewLight style={styles.page}>
      <ScrollView style={styles.scroll}>
        <TitleText>
          "Отличия банковских займов от кредитных карт: Какой выбрать?"
        </TitleText>
        <ImageView>
          <Image
            source={{
              uri: 'https://usacashlink.com/uploads/1700678674.jpg',
            }}></Image>
        </ImageView>
        <ContentView>
          <ContentText>
            Банковские займы и кредитные карты предоставляют разные способы
            доступа к дополнительным финансовым средствам, и выбор между ними
            зависит от ваших финансовых потребностей и личных предпочтений.
            Давайте расс мотрим основные отличия между этими двуми финансовыми
            инструментами.
          </ContentText>
          {new Array(4).fill(null).map((_, index) => (
            <>
              <OlLi key={index} number={index + 1}>
                Фиксированные сумма и срок: Банковский заем предоставляет вам
                фиксированную сумму, которую вы должны вернуть в течение
                определенного срока. Это подходит, если вам нужно конкретное
                количество денег на крупные покупки или проекты.
              </OlLi>
            </>
          ))}
        </ContentView>
      </ScrollView>
    </StylePageViewLight>
  );
};

export default PostScreen;

const TitleText = styled.Text`
  color: #000;
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 12px;
`;

const ImageView = styled.View`
  width: 100%;
  max-height: 200px;
  position: relative;
  border-radius: 20px;
  border: 1px solid #e5e5e5;
  overflow: hidden;
`;

const ContentView = styled.View`
  margin-top: 8px;
  padding-bottom: 20px;
`;

const ContentText = styled.Text`
  color: #000;
  font-size: 12px;
  line-height: 16.8px;
`;

const Image = styled.Image`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const styles = StyleSheet.create({
  page: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 0,
    marginRight: 0,
  },
  scroll: {
    paddingRight: 16,
  },
});
