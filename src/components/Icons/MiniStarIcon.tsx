import React from 'react';
import Svg, {Path} from 'react-native-svg';

const MiniStarIcon = ({width = 14, height = 13, color = 'black'}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 14 13" fill="none">
      <Path
        d="M6.08155 1.13274C6.42863 0.326777 7.57137 0.326779 7.91845 1.13274L8.92819 3.47746C9.07296 3.81363 9.38984 4.04385 9.7543 4.07765L12.2963 4.31342C13.17 4.39446 13.5232 5.48127 12.8639 6.06042L10.946 7.74529C10.671 7.98686 10.55 8.35937 10.6304 8.71644L11.1917 11.2069C11.3847 12.0629 10.4602 12.7346 9.70564 12.2866L7.51056 10.9832C7.19584 10.7963 6.80416 10.7963 6.48944 10.9832L4.29436 12.2866C3.53983 12.7346 2.61533 12.0629 2.80827 11.2069L3.36956 8.71644C3.45004 8.35937 3.329 7.98686 3.05402 7.74529L1.13609 6.06042C0.476825 5.48127 0.829953 4.39446 1.70372 4.31342L4.24571 4.07765C4.61016 4.04385 4.92704 3.81363 5.07181 3.47746L6.08155 1.13274Z"
        fill="#1CD7AE"
      />
    </Svg>
  );
};

export default MiniStarIcon;