import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  Pressable,
  Animated,
  ScrollView,
} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {KakaoIcon, RingIcon, SearchIcon} from '../components/Icons';
import {CURRENT_ORDER_DATA, PREVIOUS_ORDER_DATA} from '../data';

type RootStackParamList = {
  OrderMain: undefined;
  Search: undefined;
  CompanyInfo: undefined;
  OrderSheet: undefined;
  Camera: undefined;
};

const OrderMainScreen = ({navigation, route}: any) => {
  // const {query, userId} = route.params;
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
                          flexDirection: 'row',
                          alignItems: 'center',
                          gap: 37,
                          paddingLeft: 8,
                          paddingRight: 8,
                        }}>
                        <Text
                          style={{
                            color: '#6E7881',
                            fontSize: 14,
                            fontFamily: 'Pretendard-Regular',
                          }}>
                          예상완료일
                        </Text>
                        <Text
                          style={{
                            color: '#192628',
                            fontSize: 14,
                            fontFamily: 'Pretendard-Medium',
                          }}>
                          {order.dueDate}
                        </Text>
                      </View>
                      <Pressable
                        style={{
                          padding: 16,
                          borderRadius: 12,
                          display: 'flex',
                          flexDirection: 'row',
                          alignItems: 'center',
                          justifyContent: 'center',
                          backgroundColor: '#E9FCF8',
                          gap: 5,
                          width: '100%',
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
          <Text
            style={{
              color: '#394245',
              fontSize: 18,
              fontFamily: 'Pretendard-SemiBold',
              paddingTop: 32,
              paddingBottom: 16,
            }}>
            이전 주문
          </Text>
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 13,
            }}>
            {PREVIOUS_ORDER_DATA.length > 0 ? (
              PREVIOUS_ORDER_DATA.map(order => {
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
                          flexDirection: 'row',
                          alignItems: 'center',
                          gap: 37,
                          paddingLeft: 8,
                          paddingRight: 8,
                        }}>
                        <Text
                          style={{
                            color: '#6E7881',
                            fontSize: 14,
                            fontFamily: 'Pretendard-Regular',
                          }}>
                          예상완료일
                        </Text>
                        <Text
                          style={{
                            color: '#192628',
                            fontSize: 14,
                            fontFamily: 'Pretendard-Medium',
                          }}>
                          {order.dueDate}
                        </Text>
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
});

export default OrderMainScreen;
