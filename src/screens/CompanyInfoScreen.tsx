import React, {useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Pressable,
  ScrollView,
} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {
  LeftArrowIcon,
  MiniPhoneIcon,
  MiniStarIcon,
  MiniWatchIcon,
} from '../components/Icons';
import {NaverMap} from '../components/NaverMap';
import {COMPANY_DATA, REVIEW_DATA} from '../data';

const CompanyInfoScreen = ({navigation, route}: any) => {
  const {company} = route.params;
  const companyData = COMPANY_DATA.find(c => c.id === company.companyId);
  const reviewData = REVIEW_DATA.filter(r => r.companyId === company.companyId);

  if (!companyData) {
    return (
      <View
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 4,
        }}>
        <Text>해당 업체 정보가 없습니다.</Text>
        <Text>잠시 후 다시 시도해주세요.</Text>
      </View>
    );
  }

  const reviewCount = reviewData.length;
  // 1점부터 5점까지의 평균 평점
  const reviewAverage =
    reviewData.reduce((acc, cur) => acc + cur.score, 0) / reviewCount;

  const businessHours = companyData.businessHours.split('-');

  // 처음에는 아무것도 선택되지 않은 상태
  const [selectedService, setSelectedService] = useState<string>('');
  const [selectedType, setSelectedType] = useState<string>(companyData.type[0]);

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
          <Text style={styles.headerText}>{companyData.name}</Text>
        </View>
        <View style={styles.container}>
          <View
            style={{
              height: 141,
              maxHeight: 141,
            }}>
            <NaverMap />
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 8,
              paddingTop: 24,
              paddingBottom: 24,
              paddingLeft: 20,
              paddingRight: 20,
              backgroundColor: '#FFFFFF',
            }}>
            <Text
              style={{
                color: '#181818',
                fontSize: 20,
                fontFamily: 'Pretendard-SemiBold',
              }}>
              {companyData.name}
            </Text>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: 14,
              }}>
              <MiniStarIcon />
              <Text
                style={{
                  color: '#394245',
                  fontSize: 14,
                  fontFamily: 'Pretendard-Medium',
                }}>{`${
                reviewAverage.toFixed(1) || '0.0'
              } (후기 ${reviewCount}개)`}</Text>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  gap: 4,
                }}>
                {companyData.type.map((type: string, index: number) => (
                  <Text
                    key={index}
                    style={{
                      color: '#6E7881',
                      fontSize: 11,
                      fontFamily: 'Pretendard-Regular',
                      backgroundColor: '#F9FAFB',
                      paddingLeft: 8,
                      paddingRight: 8,
                      paddingTop: 4,
                      paddingBottom: 4,
                    }}>
                    {type}
                  </Text>
                ))}
              </View>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: 4,
                marginTop: 10,
              }}>
              <MiniWatchIcon />
              <Text
                style={{
                  color: '#B1BAC0',
                  fontSize: 14,
                  fontFamily: 'Pretendard-Medium',
                }}>
                영업시간
              </Text>
              <Text
                style={{
                  color: '#6E7881',
                  fontSize: 14,
                  fontFamily: 'Pretendard-Medium',
                }}>
                {`오전 ${businessHours[0]} - 오전 ${businessHours[1]}`}
              </Text>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: 4,
              }}>
              <MiniPhoneIcon />
              <Text
                style={{
                  color: '#B1BAC0',
                  fontSize: 14,
                  fontFamily: 'Pretendard-Medium',
                }}>
                전화번호
              </Text>
              <Text
                style={{
                  color: '#6E7881',
                  fontSize: 14,
                  fontFamily: 'Pretendard-Medium',
                }}>
                {companyData.phoneNumber}
              </Text>
              <Text
                style={{
                  color: '#000000',
                  fontSize: 14,
                  fontFamily: 'Pretendard-Medium',
                }}>
                {'전화하기 >'}
              </Text>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              gap: 8,
              backgroundColor: '#FFFFFF',
            }}>
            {/* 헤더영역 */}
            <View
              style={{
                height: 48,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
                paddingLeft: 20,
                paddingRight: 20,
              }}>
              {companyData.type.map((type: string, index: number) => (
                <Pressable
                  key={index}
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingLeft: 8,
                    paddingRight: 8,
                    paddingTop: 4,
                    paddingBottom: 4,
                    position: 'relative',
                    height: 48,
                    width: 'auto',
                  }}
                  onPress={() => {
                    setSelectedType(type);
                  }}>
                  {selectedType === type && (
                    <View
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: 3,
                      }}>
                      <View
                        style={{
                          height: 3,
                          width: 38,
                          backgroundColor: '#1F1F1F',
                        }}></View>
                    </View>
                  )}
                  <Text
                    style={{
                      color: '#1F1F1F',
                      fontSize: 16,
                      fontFamily: 'Pretendard-SemiBold',
                    }}>
                    {type}
                  </Text>
                </Pressable>
              ))}
            </View>
            {/* 리스트 영역 */}
            <ScrollView
              style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                paddingLeft: 20,
                paddingRight: 20,
                paddingTop: 22,
                paddingBottom: 22,
                gap: 20,
              }}>
              {companyData.type.length === 0 && (
                <View
                  style={{
                    flex: 1,
                  }}>
                  <Text>등록된 서비스가 없습니다.</Text>
                </View>
              )}
              {companyData.type.map((type: string, index: number) => (
                <View key={index}>
                  <Text
                    style={{
                      color: '#8E979E',
                      fontSize: 13,
                      fontFamily: 'Pretendard-Regular',
                    }}>
                    {type}
                  </Text>
                  {companyData.services
                    .filter(service => service.type === type)
                    .map((service: ServiceType, index: number) => (
                      <Pressable
                        key={index}
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          gap: 7,
                          borderBottomWidth: 1,
                          borderBottomColor: '#F9FAFB',
                          paddingTop: 18,
                          paddingBottom: 18,
                        }}
                        onPress={() => {
                          navigation.navigate('OrderSheet', {
                            company: companyData,
                            service,
                          });
                        }}>
                        <Text
                          style={{
                            color: '#394245',
                            fontSize: 16,
                            fontFamily: 'Pretendard-SemiBold',
                          }}>
                          {service.name}
                        </Text>
                        <Text
                          style={{
                            color: '#6E7881',
                            fontSize: 14,
                            fontFamily: 'Pretendard-Regular',
                          }}>
                          {`100${
                            service.unit
                          }당 ${service.price.toLocaleString()}`}
                          원
                        </Text>
                      </Pressable>
                    ))}
                </View>
              ))}
            </ScrollView>
          </View>
        </View>
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
    backgroundColor: '#F9FAFB',
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
  },
  headerText: {
    color: '#181818',
    fontSize: 18,
    fontFamily: 'Pretendard-SemiBold',
  },
});

export default CompanyInfoScreen;
