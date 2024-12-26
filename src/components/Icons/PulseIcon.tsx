import * as Animatable from 'react-native-animatable';
import React from 'react';
import {StyleSheet, View} from 'react-native';

const PulseIcon = () => {
  return (
    <Animatable.View
      animation="pulse"
      iterationCount="infinite"
      easing="ease-out"
      style={styles.pulseContainer}>
      <View style={styles.pulseCircle} />
    </Animatable.View>
  );
};

const styles = StyleSheet.create({
  pulseContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    width: 35,
    height: 35,
  },
  pulseCircle: {
    width: 35,
    height: 35,
    borderRadius: '50%',
    backgroundColor: 'rgba(0, 150, 255, 0.2)',
  },
});

export default PulseIcon;
