import React from 'react';
import Svg, {
  Path,
  G,
  Rect,
  Defs,
  Ellipse,
  Filter,
  FeBlend,
  FeFlood,
  FeColorMatrix,
  ClipPath,
  LinearGradient,
  FeOffset,
  FeGaussianBlur,
  FeComposite,
  Stop,
} from 'react-native-svg';

const LogoIcon = ({width = 28, height = 28, color = 'black'}) => (
  <Svg width={width} height={height} viewBox="0 0 28 28" fill="none">
    <G clip-path="url(#clip0_449_5351)">
      <Rect
        width="28"
        height="28"
        rx="5.72727"
        fill="url(#paint0_linear_449_5351)"
      />
      <G filter="url(#filter0_d_449_5351)">
        <Rect
          x="15.3672"
          y="3.39062"
          width="4.83984"
          height="32.7305"
          rx="2.41992"
          fill="url(#paint1_linear_449_5351)"
        />
      </G>
      <G filter="url(#filter1_d_449_5351)">
        <Rect
          x="4.8457"
          y="18.2883"
          width="9.34023"
          height="4.44087"
          transform="rotate(-62.2375 4.8457 18.2883)"
          fill="url(#paint2_linear_449_5351)"
        />
      </G>
      <Rect
        x="3.00781"
        y="8.47656"
        width="10.8008"
        height="4.62109"
        rx="2.31055"
        fill="white"
      />
      <G filter="url(#filter2_d_449_5351)">
        <Path
          d="M15.2578 8.61459C15.2578 8.53836 15.3196 8.47656 15.3958 8.47656H22.7637C24.0398 8.47656 25.0742 9.51103 25.0742 10.7871C25.0742 12.0632 24.0398 13.0977 22.7637 13.0977H15.3958C15.3196 13.0977 15.2578 13.0359 15.2578 12.9596V8.61459Z"
          fill="white"
        />
      </G>
      <G filter="url(#filter3_d_449_5351)">
        <Ellipse
          cx="17.6504"
          cy="10.8008"
          rx="3.24023"
          ry="3.19922"
          fill="white"
        />
      </G>
      <Ellipse
        cx="17.6777"
        cy="10.8418"
        rx="2.00977"
        ry="1.98242"
        fill="#005C48"
      />
      <Path
        d="M5.33795 22.407C5.32706 22.4111 5.31501 22.4048 5.31224 22.3935L3.72939 15.9296C3.72542 15.9133 3.74248 15.9 3.75728 15.9078L11.5648 20.0177C11.5796 20.0255 11.5782 20.0471 11.5626 20.053L5.33795 22.407Z"
        fill="white"
      />
    </G>
    <Defs>
      <Filter
        id="filter0_d_449_5351"
        x="15.274"
        y="3.32074"
        width="5.02621"
        height="32.9168"
        filterUnits="userSpaceOnUse">
        <FeFlood floodOpacity="0" result="BackgroundImageFix" />
        <FeColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <FeOffset dy="0.0232961" />
        <FeGaussianBlur stdDeviation="0.0465921" />
        <FeComposite in2="hardAlpha" operator="out" />
        <FeColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
        />
        <FeBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_449_5351"
        />
        <FeBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_449_5351"
          result="shape"
        />
      </Filter>
      <Filter
        id="filter1_d_449_5351"
        x="4.75252"
        y="9.95331"
        width="8.46664"
        height="10.5201"
        filterUnits="userSpaceOnUse">
        <FeFlood floodOpacity="0" result="BackgroundImageFix" />
        <FeColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <FeOffset dy="0.0232961" />
        <FeGaussianBlur stdDeviation="0.0465921" />
        <FeComposite in2="hardAlpha" operator="out" />
        <FeColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
        />
        <FeBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_449_5351"
        />
        <FeBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_449_5351"
          result="shape"
        />
      </Filter>
      <Filter
        id="filter2_d_449_5351"
        x="15.1646"
        y="8.40667"
        width="10.0028"
        height="4.80746"
        filterUnits="userSpaceOnUse">
        <FeFlood floodOpacity="0" result="BackgroundImageFix" />
        <FeColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <FeOffset dy="0.0232961" />
        <FeGaussianBlur stdDeviation="0.0465921" />
        <FeComposite in2="hardAlpha" operator="out" />
        <FeColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
        />
        <FeBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_449_5351"
        />
        <FeBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_449_5351"
          result="shape"
        />
      </Filter>
      <Filter
        id="filter3_d_449_5351"
        x="14.312"
        y="7.52794"
        width="6.67679"
        height="6.59476"
        filterUnits="userSpaceOnUse"
        color->
        <FeFlood floodOpacity="0" result="BackgroundImageFix" />
        <FeColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <FeOffset dy="0.0245399" />
        <FeGaussianBlur stdDeviation="0.0490799" />
        <FeComposite in2="hardAlpha" operator="out" />
        <FeColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
        />
        <FeBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_449_5351"
        />
        <FeBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_449_5351"
          result="shape"
        />
      </Filter>
      <LinearGradient
        id="paint0_linear_449_5351"
        x1="14"
        y1="5.54167"
        x2="14"
        y2="32.9583"
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#1CD7AE" />
        <Stop offset="1" stopColor="#02C298" />
      </LinearGradient>
      <LinearGradient
        id="paint1_linear_449_5351"
        x1="17.7871"
        y1="14.9827"
        x2="17.7871"
        y2="32.7117"
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#D2F7EF" />
        <Stop offset="1" stopColor="white" />
      </LinearGradient>
      <LinearGradient
        id="paint2_linear_449_5351"
        x1="12.5613"
        y1="20.4574"
        x2="5.77039"
        y2="19.9213"
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#D2F7EF" />
        <Stop offset="1" stopColor="white" />
      </LinearGradient>
      <ClipPath id="clip0_449_5351">
        <Rect width="28" height="28" rx="5.72727" fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default LogoIcon;
