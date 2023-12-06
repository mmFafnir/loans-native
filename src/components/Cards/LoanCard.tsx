import React from 'react';
import {Dimensions} from 'react-native';
import {Path, Svg} from 'react-native-svg';
import styled from 'styled-components/native';

const LoanCard = () => {
  return (
    <LoanView style={{flexBasis: (Dimensions.get('window').width - 48) / 2}}>
      <LoanSvg>
        <Svg width="64" height="85" viewBox="0 0 64 85" fill="none">
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M64 39C64 13.5948 43.405 -7 17.9999 -7C-7.40523 -7 -28 13.5949 -28 39C-28 64.4049 -7.40511 85 17.9999 85C43.4048 85.0001 64 64.4049 64 39ZM15.4582 17.834V8.96499C15.4582 7.6252 16.6015 6.52935 17.9999 6.52935C19.3985 6.52935 20.5418 7.62532 20.5418 8.96499V17.9141C27.3589 18.7045 33.2112 22.2387 33.7227 29.7956H24.8678L24.8417 29.6826C23.9009 25.5774 20.6832 24.9668 17.0449 24.9668C14.2789 24.9668 11.1154 26.1021 11.1154 29.3619C11.1154 29.8689 11.1701 30.3867 11.3873 30.8506C12.4845 33.1998 20.7696 34.745 23.014 35.2866C29.3825 36.824 35.116 39.5687 35.116 47.1694C35.116 55.7464 28.0751 59.5241 20.5418 60.162V69.0346C20.5418 70.3743 19.3985 71.4704 17.9999 71.4704C16.6013 71.4704 15.4582 70.3743 15.4582 69.0346V60.1234C7.87529 59.3446 1.47403 55.2142 0.883505 47.0222H9.73746L9.75749 47.1407C10.5484 51.7851 14.343 53.0328 18.5135 53.0328C21.6236 53.0328 26.193 52.1417 26.193 48.1861C26.193 39.8481 2.19334 45.2681 2.19334 30.0963C2.19321 22.4868 8.67759 18.4843 15.4582 17.834Z"
            fill="#FFBD00"
          />
        </Svg>
      </LoanSvg>
      <LoanText>Online Loan for Bad credit</LoanText>
    </LoanView>
  );
};

export default LoanCard;

const LoanView = styled.View`
  /* flex: 1; */
  justify-content: flex-end;
  min-height: 160px;
  border-radius: 20px;
  margin-bottom: 16px;
  padding: 18px 15px;
  margin-right: 16px;
  background-color: #fff3cf;
  position: relative;
  overflow: hidden;
`;

const LoanText = styled.Text`
  font-size: 14px;
  text-align: center;
  font-weight: 700;
`;

const LoanSvg = styled.View`
  position: absolute;
  top: 0;
  left: 0;
`;
