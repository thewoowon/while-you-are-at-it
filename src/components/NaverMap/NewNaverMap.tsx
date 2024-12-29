import {
  NaverMapView,
  Region,
  NaverMapMarkerOverlay,
  MapType,
  Camera,
  NaverMapViewRef,
} from '@mj-studio/react-native-naver-map';
import React, {useEffect, useRef} from 'react';
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
import {Bounce} from '../Bounce';

type NewNaverMapProps = {
  openBottomSheet: () => void;
  getCurrentLocation: () => void;
  currentLocation: {
    latitude: number;
    longitude: number;
  } | null;
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
};

const ADDRESS_DATA = [
  {
    address: '서울특별시 종로구 종로 139-1, 주얼리타운 ',
    latitude: 37.5707538249968,
    longitude: 126.993161458905,
  },
  {
    address: '서울 종로구 돈화문로10가길 23, 새하얀 도금',
    latitude: 37.5734277517211,
    longitude: 126.992400619828,
  },
  {
    address: '봉익동 18-3번지 1층 종로구 서울특별시 KR, 호로록 분식',
    latitude: 37.5725131542701,
    longitude: 126.992440106076,
  },
  {
    address: '서울특별시 종로구 돈화문로 35-1 2층, 진1926',
    latitude: 37.5716841832285,
    longitude: 126.991617354163,
  },
  {
    address: '서울특별시 종로구 돈화문로6가길 29, 아림주물',
    latitude: 37.5720293026915,
    longitude: 126.992175723415,
  },
  {
    address: '서울 종로구 종로3가 28, 대림주얼리',
    latitude: 37.5707429078644,
    longitude: 126.992905749012,
  },
  {
    address: '서울 종로구 종로3가 28',
    latitude: 37.5707429078644,
    longitude: 126.992905749012,
  },
  {
    address: '서울특별시 종로구 돈화문로9길 17, 닭한마리',
    latitude: 37.5716318667707,
    longitude: 126.990827352272,
  },
  {
    address: '서울특별시 종로구 돈화문로20길 17, 장안성',
    latitude: 37.5711516142842,
    longitude: 126.991749628086,
  },
];

const NewNaverMap = ({
  openBottomSheet,
  getCurrentLocation,
  currentLocation,
  isLoading,
  setIsLoading,
}: NewNaverMapProps) => {
  const jongloRegion: Region = {
    latitude: 37.57156058453199,
    longitude: 126.99187240251595,
    latitudeDelta: 0.38,
    longitudeDelta: 0.8,
  };

  const ref = useRef<NaverMapViewRef>(null);
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

  useEffect(() => {
    requestLocationPermission();
  }, []);

  useEffect(() => {
    if (currentLocation) {
      console.log('currentLocation:', currentLocation);
      // ref.current?.setLocationTrackingMode('Follow');
      ref.current?.animateCameraTo({
        latitude: jongloRegion.latitude,
        longitude: jongloRegion.longitude,
        zoom: 16.5,
      });
    }
  }, [currentLocation]);

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
          {ADDRESS_DATA.map((address, index) => (
            <NaverMapMarkerOverlay
              key={index}
              latitude={address.latitude}
              longitude={address.longitude}
              anchor={{x: 0.5, y: 1}}
              width={35}
              height={38}
              // caption={{
              //   text: address.address,
              //   textSize: 10,
              //   color: 'black',
              //   haloColor: 'white',
              // }}
              onTap={() => openBottomSheet()}
              children={
                <Pressable style={styles.deliveryMarker}>
                  <DeliveryMarkerIcon />
                </Pressable>
              }
            />
          ))}
          {jongloRegion && (
            <NaverMapMarkerOverlay
              latitude={jongloRegion.latitude}
              longitude={jongloRegion.longitude}
              anchor={{x: 0.5, y: 1}}
              width={35}
              height={38}
              children={<Bounce />}
              caption={{
                text: '현재 위치',
                textSize: 18,
                color: 'black',
                haloColor: 'white',
              }}
            />
          )}
          {/* <NaverMapMarkerOverlay
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
          /> */}

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
