import React from 'react';
import Svg, {Path, G, Defs, Rect, ClipPath} from 'react-native-svg';

const NaverIcon = ({width = 16, height = 16, color = 'black'}) => (
  <Svg width={width} height={height} viewBox="0 0 16 16" fill="none">
    <G clip-path="url(#clip0_449_5361)">
      <Path
        d="M10.8491 8.56267L4.91687 0H0V16H5.15088V7.436L11.0831 16H16V0H10.8491V8.56267Z"
        fill="white"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_449_5361">
        <Rect width="16" height="16" fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default NaverIcon;
