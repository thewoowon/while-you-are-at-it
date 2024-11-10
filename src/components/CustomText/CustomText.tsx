import React from 'react';
import {Text, StyleProp, TextStyle} from 'react-native';

type CustomTextProps = {
  style?: StyleProp<TextStyle>;
};

// type SectionProps = PropsWithChildren<{
//     title: string;
//   }>;

export default function CustomText(props: CustomTextProps) {
  return (
    <Text
      {...props}
      style={[props.style, {fontFamily: 'Pretendard-Regular'}]}
    />
  );
}
