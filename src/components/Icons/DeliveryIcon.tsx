import React from 'react';
import Svg, {Path, Rect} from 'react-native-svg';

const DeliveryIcon = ({width = 24, height = 24, color = 'black'}) => (
  <Svg width={width} height={height} viewBox="0 0 25 24" fill="none">
    <Path
      opacity="0.25"
      d="M2.5 10.8889C2.5 6.69889 2.5 4.60333 3.80222 3.30222C5.10333 2 7.19889 2 11.3889 2H13.6111C17.8011 2 19.8967 2 21.1978 3.30222C22.5 4.60333 22.5 6.69889 22.5 10.8889V13.1111C22.5 17.3011 22.5 19.3967 21.1978 20.6978C19.8967 22 17.8011 22 13.6111 22H11.3889C7.19889 22 5.10333 22 3.80222 20.6978C2.5 19.3967 2.5 17.3011 2.5 13.1111V10.8889Z"
      fill={color}
    />
    <Rect x="7.5" y="8" width="2" height="1.25" rx="0.625" fill={color} />
    <Rect x="10.5" y="8" width="7" height="1.25" rx="0.625" fill={color} />
    <Rect x="10.5" y="11" width="7" height="1.25" rx="0.625" fill={color} />
    <Rect x="10.5" y="14" width="7" height="1.25" rx="0.625" fill={color} />
    <Rect x="7.5" y="11" width="2" height="1.25" rx="0.625" fill={color} />
    <Rect x="7.5" y="14" width="2" height="1.25" rx="0.625" fill={color} />
  </Svg>
);

export default DeliveryIcon;
