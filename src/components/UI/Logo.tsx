import React, {FC} from 'react';
import {View} from 'react-native';
import LogoSVG from '../../assets/images/svg/LogoSvg';

const Logo: FC = (): JSX.Element => {
  return (
    <View>
      <LogoSVG />
    </View>
  );
};

export default Logo;
