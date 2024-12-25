import {
  NaverMapView,
  Region,
  NaverMapMarkerOverlay,
  MapType,
  Camera,
} from '@mj-studio/react-native-naver-map';
import React, {useEffect, useRef} from 'react';
import {View, StyleSheet, Platform} from 'react-native';
import {
  PERMISSIONS,
  request,
  requestLocationAccuracy,
  requestMultiple,
} from 'react-native-permissions';

const NewNaverMap = () => {
  const jongloRegion: Region = {
    latitude: 37.57156058453199,
    longitude: 126.99187240251595,
    latitudeDelta: 0.38,
    longitudeDelta: 0.8,
  };

  const ref = useRef(null);
  const mapType: MapType = 'Basic';
  const indoor = false;
  const symbolScale = 1.1;
  const nightMode = true;
  const compass = false;
  const indoorLevelPicker = false;
  const scaleBar = false;
  const locationButton = false;
  const zoomControls = false;
  const initialCamera: Camera = {
    latitude: jongloRegion.latitude,
    longitude: jongloRegion.longitude,
    zoom: 16.5,
    tilt: 0,
    bearing: 0,
  };
  const extentBoundedInKorea = true;

  const formatJson = (json: any) => JSON.stringify(json, null, 2);

  const onInitialized = () => {
    console.log('Naver Map initialized');
  };

  const onCameraChanged = (args: any) => {
    console.log(`Camera Changed: ${formatJson(args)}`);
  };

  // useEffect(() => {
  //   if (Platform.OS === 'ios') {
  //     request(PERMISSIONS.IOS.LOCATION_ALWAYS).then(status => {
  //       console.log(`Location request status: ${status}`);
  //       if (status === 'granted') {
  //         requestLocationAccuracy({
  //           purposeKey: 'common-purpose', // replace your purposeKey of Info.plist
  //         })
  //           .then(accuracy => {
  //             console.log(`Location accuracy is: ${accuracy}`);
  //           })
  //           .catch(e => {
  //             console.error(`Location accuracy request has been failed: ${e}`);
  //           });
  //       }
  //     });
  //   }
  //   if (Platform.OS === 'android') {
  //     requestMultiple([
  //       PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
  //       PERMISSIONS.ANDROID.ACCESS_BACKGROUND_LOCATION,
  //     ])
  //       .then(status => {
  //         console.log(`Location request status: ${status}`);
  //       })
  //       .catch(e => {
  //         console.error(`Location request has been failed: ${e}`);
  //       });
  //   }
  // }, []);

  return (
    <View style={styles.container}>
      <NaverMapView
        ref={ref}
        style={{flex: 1}}
        mapType={mapType}
        initialRegion={jongloRegion}
        initialCamera={initialCamera}
        symbolScale={symbolScale}
        locale={'ko'}
        isIndoorEnabled={indoor}
        isNightModeEnabled={nightMode}
        isShowCompass={compass}
        isShowIndoorLevelPicker={indoorLevelPicker}
        isExtentBoundedInKorea={extentBoundedInKorea}
        isShowScaleBar={scaleBar}
        isShowLocationButton={locationButton}
        isShowZoomControls={zoomControls}
        maxZoom={18}
        minZoom={5}
        onInitialized={onInitialized}
        onCameraChanged={onCameraChanged}>
        <NaverMapMarkerOverlay
          latitude={37.57156058453199}
          longitude={126.99187240251595}
          onTap={() => console.log(1)}
          anchor={{x: 0.5, y: 1}}
          width={35}
          height={38}
          image={require('../../assets/images/delivery_marker.png')}
        />
      </NaverMapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default NewNaverMap;
