import React, {useMemo, useRef, useState, useCallback} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import BottomSheet, {
  BottomSheetView,
  BottomSheetScrollView,
} from '@gorhom/bottom-sheet';
import NaverMap from '../components/NaverMap';
import {ListIcon, RingIcon, GPSIcon} from '../components/Icons';
import {CONTENTS_DATA} from '../data';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  useAnimatedReaction,
  withTiming,
} from 'react-native-reanimated';

const HomeScreen = () => {
  const [text, setText] = useState('');
  const isDarkMode = useColorScheme() === 'dark';

  // BottomSheet 애니메이션 값을 관리하는 shared value
  const bottomSheetTranslateY = useSharedValue(0);

  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

  // 바텀 시트의 snap 포인트 정의
  const snapPoints = useMemo(() => [300, 550], []);

  const handlePress = () => {
    console.log('Pressed!');
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
        <NaverMap />
        <View
          style={{
            flexDirection: 'row',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 13,
            paddingLeft: 20,
            paddingRight: 20,
          }}>
          <View style={styles.inputBox}>
            <ListIcon />
            <TextInput
              style={styles.input}
              placeholder="내 주변 전달 검색"
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
              <Pressable key={index} style={styles.contents}>
                <View
                  style={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      backgroundColor: {
                        passItOn: '#F8E9FC',
                        deliverItTo: '#E9F9FC',
                        recruitment: '#F9F7D7',
                      }[content.category],
                      paddingTop: 3,
                      paddingBottom: 3,
                      paddingLeft: 6,
                      paddingRight: 6,
                      borderRadius: 2,
                    }}>
                    {
                      {
                        passItOn: (
                          <Text style={{color: '#D395D6'}}>전달해주세요</Text>
                        ),
                        deliverItTo: (
                          <Text style={{color: '#3CBACD'}}>전달해드려요</Text>
                        ),
                        recruitment: (
                          <Text style={{color: '#C9A92C'}}>팀 모집해요</Text>
                        ),
                      }[content.category]
                    }
                  </View>
                  {
                    {
                      waiting: (
                        <Text
                          style={{
                            color: '#B5B5B5',
                            fontSize: 14,
                            fontFamily: 'Pretendard-Regular',
                          }}>
                          대기중{' '}
                          {content.participants &&
                            `${content.participants}/${content.TotalParticipants}`}
                        </Text>
                      ),
                      processing: (
                        <Text
                          style={{
                            color: '#B5B5B5',
                            fontSize: 14,
                            fontFamily: 'Pretendard-Regular',
                          }}>
                          모집마감{' '}
                          {`${content.participants}/${content.TotalParticipants}`}
                        </Text>
                      ),
                      completed: (
                        <Text
                          style={{
                            color: '#B5B5B5',
                            fontSize: 14,
                            fontFamily: 'Pretendard-Regular',
                          }}>
                          모집중{' '}
                          {`${content.participants}/${content.TotalParticipants}`}
                        </Text>
                      ),
                    }[content.processStatus]
                  }
                </View>
                <View
                  style={{
                    paddingTop: 10,
                    paddingBottom: 10,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    gap: 4,
                  }}>
                  <Text
                    style={{
                      color: '#8E979E',
                    }}>
                    <Text
                      style={{
                        fontWeight: 'bold',
                        color: '#6E7881',
                      }}>
                      {content.from}
                    </Text>
                    에서{' '}
                    <Text
                      style={{
                        color: '#6E7881',
                        fontFamily: 'Pretendard-SemiBold',
                      }}>
                      {content.to}
                    </Text>
                    (으)로
                  </Text>
                  <Text
                    style={{
                      color: '#1F1F1F',
                      fontSize: 17,
                      fontFamily: 'Pretendard-SemiBold',
                    }}>
                    {content.title}
                  </Text>
                </View>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    gap: 8,
                  }}>
                  {content.period && (
                    <Text
                      style={{
                        color: '#192628',
                        fontSize: 15,
                        fontFamily: 'Pretendard-Medium',
                      }}>
                      기간{'  '}
                      <Text
                        style={{
                          fontFamily: 'Pretendard-Regular',
                        }}>
                        {content.period}
                      </Text>
                    </Text>
                  )}
                  {content.enableTime && (
                    <Text
                      style={{
                        color: '#192628',
                        fontSize: 15,
                        fontFamily: 'Pretendard-Medium',
                      }}>
                      수령{'  '}
                      <Text
                        style={{
                          fontFamily: 'Pretendard-Regular',
                        }}>
                        {content.enableTime}
                      </Text>
                    </Text>
                  )}
                  {content.startTime && (
                    <Text
                      style={{
                        color: '#192628',
                        fontSize: 15,
                        fontFamily: 'Pretendard-Medium',
                      }}>
                      출발시간{'  '}
                      <Text
                        style={{
                          fontFamily: 'Pretendard-Regular',
                        }}>
                        {content.startTime}
                      </Text>
                    </Text>
                  )}
                  {content.pickUpLocation && (
                    <Text
                      style={{
                        color: '#192628',
                        fontSize: 15,
                        fontFamily: 'Pretendard-Medium',
                      }}>
                      수령장소{'  '}
                      <Text
                        style={{
                          fontFamily: 'Pretendard-Regular',
                        }}>
                        {content.pickUpLocation}
                      </Text>
                    </Text>
                  )}
                  {content.destination && (
                    <Text
                      style={{
                        color: '#192628',
                        fontSize: 15,
                        fontFamily: 'Pretendard-Medium',
                      }}>
                      목적지{'  '}
                      <Text
                        style={{
                          fontFamily: 'Pretendard-Regular',
                        }}>
                        {content.destination}
                      </Text>
                    </Text>
                  )}
                </View>
              </Pressable>
            ))}
          </BottomSheetScrollView>
        </BottomSheet>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  fixedHeader: {
    position: 'absolute',
    top: -10, // 음수 top 값을 사용하여 BottomSheet 위로 나오도록 함
    left: 0,
    right: 0,
    height: 50,
    backgroundColor: 'skyblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  backgroundStyle: {
    flex: 1,
  },
  highlight: {
    fontWeight: '700',
  },
  container: {
    flex: 1,
  },
  mapStyle: {
    position: 'relative',
    width: '100%',
    height: '100%',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
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
    borderRadius: 6,
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
  contents: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
  },
  buttonContainer: {
    position: 'absolute',
    right: 20,
    bottom: 20,
  },
});

export default HomeScreen;
