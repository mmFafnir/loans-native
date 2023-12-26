import {FC} from 'react';
import styled from 'styled-components/native';
import {useTypeSelector} from '../../hooks/useTypeSelector';

const SliderRangeValue: FC = () => {
  const {range} = useTypeSelector(state => state.range);

  return (
    <RangeInput>
      <RangeInputText>{range}$</RangeInputText>
    </RangeInput>
  );
};

export default SliderRangeValue;

const RangeInput = styled.View`
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 47px;
  border-radius: 10px;
  overflow: hidden;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  background-color: #fff;
`;

const RangeInputText = styled.Text`
  color: #47b882;
  text-align: center;
  font-size: 24px;
  font-weight: 700;
`;

const BackGroundShadow = styled.ImageBackground`
  width: 100%;
`;
