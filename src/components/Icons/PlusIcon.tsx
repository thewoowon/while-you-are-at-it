import React from 'react';
import Svg, {Path} from 'react-native-svg';

const PlusIcon = ({width = 24, height = 24, color = 'black'}) => (
  <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
    <Path
      d="M19 12.998H13V18.998H11V12.998H5V10.998H11V4.99805H13V10.998H19V12.998Z"
      fill="#8E979E"
    />
  </Svg>
);

export default PlusIcon;
