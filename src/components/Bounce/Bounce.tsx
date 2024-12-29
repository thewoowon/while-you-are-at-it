import React, {useEffect, useRef} from 'react';
import {Animated, View, StyleSheet, Easing} from 'react-native';

type BounceProps = {
  width?: number;
  height?: number;
};

const Bounce = ({width = 24, height = 24}: BounceProps) => {
  const scale1 = useRef(new Animated.Value(1)).current;
  const scale2 = useRef(new Animated.Value(1)).current;

  const createBounceAnimation = (
    animatedValue: Animated.Value,
    delay: number,
  ) => {
    return Animated.loop(
      Animated.sequence([
        Animated.timing(animatedValue, {
          toValue: 1.4, // 살짝 커짐
          duration: 800,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
          delay,
        }),
        Animated.timing(animatedValue, {
          toValue: 1, // 기본 크기로 돌아옴
          duration: 800,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
      ]),
    );
  };

  useEffect(() => {
    createBounceAnimation(scale1, 0).start(); // 첫 번째 애니메이션
    createBounceAnimation(scale2, 400).start(); // 두 번째 애니메이션 (딜레이)
  }, [scale1, scale2]);

  return (
    <View style={[styles.spinner, {width, height}]}>
      <Animated.View
        style={[
          styles.doubleBounce,
          {
            transform: [{scale: scale1}],
            backgroundColor: '#748fee',
          },
        ]}
      />
      <Animated.View
        style={[
          styles.doubleBounce,
          {
            transform: [{scale: scale2}],
            backgroundColor: '#a0b3f3',
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  spinner: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  doubleBounce: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: 9999, // 완벽한 원
  },
});

export default Bounce;
