import {
  NaverMapView,
  Region,
  NaverMapMarkerOverlay,
  MapType,
  Camera,
} from '@mj-studio/react-native-naver-map';
import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  StyleSheet,
  Platform,
  Alert,
  ActivityIndicator,
  Text,
  Pressable,
} from 'react-native';
import {
  RESULTS,
  PERMISSIONS,
  request,
  requestLocationAccuracy,
  requestMultiple,
} from 'react-native-permissions';
import Geolocation from 'react-native-geolocation-service';
import {DeliveryMarkerIcon, HelloMarkerIcon} from '../Icons';
import PulseIcon from '../Icons/PulseIcon';

const NewNaverMap = () => {
  const [currentLocation, setCurrentLocation] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);
  const [isLoading, setIsLoading] = useState(true);
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
    setIsLoading(false);
  };

  const onCameraChanged = (args: any) => {};

  const requestLocationPermission = async () => {
    try {
      if (Platform.OS === 'ios') {
        const status = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
        if (status === RESULTS.GRANTED) {
          await requestLocationAccuracy({purposeKey: 'common-purpose'});
          getCurrentLocation();
        } else {
          Alert.alert(
            '권한 필요',
            '위치 권한을 허용해야 지도를 사용할 수 있습니다.',
          );
        }
      } else if (Platform.OS === 'android') {
        const statuses = await requestMultiple([
          PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
          PERMISSIONS.ANDROID.ACCESS_COARSE_LOCATION,
        ]);
        if (
          statuses[PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION] ===
            RESULTS.GRANTED ||
          statuses[PERMISSIONS.ANDROID.ACCESS_COARSE_LOCATION] ===
            RESULTS.GRANTED
        ) {
          getCurrentLocation();
        } else {
          Alert.alert(
            '권한 필요',
            '위치 권한을 허용해야 지도를 사용할 수 있습니다.',
          );
        }
      }
    } catch (error) {
      console.error('권한 요청 오류:', error);
    }
  };

  const getCurrentLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        const {latitude, longitude} = position.coords;
        setCurrentLocation({latitude, longitude});
        setIsLoading(false);
        console.log('현재 위치:', latitude, longitude);
      },
      error => {
        console.error('위치 가져오기 실패:', error);
        Alert.alert('위치 오류', '현재 위치를 가져올 수 없습니다.');
        setIsLoading(false);
      },
      {
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 10000,
      },
    );
  };

  useEffect(() => {
    requestLocationPermission();
  }, []);

  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          position: 'relative',
        }}>
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
            children={
              <Pressable style={styles.deliveryMarker}>
                <DeliveryMarkerIcon />
              </Pressable>
            }
          />
          <NaverMapMarkerOverlay
            latitude={37.5711516142842}
            longitude={126.991749628086}
            onTap={() => console.log(1)}
            anchor={{x: 0.5, y: 1}}
            width={35}
            height={38}
            children={
              <Pressable style={styles.helloMarker}>
                <HelloMarkerIcon />
              </Pressable>
            }
          />
          <NaverMapMarkerOverlay
            latitude={37.5710194900321}
            longitude={126.992526739499}
            onTap={() => console.log(1)}
            anchor={{x: 0.5, y: 1}}
            width={35}
            height={38}
            children={
              <Pressable style={styles.helloMarker}>
                <PulseIcon />
              </Pressable>
            }
          />
          {/* 현재 위치 마커 */}
          {currentLocation && (
            <NaverMapMarkerOverlay
              latitude={currentLocation.latitude}
              longitude={currentLocation.longitude}
              anchor={{x: 0.5, y: 1}}
              width={35}
              height={38}
              image={require('../../assets/images/logo_main_1.png')}
            />
          )}
        </NaverMapView>
        {isLoading && (
          <View
            style={{
              flex: 1,
              width: '100%',
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#F9FAFB',
              position: 'absolute',
              zIndex: 10,
            }}>
            <ActivityIndicator size="small" color="#A9A9A9" />
          </View>
        )}
        {
          // 현재 위치 텍스트
          currentLocation && (
            <View
              style={{
                position: 'absolute',
                bottom: 10,
                right: 10,
                padding: 10,
                backgroundColor: 'white',
                borderRadius: 10,
                zIndex: 10,
              }}>
              <Text>{`현재 위치: ${currentLocation.latitude}, ${currentLocation.longitude}`}</Text>
            </View>
          )
        }
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
  },
  deliveryMarker: {
    width: 35,
    height: 35,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1CD7AE',
    borderRadius: '50%',
    overflow: 'hidden',
  },
  helloMarker: {
    width: 35,
    height: 35,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: '50%',
    overflow: 'hidden',
  },
});

export default NewNaverMap;
