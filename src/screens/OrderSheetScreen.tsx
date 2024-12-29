import React, {useState} from 'react';
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
import {CameraIcon, LeftArrowIcon} from '../components/Icons';

const OrderSheetScreen = ({navigation, route}: any) => {
  const {
    company,
    service,
  }: {
    company: CompanyType;
    service: ServiceType;
  } = route.params;

  console.log(company, service);
  const [selected, setSelected] = useState<'input' | 'unknown'>('input');
  const [text, setText] = useState<string>('');

  const handleCamera = () => {
    navigation.navigate('Camera');
  };

  const handleComplete = () => {
    navigation.navigate('Complete');
  };

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
          <Text style={styles.headerText}>{service.name}</Text>
        </View>
        <ScrollView
          style={{
            backgroundColor: '#F9FAFB',
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 17,
              paddingTop: 26,
              paddingLeft: 20,
              paddingRight: 20,
              paddingBottom: 20,
              backgroundColor: '#FFFFFF',
              marginBottom: 7,
            }}>
            <View>
              <Text style={styles.title}>작업 횟수</Text>
              <Text
                style={{
                  color: '#828282',
                  fontSize: 12,
                  fontFamily: 'Pretendard-Regular',
                }}>{`1${service.unit} 당 ${service.price.toLocaleString(
                'ko-KR',
              )}원`}</Text>
            </View>
            <View>
              <View>
                <Pressable
                  style={styles.radioContainer}
                  onPress={() => setSelected('input')}>
                  <View style={[styles.radioCircle]}>
                    {selected === 'input' && (
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
                  <View
                    style={{
                      flex: 1,
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                      paddingBottom: 10,
                      paddingTop: 10,
                      paddingLeft: 15,
                      paddingRight: 15,
                      borderWidth: 1,
                      borderColor: '#1CD7AE',
                      borderRadius: 8,
                      backgroundColor: '#EDFCF9',
                    }}>
                    <TextInput
                      placeholder="중량을 입력해주세요"
                      style={{flex: 1}}
                    />
                    <Text
                      style={{
                        color: '#BEC1C2',
                        fontSize: 16,
                        fontFamily: 'Pretendard-Regular',
                      }}>
                      회
                    </Text>
                  </View>
                </Pressable>
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Pressable
                  style={styles.radioContainer}
                  onPress={() => setSelected('unknown')}>
                  <View style={[styles.radioCircle]}>
                    {selected === 'unknown' && (
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
                  <Text
                    style={{
                      color: '#1F1F1F',
                      fontSize: 16,
                      fontFamily: 'Pretendard-Regular',
                      flex: 1,
                    }}>
                    중량모름 (업체에서 측정한 중량으로 금액이 선택됩니다)
                  </Text>
                </Pressable>
              </View>
            </View>
            <View>
              <Text>1,000원</Text>
            </View>
          </View>

          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 17,
              paddingTop: 26,
              paddingLeft: 20,
              paddingRight: 20,
              paddingBottom: 20,
              backgroundColor: '#FFFFFF',
              marginBottom: 7,
            }}>
            <Text style={styles.title}>작업설명 및 문의</Text>
            <Pressable
              onPress={handleCamera}
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 5,
                borderWidth: 1,
                borderColor: '#E6EAED',
                backgroundColor: '#F9FAFB',
                borderRadius: 10,
                width: '100%',
                height: 278,
                cursor: 'pointer',
              }}>
              <CameraIcon />
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 2,
                }}>
                <Text
                  style={{
                    color: '#B1BAC0',
                    fontSize: 14,
                    fontFamily: 'Pretendard-Regular',
                  }}>
                  사진이나 영상을 등록하여
                </Text>
                <Text
                  style={{
                    color: '#B1BAC0',
                    fontSize: 14,
                    fontFamily: 'Pretendard-Regular',
                  }}>
                  더 상세한 설명을 전달해주세요
                </Text>
              </View>
            </Pressable>
            <TextInput
              style={{
                paddingLeft: 18,
                paddingRight: 18,
                paddingTop: 16,
                paddingBottom: 16,
                width: '100%',
                height: 114,
                borderWidth: 1,
                borderColor: '#E6EAED',
                backgroundColor: '#FFFFFF',
                borderRadius: 10,
              }}
              multiline={true}
              numberOfLines={4} // 보여질 줄 수 (줄이 넘어가면 스크롤 가능)
              value={text}
              onChangeText={value => setText(value)}
              placeholder="설명을 작성해주세요"
            />
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 17,
              paddingTop: 26,
              paddingLeft: 20,
              paddingRight: 20,
              paddingBottom: 20,
              backgroundColor: '#FFFFFF',
            }}>
            <Text style={styles.title}>예상 결제금액</Text>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  color: '#6E7881',
                  fontSize: 14,
                  fontFamily: 'Pretendard-Regular',
                }}>
                중량별 금액
              </Text>
              <Text>4,000원</Text>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  color: '#6E7881',
                  fontSize: 14,
                  fontFamily: 'Pretendard-Regular',
                }}>
                총 금액
              </Text>
              <Text
                style={{
                  color: '#1CD7AE',
                  fontSize: 22,
                  fontFamily: 'Pretendard-SemiBold',
                }}>
                8,000원
              </Text>
            </View>
            <View
              style={{
                padding: 10,
                width: '100%',
                borderWidth: 1,
                borderColor: '#E6EAED',
                backgroundColor: '#FFFFFF',
                borderRadius: 10,
              }}>
              <Text
                style={{
                  color: '#FE4646',
                  fontSize: 12,
                  fontFamily: 'Pretendard-Medium',
                  marginBottom: 4,
                }}>
                주문 전 꼭 읽어주세요!
              </Text>
              <Text
                style={{
                  color: '#8E979E',
                  fontSize: 12,
                  fontFamily: 'Pretendard-Regular',
                }}>
                • 업체에서 작업물을 수령 후 결제를 진행합니다
              </Text>
              <Text
                style={{
                  color: '#8E979E',
                  fontSize: 12,
                  fontFamily: 'Pretendard-Regular',
                }}>
                • 추가적인 작업이 필요할 경우 채팅이나 음성으로 사장님과 상담 후
                결제를 진행해주세요
              </Text>
            </View>
            <Pressable
              onPress={handleComplete}
              style={({pressed}) => [
                {
                  padding: 16,
                  borderRadius: 6,
                  backgroundColor: '#1CD7AE',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                },
                {backgroundColor: pressed ? '#0BBDA1' : '#1CD7AE'},
              ]}>
              <Text
                style={{
                  color: '#FFFFFF',
                  fontSize: 16,
                  fontFamily: 'Pretendard-SemiBold',
                }}>
                주문 완료
              </Text>
            </Pressable>
          </View>
        </ScrollView>
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
  title: {
    color: '#192628',
    fontSize: 16,
    fontFamily: 'Pretendard-SemiBold',
  },
  radioContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
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

export default OrderSheetScreen;
