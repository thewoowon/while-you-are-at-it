import React from 'react';
import Svg, {Path, Mask, Circle, G} from 'react-native-svg';

const ProfileIcon = ({width = 54, height = 54, color = 'black'}) => (
  <Svg width={width} height={height} viewBox="0 0 54 54" fill="none">
    <Circle cx="27" cy="27" r="27" fill="#E6EAED" />
    <Mask
      id="mask0_0_1"
      style={{
        maskType: 'alpha',
      }}
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="54"
      height="54">
      <Circle cx="27" cy="27" r="27" fill="#F6F8F9" />
    </Mask>
    <G mask="url(#mask0_0_1)">
      <Mask id="path-3-inside-1_0_1" fill="white">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M33.565 35.0466C36.8379 32.9035 39 29.2042 39 25C39 18.3726 33.6274 13 27 13C20.3726 13 15 18.3726 15 25C15 29.2042 17.1621 32.9035 20.435 35.0466C12.0522 37.803 6 45.6947 6 55C6 66.598 15.402 76 27 76C38.598 76 48 66.598 48 55C48 45.6947 41.9478 37.803 33.565 35.0466Z"
        />
      </Mask>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M33.565 35.0466C36.8379 32.9035 39 29.2042 39 25C39 18.3726 33.6274 13 27 13C20.3726 13 15 18.3726 15 25C15 29.2042 17.1621 32.9035 20.435 35.0466C12.0522 37.803 6 45.6947 6 55C6 66.598 15.402 76 27 76C38.598 76 48 66.598 48 55C48 45.6947 41.9478 37.803 33.565 35.0466Z"
        fill="white"
      />
      <Path
        d="M33.565 35.0466L33.0172 34.21L31.2796 35.3477L33.2526 35.9965L33.565 35.0466ZM20.435 35.0466L20.7474 35.9965L22.7204 35.3477L20.9828 34.21L20.435 35.0466ZM38 25C38 28.8529 36.0199 32.2438 33.0172 34.21L34.1128 35.8832C37.6559 33.5632 40 29.5556 40 25H38ZM27 14C33.0751 14 38 18.9249 38 25H40C40 17.8203 34.1797 12 27 12V14ZM16 25C16 18.9249 20.9249 14 27 14V12C19.8203 12 14 17.8203 14 25H16ZM20.9828 34.21C17.9801 32.2438 16 28.8529 16 25H14C14 29.5556 16.3441 33.5632 19.8872 35.8832L20.9828 34.21ZM20.1226 34.0966C11.3417 36.984 5 45.2501 5 55H7C7 46.1394 12.7627 38.6221 20.7474 35.9965L20.1226 34.0966ZM5 55C5 67.1503 14.8497 77 27 77V75C15.9543 75 7 66.0457 7 55H5ZM27 77C39.1503 77 49 67.1503 49 55H47C47 66.0457 38.0457 75 27 75V77ZM49 55C49 45.2501 42.6583 36.984 33.8774 34.0966L33.2526 35.9965C41.2373 38.6221 47 46.1394 47 55H49Z"
        fill="white"
        mask="url(#path-3-inside-1_0_1)"
      />
    </G>
    <Circle cx="24" cy="23" r="1" fill="#6E7881" />
    <Circle cx="30" cy="23" r="1" fill="#6E7881" />
    <Path
      d="M30 26C30 27.6569 28.6569 29 27 29C25.3431 29 24 27.6569 24 26"
      stroke="#6E7881"
    />
  </Svg>
);

export default ProfileIcon;