import React from 'react';
import Svg, {Path} from 'react-native-svg';

const BottomTriangleIcon = ({width = 13, height = 13, color = 'black'}) => (
  <Svg width={width} height={height} viewBox="0 0 13 13" fill="none">
    <Path d="M6.5 9L0.870835 0.75L12.1292 0.750001L6.5 9Z" fill="#D9D9D9" />
  </Svg>
);

export default BottomTriangleIcon;
