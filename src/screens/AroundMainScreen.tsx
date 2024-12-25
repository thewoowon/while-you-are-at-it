import React, {useMemo, useRef, useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  Pressable,
} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import BottomSheet, {
  BottomSheetView,
  BottomSheetScrollView,
} from '@gorhom/bottom-sheet';
import {NewNaverMap} from '../components/NaverMap';
import {SearchIcon, RingIcon, GPSIcon} from '../components/Icons';
import {CONTENTS_DATA} from '../data';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  useAnimatedReaction,
} from 'react-native-reanimated';
import PassItem from '../components/PassItem';

const AroundMainScreen = ({navigation, route}: any) => {
  const [text, setText] = useState('');
  const isDarkMode = useColorScheme() === 'dark';

  // BottomSheet 애니메이션 값을 관리하는 shared value
  const bottomSheetTranslateY = useSharedValue(0);

  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

  // 바텀 시트의 snap 포인트 정의
  const snapPoints = useMemo(() => [300, 550], []);

  const handlePress = () => {
    navigation.navigate('Notification');
  };

  // 애니메이션 스타일 - 버튼의 위치
  const animatedButtonStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateY: bottomSheetTranslateY.value}],
    };
  });

  // BottomSheet 애니메이션 값 반응 설정
  useAnimatedReaction(
    () => bottomSheetTranslateY.value,
    (prepared, previous) => {
      bottomSheetTranslateY.value = prepared; // BottomSheet와 버튼이 동시에 움직이도록 설정
    },
  );

  return (
    <GestureHandlerRootView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#6a51ae"
        translucent={false}
      />
      <SafeAreaView style={styles.backgroundStyle}>
        <NewNaverMap />
        <View
          style={{
            flexDirection: 'row',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 6,
            paddingLeft: 20,
            paddingRight: 20,
          }}>
          <View style={styles.inputBox}>
            <SearchIcon color="#8E979E" />
            <TextInput
              style={styles.input}
              placeholder="업체 찾기"
              placeholderTextColor={'#8E979E'}
              value={text}
              onChangeText={setText}
            />
          </View>
          <Pressable
            style={({pressed}) => [
              styles.ring,
              {backgroundColor: pressed ? '#eeeeee' : 'white'},
            ]}
            onPress={handlePress}>
            <RingIcon />
          </Pressable>
        </View>

        {/* 하단 버튼 */}
        <Animated.View style={[styles.buttonContainer, animatedButtonStyle]}>
          <Pressable
            style={({pressed}) => [
              styles.gps,
              {backgroundColor: pressed ? '#eeeeee' : 'white'},
            ]}
            onPress={
              () => bottomSheetRef.current?.snapToIndex(0) // GPS 버튼을 누르면 BottomSheet 확장
            } // GPS 버튼을 누르면 BottomSheet 확장
          >
            <GPSIcon />
          </Pressable>
        </Animated.View>
        <BottomSheet
          ref={bottomSheetRef}
          // BottomSheet는 처음에 펼쳐진 상태로 시작
          index={0}
          // 일단 스냅 포인트는 300, 550으로 설정
          handleIndicatorStyle={{backgroundColor: '#E6EAED'}}
          snapPoints={snapPoints}
          enablePanDownToClose
          enableDynamicSizing={false}
          onAnimate={(fromIndex, toIndex) => {
            if (toIndex === 0) {
              bottomSheetTranslateY.value = -snapPoints[toIndex] + 10;
            } else {
              bottomSheetTranslateY.value = 0;
            }
          }}>
          <BottomSheetView>
            <View
              style={{
                paddingLeft: 16,
                paddingTop: 16,
                paddingBottom: 16,
              }}>
              <Text
                style={{
                  color: '#00434E',
                  fontSize: 17,
                  fontFamily: 'Pretendard-SemiBold',
                }}>
                내 주변 전달
              </Text>
            </View>
          </BottomSheetView>
          <BottomSheetScrollView
            contentContainerStyle={{
              gap: 20,
            }}>
            {CONTENTS_DATA.map((content, index) => (
              <PassItem
                key={index}
                passItem={content}
                onPress={() => {
                  navigation.navigate('DeliveryDetail', {passItem: content});
                }}
              />
            ))}
          </BottomSheetScrollView>
        </BottomSheet>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundStyle: {
    flex: 1,
  },
  inputBox: {
    flex: 1,
    height: 44,
    padding: 14,
    boxShadow: '0 3 16px 0 rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
    borderRadius: 100,
    backgroundColor: 'white',
  },
  input: {
    fontSize: 16,
  },
  ring: {
    width: 44,
    height: 44,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 50,
    boxShadow: '0 3 11px 0 rgba(0, 0, 0, 0.1)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  gps: {
    width: 48,
    height: 48,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 50,
    boxShadow: '0 3 11px 0 rgba(0, 0, 0, 0.1)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    position: 'absolute',
    right: 20,
    bottom: 20,
  },
});

export default AroundMainScreen;
