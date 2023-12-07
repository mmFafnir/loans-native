import React, {FC, useState} from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {Modal, Portal} from 'react-native-paper';
import {Path, Rect, Svg} from 'react-native-svg';
import styled from 'styled-components/native';

interface IProps {
  title: string;
  img?: number;
  text?: string;
}
const QuestionMassage: FC<IProps> = ({title, img, text = ''}) => {
  const [visible, setVisible] = useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  return (
    <>
      <Pressable onPress={showModal}>
        <QuestionIconView>
          <Svg
            style={styles.svg}
            width="13"
            height="13"
            viewBox="0 0 13 13"
            fill="none">
            <Rect
              x="0.5"
              y="0.5"
              width="12"
              height="12"
              rx="6"
              stroke="#BEBEBE"
            />
            <Path
              d="M5.7517 8.01912V7.97897C5.75737 7.5529 5.81406 7.21383 5.92177 6.96176C6.02948 6.70969 6.18254 6.50558 6.38095 6.34943C6.57936 6.19328 6.81746 6.04939 7.09524 5.91778C7.26247 5.83748 7.4127 5.74267 7.54592 5.63337C7.67914 5.52183 7.78401 5.39356 7.86054 5.24857C7.93991 5.10357 7.97959 4.94296 7.97959 4.76673C7.97959 4.54812 7.9144 4.35851 7.78401 4.1979C7.65363 4.03728 7.47931 3.91348 7.26105 3.82648C7.0428 3.73948 6.80045 3.69598 6.53401 3.69598C6.30159 3.69598 6.07766 3.73391 5.86224 3.80975C5.64683 3.8856 5.46684 4.00494 5.32228 4.16778C5.17772 4.33062 5.0941 4.54366 5.07143 4.80688H4C4.02268 4.42766 4.14739 4.10309 4.37415 3.83317C4.60374 3.56326 4.90561 3.35692 5.27976 3.21415C5.65675 3.07138 6.07483 3 6.53401 3C7.03288 3 7.46655 3.07808 7.83503 3.23423C8.20635 3.39038 8.49263 3.60453 8.69388 3.87667C8.89796 4.14882 9 4.45889 9 4.80688C9 5.05226 8.95181 5.27422 8.85544 5.47275C8.7619 5.67129 8.62585 5.84863 8.44728 6.00478C8.27154 6.16093 8.05896 6.29924 7.80952 6.41969C7.56009 6.54238 7.36026 6.67177 7.21003 6.80784C7.05981 6.94168 6.95068 7.10118 6.88265 7.28633C6.81463 7.47148 6.77778 7.70236 6.77211 7.97897V8.01912H5.7517ZM6.29592 10C6.08617 10 5.90618 9.94089 5.75595 9.82266C5.60573 9.70443 5.53061 9.56278 5.53061 9.39771C5.53061 9.23263 5.60573 9.09098 5.75595 8.97275C5.90618 8.85452 6.08617 8.79541 6.29592 8.79541C6.50567 8.79541 6.68566 8.85452 6.83588 8.97275C6.98611 9.09098 7.06122 9.23263 7.06122 9.39771C7.06122 9.50701 7.02579 9.60739 6.95493 9.69885C6.8869 9.79031 6.79478 9.86393 6.67857 9.91969C6.56519 9.97323 6.43764 10 6.29592 10Z"
              fill="#BEBEBE"
            />
          </Svg>
        </QuestionIconView>
      </Pressable>
      <Portal>
        <Modal visible={visible} onDismiss={hideModal}>
          <ModalView>
            <QuestionTitle>{title}</QuestionTitle>
            {text && <QuestionText>{text}</QuestionText>}
            {img && <QuestionImage source={img} />}
          </ModalView>
        </Modal>
      </Portal>
    </>
  );
};

export default QuestionMassage;

const QuestionIconView = styled.View`
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border-radius: 20px;
  margin-right: 2px;
`;

const ModalView = styled.View`
  background-color: #fff;
  border-radius: 10px;
  margin: 20px 16px;
  padding: 20px 10px;
`;

const QuestionTitle = styled.Text`
  font-size: 16px;
  color: #000;
  font-weight: 500;
  margin-bottom: 10px;
`;

const QuestionText = styled.Text`
  font-size: 14px;
  color: #000;
  line-height: 20px;
`;

const QuestionImage = styled.Image`
  width: 100%;
  min-height: 200px;
  object-fit: contain;
`;

const styles = StyleSheet.create({
  svg: {
    transform: [{scale: 1.5}],
  },
});
