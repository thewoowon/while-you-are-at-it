import React from 'react';
import Svg, {Path} from 'react-native-svg';

const RefreshIcon = ({width = 24, height = 24, color = 'black'}) => (
  <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
    <Path
      d="M20 8.99992C20.2652 8.99992 20.5196 9.10528 20.7071 9.29281C20.8946 9.48035 21 9.7347 21 9.99992V10.9999C21 13.1217 20.1571 15.1565 18.6569 16.6568C17.1566 18.1571 15.1217 18.9999 13 18.9999H9.414L10.207 19.7929C10.3892 19.9815 10.49 20.2341 10.4877 20.4963C10.4854 20.7585 10.3802 21.0093 10.1948 21.1947C10.0094 21.3801 9.7586 21.4853 9.4964 21.4876C9.2342 21.4899 8.9816 21.3891 8.793 21.2069L6.297 18.7109C6.14223 18.5582 6.04147 18.3591 6.01 18.1439L6 17.9909C6.00197 17.7571 6.08583 17.5313 6.237 17.3529L6.293 17.2929L8.793 14.7929C8.9816 14.6108 9.2342 14.51 9.4964 14.5122C9.7586 14.5145 10.0094 14.6197 10.1948 14.8051C10.3802 14.9905 10.4854 15.2413 10.4877 15.5035C10.49 15.7657 10.3892 16.0183 10.207 16.2069L9.414 16.9999H13C14.5913 16.9999 16.1174 16.3678 17.2426 15.2426C18.3679 14.1173 19 12.5912 19 10.9999V9.99992C19 9.7347 19.1054 9.48035 19.2929 9.29281C19.4804 9.10528 19.7348 8.99992 20 8.99992ZM15.207 2.79292L17.707 5.29292C17.8945 5.48045 17.9998 5.73475 17.9998 5.99992C17.9998 6.26508 17.8945 6.51939 17.707 6.70692L15.207 9.20692C15.1148 9.30243 15.0044 9.37861 14.8824 9.43102C14.7604 9.48343 14.6292 9.51102 14.4964 9.51217C14.3636 9.51332 14.2319 9.48802 14.109 9.43774C13.9861 9.38746 13.8745 9.31321 13.7806 9.21931C13.6867 9.12542 13.6125 9.01377 13.5622 8.89087C13.5119 8.76798 13.4866 8.6363 13.4877 8.50352C13.4889 8.37074 13.5165 8.23952 13.5689 8.11751C13.6213 7.99551 13.6975 7.88517 13.793 7.79292L14.586 6.99992H11C9.4087 6.99992 7.88258 7.63206 6.75736 8.75728C5.63214 9.8825 5 11.4086 5 12.9999V13.9999C5 14.2651 4.89464 14.5195 4.70711 14.707C4.51957 14.8946 4.26522 14.9999 4 14.9999C3.73478 14.9999 3.48043 14.8946 3.29289 14.707C3.10536 14.5195 3 14.2651 3 13.9999V12.9999C3 10.8782 3.84285 8.84336 5.34315 7.34306C6.84344 5.84277 8.87827 4.99992 11 4.99992H14.586L13.793 4.20692C13.6108 4.01832 13.51 3.76571 13.5123 3.50352C13.5146 3.24132 13.6198 2.99051 13.8052 2.8051C13.9906 2.61969 14.2414 2.51452 14.5036 2.51224C14.7658 2.50997 15.0184 2.61076 15.207 2.79292Z"
      fill="#1B1B1B"
    />
  </Svg>
);

export default RefreshIcon;