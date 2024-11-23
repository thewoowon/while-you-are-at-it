import {useEffect, useState} from 'react';
import {Text, StyleSheet} from 'react-native';
import {Camera, useCameraDevice} from 'react-native-vision-camera';

const MyCamera = () => {
  const [hasPermission, setHasPermission] = useState(false);
  const device = useCameraDevice('back');
  useEffect(() => {
    (async () => {
      const status = await Camera.requestCameraPermission();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (device == null) return <Text>Loading...</Text>;
  if (!hasPermission) return <Text>Camera permission required</Text>;

  return <Camera style={styles.absoluteFill} device={device} isActive={true} />;
};

const styles = StyleSheet.create({
  absoluteFill: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export default MyCamera;
