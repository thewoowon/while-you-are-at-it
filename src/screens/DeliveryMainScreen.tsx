import React, {useCallback, useMemo, useRef, useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  ScrollView,
} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';
import {CURRENT_ORDER_DATA} from '../data';
import {KakaoIcon, PenIcon, RingIcon, SearchIcon} from '../components/Icons';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
// import CustomBackdrop from '../components/CustomBackdrop';

const DeliveryMainScreen = ({navigation, route}: any) => {
  // BottomSheet 애니메이션 값을 관리하는 shared value
  const bottomSheetTranslateY = useSharedValue(0);
  const [currentIndex, setCurrentIndex] = useState(-1);
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);
  // 바텀 시트의 snap 포인트 정의
  const snapPoints = useMemo(() => [250], []);
  // 애니메이션 스타일 - 버튼의 위치
  const animatedButtonStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateY: bottomSheetTranslateY.value}],
    };
  });

  return (
    <GestureHandlerRootView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#6a51ae"
        translucent={false}
      />
      <SafeAreaView style={styles.backgroundStyle}>
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
              defaultValue=""
              onFocus={() => {
                navigation.navigate('Search');
              }}
            />
          </View>
          <Pressable
            style={styles.ring}
            onPress={() => {
              navigation.navigate('Notification');
            }}>
            <RingIcon />
          </Pressable>
        </View>
        <ScrollView style={styles.orderList}>
          <Text
            style={{
              color: '#394245',
              fontSize: 18,
              fontFamily: 'Pretendard-SemiBold',
              paddingBottom: 16,
            }}>
            진행 중인 주문
          </Text>
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 13,
            }}>
            {CURRENT_ORDER_DATA.length > 0 ? (
              CURRENT_ORDER_DATA.map(order => {
                return (
                  <View
                    key={order.id}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      backgroundColor: 'white',
                      paddingBottom: 16,
                      paddingLeft: 16,
                      paddingRight: 16,
                      paddingTop: 20,
                      gap: 13,
                      borderRadius: 16,
                    }}>
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
                          flexDirection: 'row',
                          justifyContent: 'center',
                          alignItems: 'center',
                          gap: 10,
                        }}>
                        <Text
                          style={{
                            color: '#394245',
                            fontSize: 19,
                            fontFamily: 'Pretendard-SemiBold',
                          }}>
                          {order.title}
                        </Text>
                        <View
                          style={{
                            width: 1,
                            height: 14,
                            backgroundColor: '#E6EAED',
                          }}
                        />
                        <Text
                          style={{
                            color: '#1CD7AE',
                            fontSize: 12,
                            fontFamily: 'Pretendard-SemiBold',
                          }}>
                          {order.title}
                        </Text>
                      </View>
                      <Pressable>
                        <Text
                          style={{
                            color: '#C7CDD1',
                            fontSize: 12,
                            fontFamily: 'Pretendard-Medium',
                          }}>
                          자세히보기
                        </Text>
                      </Pressable>
                    </View>
                    <View
                      style={{
                        height: 1,
                        width: '100%',
                        backgroundColor: '#F6F8F9',
                      }}
                    />
                    <View
                      style={{
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 21,
                      }}>
                      <View
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'flex-start',
                          gap: 8,
                          paddingLeft: 8,
                          paddingRight: 8,
                        }}>
                        <View
                          style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'flex-start',
                            gap: 25,
                          }}>
                          <Text
                            style={{
                              color: '#6E7881',
                              fontSize: 14,
                              fontFamily: 'Pretendard-Regular',
                              width: 70,
                            }}>
                            수령일시
                          </Text>
                          <Text
                            style={{
                              flex: 1,
                              color: '#192628',
                              fontSize: 14,
                              fontFamily: 'Pretendard-Medium',
                              flexWrap: 'wrap',
                            }}>
                            {order.dueDate}
                          </Text>
                        </View>
                        <View
                          style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'flex-start',
                            gap: 25,
                          }}>
                          <Text
                            style={{
                              color: '#6E7881',
                              fontSize: 14,
                              fontFamily: 'Pretendard-Regular',
                              width: 70,
                            }}>
                            전달할 물건
                          </Text>
                          <Text
                            style={{
                              flex: 1,
                              color: '#192628',
                              fontSize: 14,
                              fontFamily: 'Pretendard-Medium',
                              // 텍스트 줄바꿈 처리
                              flexWrap: 'wrap',
                            }}>
                            {order.description}
                          </Text>
                        </View>
                      </View>
                      <View
                        style={{
                          width: '100%',
                          display: 'flex',
                          flexDirection: 'row',
                          gap: 10,
                        }}>
                        <Pressable
                          style={{
                            flex: 1,
                            padding: 16,
                            borderRadius: 12,
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: '#E9FCF8',
                            gap: 5,
                          }}
                          onPress={() => {
                            // navigation.navigate('CompanyInfo');
                          }}>
                          <KakaoIcon color="#1CD7AE" />
                          <Text
                            style={{
                              color: '#1CD7AE',
                              fontSize: 14,
                              fontFamily: 'Pretendard-SemiBold',
                            }}>
                            채팅하기
                          </Text>
                        </Pressable>
                        <Pressable
                          style={{
                            padding: 16,
                            borderRadius: 12,
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: '#394245',
                            gap: 5,
                            width: 96,
                          }}
                          onPress={() => {
                            // navigation.navigate('CompanyInfo');
                          }}>
                          <Text
                            style={{
                              color: 'white',
                              fontSize: 14,
                              fontFamily: 'Pretendard-SemiBold',
                            }}>
                            전달시작
                          </Text>
                        </Pressable>
                      </View>
                    </View>
                  </View>
                );
              })
            ) : (
              <View
                style={{
                  flex: 1,
                }}>
                <Text>진행중인 주문이 없습니다</Text>
              </View>
            )}
          </View>
        </ScrollView>
        {/* 하단 버튼 */}
        <Animated.View style={[styles.buttonContainer, animatedButtonStyle]}>
          <Pressable
            style={({pressed}) => [
              styles.pen,
              // 좀 더 진한 색으로 변경
              {backgroundColor: pressed ? '#1CCBAE' : '#1CD7AE'},
            ]}
            onPress={
              () => bottomSheetRef.current?.snapToIndex(0) // GPS 버튼을 누르면 BottomSheet 확장
            } // GPS 버튼을 누르면 BottomSheet 확장
          >
            <PenIcon />
          </Pressable>
        </Animated.View>
        <BottomSheet
          ref={bottomSheetRef}
          // BottomSheet는 처음에 펼쳐진 상태로 시작
          index={-1}
          // 일단 스냅 포인트는 300, 550으로 설정
          handleIndicatorStyle={{
            display: 'none',
          }}
          containerStyle={{
            zIndex: 3,
          }}
          // dim 처리
          snapPoints={snapPoints}
          enablePanDownToClose
          enableDynamicSizing={false}
          onAnimate={(fromIndex, toIndex) => {
            if (toIndex === 0) {
              setCurrentIndex(0);
              bottomSheetTranslateY.value = 0;
            } else {
              setCurrentIndex(-1);
              bottomSheetTranslateY.value = 0;
            }
          }}>
          <BottomSheetView>
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}>
              <View
                style={{
                  width: '100%',
                  paddingBottom: 16,
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderBottomWidth: 1,
                  borderBottomColor: '#F2F4F6',
                }}>
                <Text
                  style={{
                    color: '#B1BAC0',
                    fontSize: 14,
                    fontFamily: 'Pretendard-SemiBold',
                  }}>
                  어떤 글을 쓰시겠어요?
                </Text>
              </View>
              {['전달해주세요', '전달해드려요', '팀 모집해요'].map(
                (text, index) => (
                  <Pressable
                    key={index}
                    style={{
                      width: '100%',
                      paddingTop: 16,
                      paddingBottom: 16,
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderBottomWidth: 1,
                      borderBottomColor: '#F2F4F6',
                    }}
                    onPress={() => {
                      navigation.navigate('DeliveryCreate');
                    }}>
                    <Text
                      style={{
                        color: '#181818',
                        fontSize: 16,
                        fontFamily: 'Pretendard-Regular',
                      }}>
                      {text}
                    </Text>
                  </Pressable>
                ),
              )}
            </View>
          </BottomSheetView>
        </BottomSheet>
        {/* dim 처리 */}
        <Animated.View
          style={{
            ...StyleSheet.absoluteFillObject,
            backgroundColor: 'rgba(0,0,0,0.5)',
            zIndex: 2,
            // bottomSheetRef가 열리면 dim 처리
            display: currentIndex === 0 ? 'flex' : 'none',
          }}
          onTouchStart={() => {
            bottomSheetRef.current?.close();
          }}
        />
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F8F9',
  },
  header: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 30,
    paddingLeft: 20,
    paddingTop: 11,
    paddingBottom: 11,
    maxHeight: 50,
  },
  backgroundStyle: {
    flex: 1,
  },
  headerText: {
    color: '#C7CDD1',
    fontSize: 20,
    fontFamily: 'Pretendard-ExtraBold',
  },
  orderList: {
    flex: 1,
    paddingTop: 32,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
  },
  inputBox: {
    flex: 1,
    height: 44,
    padding: 14,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
    borderRadius: 100,
    backgroundColor: '#F2F4F6',
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
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pen: {
    width: 56,
    height: 56,
    backgroundColor: '#1CD7AE',
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

export default DeliveryMainScreen;
