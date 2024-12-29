import React, {useMemo, useRef, useState, useEffect} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Pressable,
} from 'react-native';
import {LeftArrowIcon, ProfileIcon} from '../components/Icons';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import BottomSheet, {
  BottomSheetView,
  BottomSheetScrollView,
} from '@gorhom/bottom-sheet';
import {useSharedValue} from 'react-native-reanimated';
import Toast from 'react-native-toast-message';
import {Calendar, DateData} from 'react-native-calendars';
import moment from 'moment';

// 나의 거래 리스트 -> 나의 아이디로 거래 리스트 외래키로 조회
// 이미 외래키 조회했다고 가정하기
const myDeals = [
  {
    id: 'GG-1234',
    userId: '1',
    // 업체명
    from: '아림주물',
    // 주문자
    to: '김개똥',
    status: 'processing',
  },
  {
    id: 'GG-1235',
    userId: '1',
    // 업체명
    from: '쁘띠레이저',
    // 주문자
    to: '김개똥',
    status: 'processing',
  },
  {
    id: 'GG-1236',
    userId: '1',
    // 업체명
    from: '쁘띠도금',
    // 주문자
    to: '김개똥',
    status: 'pickup',
  },
];

const DeliveryDetailScreen = ({navigation, route}: any) => {
  const {
    passItem,
  }: {
    passItem: ContentsType;
  } = route.params;

  const showToast = () => {
    Toast.show({
      type: 'error', // 'info', 'error', etc.
      text1: '알림',
      text2: '거래를 선택해주세요',
    });
  };

  const user = {
    id: '1',
    name: '김개똥',
    nickname: '헤파이토스',
    profileImage: 'https://picsum.photos/200',
    status: 'online',
    jobDescription: '주얼리 브랜드 운영',
    deliveryCount: 36,
    // 무사고 여부
    isAccidentFree: true,
    // 가입일
    joinDate: '2021-08-01',
  };

  const [selected, setSelected] = useState('unknown');
  const [dealState, setDealState] = useState<'selecting' | 'scheduling'>(
    'selecting',
  );

  // BottomSheet 애니메이션 값을 관리하는 shared value
  const bottomSheetTranslateY = useSharedValue(0);

  const bottomSheetRef = useRef<BottomSheet>(null);

  // 바텀 시트의 snap 포인트 정의
  const snapPoints = useMemo(() => [300, 500], []);

  const handleGoToChat = () => {
    navigation.navigate('Chat');
  };

  const handleRequestDelivery = () => {
    bottomSheetRef.current?.snapToIndex(0);
  };

  const [markedDates, setMarkedDates] = useState({});

  // 이번 주와 다음 주의 날짜 계산
  const getWeekRange = () => {
    const startOfWeek = moment().startOf('week'); // 이번 주 시작 (일요일)
    const endOfNextWeek = moment().add(1, 'week').endOf('week'); // 다음 주 종료 (토요일)
    const range: {
      [key: string]: {marked: boolean; dotColor: string};
    } = {};

    let currentDate = startOfWeek;
    while (currentDate <= endOfNextWeek) {
      const formattedDate = currentDate.format('YYYY-MM-DD');
      range[formattedDate] = {marked: true, dotColor: 'blue'}; // 원하는 스타일 지정
      currentDate = currentDate.add(1, 'day'); // 하루씩 증가
    }
    return range;
  };

  useEffect(() => {
    setMarkedDates(getWeekRange());
  }, []);
  return (
    <GestureHandlerRootView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#6a51ae"
        translucent={false}
      />
      <SafeAreaView style={styles.backgroundStyle}>
        <View style={styles.header}>
          {/* 상단 헤더 */}
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              position: 'absolute',
              left: 16,
            }}>
            <Pressable
              onPress={() => {
                navigation.goBack();
              }}>
              <LeftArrowIcon />
            </Pressable>
          </View>
          <Text style={styles.headerText}>{'게시글'}</Text>
        </View>
        <View
          style={{
            flex: 1,
            paddingTop: 12,
            paddingBottom: 24,
            paddingLeft: 20,
            paddingRight: 20,
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
              backgroundColor: '#F9FAFB',
              paddingTop: 15,
              paddingBottom: 15,
              paddingLeft: 12,
              paddingRight: 12,
              borderRadius: 8,
              gap: 15,
            }}>
            <ProfileIcon />
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                gap: 5,
              }}>
              <Text
                style={{
                  color: '#6E7881',
                  fontSize: 16,
                  fontFamily: 'Pretendard-SemiBold',
                }}>
                {user.nickname}
              </Text>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                  gap: 12,
                }}>
                {/* 무사고 여부 */}
                {user.isAccidentFree && (
                  <Text
                    style={{
                      color: '#192628',
                      fontSize: 14,
                      fontFamily: 'Pretendard-Medium>',
                    }}>{`무사고 전달 ${
                    user.isAccidentFree ? 210 : 0
                  }일차 ∙`}</Text>
                )}
                <Text
                  style={{
                    color: '#192628',
                    fontSize: 14,
                    fontFamily: 'Pretendard-Medium>',
                  }}>{`${user.deliveryCount}회 전달`}</Text>
              </View>
              <Text
                style={{
                  color: '#C7CDD1',
                  fontSize: 12,
                  fontFamily: 'Pretendard-SeimBold',
                }}>
                {user.jobDescription}
              </Text>
            </View>
          </View>
          <View
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: {
                passItOn: '#F8E9FC',
                deliverItTo: '#E9F9FC',
                recruitment: '#F9F7D7',
              }[passItem.category],
              paddingTop: 3,
              paddingBottom: 3,
              paddingLeft: 6,
              paddingRight: 6,
              borderRadius: 2,
              alignSelf: 'flex-start',
              marginTop: 26,
            }}>
            {
              {
                passItOn: <Text style={{color: '#D395D6'}}>전달해주세요</Text>,
                deliverItTo: (
                  <Text style={{color: '#3CBACD'}}>전달해드려요</Text>
                ),
                recruitment: (
                  <Text style={{color: '#C9A92C'}}>팀 모집해요</Text>
                ),
              }[passItem.category]
            }
          </View>
          <Text
            style={{
              color: '#181818',
              fontSize: 18,
              fontFamily: 'Pretendard-SemiBold',
              marginTop: 5,
            }}>
            {passItem.title}
          </Text>
          <Text
            style={{
              color: '#1F1F1F',
              fontSize: 16,
              fontFamily: 'Pretendard-Regular',
              lineHeight: 24,
              marginTop: 15,
            }}>
            {passItem.description}
          </Text>
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              gap: 8,
              paddingTop: 26,
              paddingBottom: 29,
            }}>
            {passItem.period && (
              <Text
                style={{
                  color: '#8E979E',
                  fontSize: 15,
                  fontFamily: 'Pretendard-Medium',
                }}>
                기간{'  '}
                <Text
                  style={{
                    fontFamily: 'Pretendard-Regular',
                  }}>
                  {passItem.period}
                </Text>
              </Text>
            )}
            {passItem.enableTime && (
              <Text
                style={{
                  color: '#8E979E',
                  fontSize: 15,
                  fontFamily: 'Pretendard-Medium',
                }}>
                수령{'  '}
                <Text
                  style={{
                    fontFamily: 'Pretendard-Regular',
                  }}>
                  {passItem.enableTime}
                </Text>
              </Text>
            )}
            {passItem.startTime && (
              <Text
                style={{
                  color: '#8E979E',
                  fontSize: 15,
                  fontFamily: 'Pretendard-Medium',
                }}>
                출발시간{'  '}
                <Text
                  style={{
                    fontFamily: 'Pretendard-Regular',
                  }}>
                  {passItem.startTime}
                </Text>
              </Text>
            )}
            {passItem.pickUpLocation && (
              <Text
                style={{
                  color: '#8E979E',
                  fontSize: 15,
                  fontFamily: 'Pretendard-Medium',
                }}>
                수령장소{'  '}
                <Text
                  style={{
                    fontFamily: 'Pretendard-Regular',
                  }}>
                  {passItem.pickUpLocation}
                </Text>
              </Text>
            )}
            {passItem.destination && (
              <Text
                style={{
                  color: '#8E979E',
                  fontSize: 15,
                  fontFamily: 'Pretendard-Medium',
                }}>
                목적지{'  '}
                <Text
                  style={{
                    fontFamily: 'Pretendard-Regular',
                  }}>
                  {passItem.destination}
                </Text>
              </Text>
            )}
          </View>
          {
            {
              waiting: (
                <Text
                  style={{
                    color: '#394245',
                    fontSize: 15,
                    fontFamily: 'Pretendard-SemiBold',
                    lineHeight: 24,
                  }}>
                  대기중{' '}
                  <Text
                    style={{
                      fontFamily: 'Pretendard-Regular',
                    }}>
                    {passItem.participants &&
                      `${passItem.participants}/${passItem.TotalParticipants}`}
                  </Text>
                </Text>
              ),
              processing: (
                <Text
                  style={{
                    color: '#394245',
                    fontSize: 15,
                    fontFamily: 'Pretendard-SemiBold',
                    lineHeight: 24,
                  }}>
                  모집마감{' '}
                  <Text
                    style={{
                      fontFamily: 'Pretendard-Regular',
                    }}>
                    {`${passItem.participants}/${passItem.TotalParticipants}`}
                  </Text>
                </Text>
              ),
              completed: (
                <Text
                  style={{
                    color: '#394245',
                    fontSize: 15,
                    fontFamily: 'Pretendard-SemiBold',
                    lineHeight: 24,
                  }}>
                  모집중{' '}
                  <Text
                    style={{
                      fontFamily: 'Pretendard-Regular',
                    }}>
                    {`${passItem.participants}/${passItem.TotalParticipants}`}
                  </Text>
                </Text>
              ),
            }[passItem.processStatus]
          }
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: 16,
            paddingBottom: 16,
            paddingLeft: 20,
            paddingRight: 20,
            gap: 7,
          }}>
          <Pressable
            onPress={handleGoToChat}
            style={({pressed}) => [
              {
                padding: 16,
                borderRadius: 6,
                backgroundColor: '#1CD7AE',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: 112,
              },
              {backgroundColor: pressed ? '#0BBDA1' : '#EDFCF9'},
            ]}>
            <Text
              style={{
                color: '#1CD7AE',
                fontSize: 16,
                fontFamily: 'Pretendard-SemiBold',
              }}>
              채팅하기
            </Text>
          </Pressable>
          <Pressable
            onPress={handleRequestDelivery}
            style={({pressed}) => [
              {
                padding: 16,
                borderRadius: 6,
                backgroundColor: '#1CD7AE',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flex: 1,
              },
              {backgroundColor: pressed ? '#0BBDA1' : '#1CD7AE'},
            ]}>
            <Text
              style={{
                color: '#FFFFFF',
                fontSize: 16,
                fontFamily: 'Pretendard-SemiBold',
              }}>
              전달 신청하기
            </Text>
          </Pressable>
        </View>
        <BottomSheet
          ref={bottomSheetRef}
          // BottomSheet는 처음에 펼쳐진 상태로 시작
          index={-1}
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
                전달 신청할 거래 고르기
              </Text>
            </View>
          </BottomSheetView>
          <BottomSheetScrollView
            contentContainerStyle={{
              gap: 20,
              paddingLeft: 20,
              paddingRight: 20,
            }}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 20,
              }}>
              {dealState === 'selecting' &&
                myDeals.map(deal => (
                  <View
                    key={deal.id}
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                      gap: 11,
                    }}>
                    <Pressable
                      style={styles.radioContainer}
                      onPress={() => setSelected(deal.id)}>
                      <View style={[styles.radioCircle]}>
                        {selected === deal.id && (
                          <View
                            style={{
                              height: 11,
                              width: 11,
                              borderRadius: 5,
                              backgroundColor: '#1CD7AE',
                            }}
                          />
                        )}
                      </View>
                    </Pressable>
                    <View
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flex: 1,
                      }}>
                      <View
                        style={{
                          display: 'flex',
                          flexDirection: 'row',
                          alignItems: 'center',
                          gap: 7,
                        }}>
                        <Text
                          style={{
                            color: '#181818',
                            fontSize: 16,
                            fontFamily: 'Pretendard-Regular',
                          }}>
                          {deal.from}과(와)의 거래
                        </Text>
                        <Text
                          style={{
                            color: '#707070',
                            fontSize: 12,
                            fontFamily: 'Pretendard-Regular',
                          }}>
                          {deal.status === 'processing'
                            ? '진행중'
                            : '픽업 진행중'}
                        </Text>
                      </View>
                      <Pressable
                        onPress={() => {
                          navigation.navigate('DealDetail', {
                            dealId: deal.id,
                          });
                        }}>
                        <Text
                          style={{
                            color: '#002920',
                            fontSize: 12,
                            fontFamily: 'Pretendard-Medium',
                          }}>
                          거래 자세히 보기
                        </Text>
                      </Pressable>
                    </View>
                  </View>
                ))}
              {dealState === 'scheduling' && (
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 20,
                  }}>
                  <Calendar
                    // 최소 및 최대 날짜 제한
                    minDate={moment().startOf('week').format('YYYY-MM-DD')}
                    maxDate={moment()
                      .add(1, 'week')
                      .endOf('week')
                      .format('YYYY-MM-DD')}
                    // 마킹된 날짜 표시
                    markedDates={markedDates}
                    // 날짜 클릭 이벤트
                    onDayPress={(day: DateData) =>
                      console.log('Selected day:', day.dateString)
                    }
                  />
                </View>
              )}
            </View>
            <Pressable
              onPress={() => {
                if (dealState === 'selecting') {
                  // selected에 선택된 거래의 id가 들어있음
                  if (selected === 'unknown') {
                    // 토스트 메시지 띄우기
                    showToast();
                  } else {
                    bottomSheetRef.current?.snapToIndex(1);
                    setDealState('scheduling');
                  }
                } else {
                  setDealState('selecting');
                  setSelected('unknown');
                  bottomSheetRef.current?.close();
                }
              }}
              style={({pressed}) => [
                {
                  padding: 16,
                  borderRadius: 6,
                  backgroundColor: '#1CD7AE',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flex: 1,
                },
                {backgroundColor: pressed ? '#0BBDA1' : '#1CD7AE'},
              ]}>
              <Text
                style={{
                  color: '#FFFFFF',
                  fontSize: 16,
                  fontFamily: 'Pretendard-SemiBold',
                }}>
                {dealState === 'selecting' ? '다음' : '전달신청 완료'}
              </Text>
            </Pressable>
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
  header: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 11,
    paddingBottom: 11,
    maxHeight: 50,
    borderBottomWidth: 1,
    borderColor: '#F2F4F6',
  },
  headerText: {
    color: '#181818',
    fontSize: 18,
    fontFamily: 'Pretendard-SemiBold',
  },
  radioContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  radioCircle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E6EAED',
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedRadio: {
    backgroundColor: '#1CD7AE',
  },
  radioText: {
    marginLeft: 10,
  },
});

export default DeliveryDetailScreen;
