import {useNavigation} from '@react-navigation/native';
import {FC} from 'react';
import {Dimensions, Pressable} from 'react-native';
import styled from 'styled-components/native';
import {PostScreenProp} from '../../screens/PostScreen';

const PostCard: FC = () => {
  const navigation = useNavigation<PostScreenProp>();

  const goPostScreen = () => navigation.navigate('PostPage');

  return (
    <CartView style={{flexBasis: (Dimensions.get('window').width - 48) / 2}}>
      <Pressable onPress={goPostScreen}>
        <CardImgView>
          <CardImg source={require('../../assets/images/post.png')} />
        </CardImgView>
        <CardTitle>
          "Отличия банковских займов от кредитных карт: Какой выбрать?"
        </CardTitle>
        <CardText style={{lineHeight: 14}}>
          Банковские займы и кредитные карты предоставляют разные способы
          доступа к дополнительным финансовым средствам
        </CardText>
      </Pressable>
    </CartView>
  );
};

export default PostCard;

const CartView = styled.View`
  flex: 0;
  padding: 8px;
  border-radius: 14px;
  border: 0.9px solid #e5e5e5;
  overflow: hidden;
  margin-bottom: 16px;
  margin-right: 16px;
`;

const CardImgView = styled.View`
  height: 110px;
  border: 1px solid #e5e5e5;
  margin-bottom: 10px;
  border-radius: 20px;
  overflow: hidden;
`;
const CardImg = styled.Image`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const CardTitle = styled.Text`
  font-size: 12px;
  font-weight: 600;
  color: #000;
  margin-bottom: 5px;
`;

const CardText = styled.Text`
  font-size: 9px;
  color: #000;
`;
