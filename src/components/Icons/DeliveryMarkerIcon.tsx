import React from 'react';
import Svg, {Path} from 'react-native-svg';

const DeliveryMarkerIcon = ({width = 22, height = 22, color = 'black'}) => (
  <Svg width={width} height={height} viewBox="0 0 22 22" fill="none">
    <Path
      d="M10.3627 4.08398C8.42069 4.08398 6.83175 5.67292 6.83175 7.61496C6.83175 9.55699 8.42069 11.1459 10.3627 11.1459C12.3048 11.1459 13.8937 9.55699 13.8937 7.61496C13.8937 5.67292 12.3048 4.08398 10.3627 4.08398ZM10.3627 12.9114C6.47866 12.9114 3.30078 14.5004 3.30078 16.4424V18.2079H11.6868C11.422 17.5017 11.2455 16.7955 11.2455 16.001C11.2455 14.9417 11.5103 13.9707 12.0399 12.9997C11.5103 12.9997 10.9806 12.9114 10.3627 12.9114Z"
      fill="white"
    />
    <Path
      d="M19.1909 16.4421H15.6599V18.2076L13.0117 15.5594L15.6599 12.9111V14.6766H19.1909V16.4421Z"
      fill="white"
    />
  </Svg>
);

export default DeliveryMarkerIcon;