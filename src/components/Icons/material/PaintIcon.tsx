import React from 'react';
import Svg, {Path} from 'react-native-svg';

const Icon = ({width = 32, height = 32, color = 'black'}) => (
  <Svg width={width} height={height} viewBox="0 0 32 32" fill="none">
    <Path
      d="M5.1499 5.5C5.1499 4.191 5.1499 3.5372 5.4313 3.05C5.61561 2.73079 5.88069 2.46571 6.1999 2.2814C6.6871 2 7.3409 2 8.6499 2H18.4499C19.7589 2 20.4127 2 20.8999 2.2814C21.2191 2.46571 21.4842 2.73079 21.6685 3.05C21.9499 3.5372 21.9499 4.191 21.9499 5.5C21.9499 6.809 21.9499 7.4628 21.6685 7.95C21.4842 8.26921 21.2191 8.53429 20.8999 8.7186C20.4127 9 19.7589 9 18.4499 9H8.6499C7.3409 9 6.6871 9 6.1999 8.7186C5.88069 8.53429 5.61561 8.26921 5.4313 7.95C5.1499 7.4628 5.1499 6.809 5.1499 5.5ZM10.7499 21.6V27.2C10.7499 28.5202 10.7499 29.1796 11.1601 29.5898C11.5703 30 12.2297 30 13.5499 30C14.8701 30 15.5295 30 15.9397 29.5898C16.3499 29.1796 16.3499 28.5202 16.3499 27.2V21.6C16.3499 20.2798 16.3499 19.6204 15.9397 19.2102C15.5295 18.8 14.8701 18.8 13.5499 18.8C12.2297 18.8 11.5703 18.8 11.1601 19.2102C10.7499 19.6204 10.7499 20.2798 10.7499 21.6Z"
      fill="#FF7DDA"
    />
    <Path
      opacity="0.5"
      d="M23.4128 6.54997C24.0498 6.54997 24.4768 6.54997 24.8072 6.57237C25.1292 6.59337 25.2874 6.63117 25.391 6.67037C25.8432 6.84957 26.2002 7.20657 26.378 7.65877C26.42 7.76237 26.4564 7.92058 26.4774 8.24258C26.4998 8.57298 26.4998 8.99997 26.4998 9.63697C26.4998 10.8088 26.4858 11.1308 26.4004 11.3716C26.2543 11.7846 25.9586 12.1278 25.5716 12.3334C25.3462 12.4538 25.0298 12.5154 23.8706 12.6904L18.0984 13.5556C17.0162 13.718 16.109 13.8538 15.3908 14.0568C14.6306 14.2696 13.9572 14.5888 13.4322 15.1992C12.6202 16.1428 12.5306 17.3692 12.5068 18.7832V18.8112C12.8008 18.8 13.1438 18.8 13.5498 18.8C13.9628 18.8 14.31 18.8 14.6068 18.8126C14.632 17.3244 14.7706 16.8638 15.024 16.5698C15.178 16.392 15.4118 16.231 15.9592 16.0784C16.5346 15.916 17.3102 15.7984 18.475 15.6234L24.3494 14.7414C25.2594 14.6056 25.9706 14.5006 26.5572 14.1884C27.4087 13.7355 28.0592 12.9796 28.38 12.0702C28.6012 11.4444 28.6012 10.7262 28.5998 9.80638V9.60197C28.5998 9.00837 28.5998 8.51138 28.5732 8.10398C28.5573 7.68877 28.476 7.27868 28.3324 6.88878C28.139 6.39697 27.8464 5.95025 27.4728 5.57643C27.0993 5.20262 26.6527 4.90972 26.161 4.71598C25.7707 4.57225 25.3601 4.49099 24.9444 4.47517C24.4455 4.45123 23.9459 4.44236 23.4464 4.44858H21.9498V6.54857L23.4128 6.54997Z"
      fill="#FF7DDA"
    />
    <Path
      opacity="0.5"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.3999 5.50007C3.3999 5.2216 3.51053 4.95452 3.70744 4.75761C3.90435 4.5607 4.17143 4.45007 4.4499 4.45007H5.1499V6.55007H4.4499C4.17143 6.55007 3.90435 6.43945 3.70744 6.24254C3.51053 6.04562 3.3999 5.77855 3.3999 5.50007Z"
      fill="#FF7DDA"
    />
  </Svg>
);

export default Icon;