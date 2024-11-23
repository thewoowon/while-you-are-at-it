import React from 'react';
import Svg, {Path} from 'react-native-svg';

const BigHeartIcon = ({width = 70, height = 70, color = 'black'}) => (
  <Svg width={width} height={height} viewBox="0 0 70 70" fill="none">
    <Path
      d="M49.5832 13.125C43.4582 13.125 38.0623 16.1875 34.9998 21C31.9373 16.1875 26.5415 13.125 20.4165 13.125C10.7915 13.125 2.9165 21 2.9165 30.625C2.9165 47.9792 34.9998 65.625 34.9998 65.625C34.9998 65.625 67.0832 48.125 67.0832 30.625C67.0832 21 59.2082 13.125 49.5832 13.125Z"
      fill="#1CD7AE"
    />
  </Svg>
);

export default BigHeartIcon;
