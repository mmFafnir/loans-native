import {FC} from 'react';
import {Path, Svg} from 'react-native-svg';

interface IPropsSvgStatus {
  status: boolean;
}

export const SvgStatus: FC<IPropsSvgStatus> = ({status}) => {
  if (status)
    return (
      <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <Path
          d="M16.6668 5L7.50016 14.1667L3.3335 10"
          stroke="#78E75A"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </Svg>
    );
  return (
    <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <Path
        d="M15 5L5 15"
        stroke="#FF3A44"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M5 5L15 15"
        stroke="#FF3A44"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
