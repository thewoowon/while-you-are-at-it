import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Pressable,
} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {
  ProfileIcon,
  RingIcon,
  ExclamationIcon,
  GearIcon,
  PaymentIcon,
  QuestionIcon,
  SpeakerIcon,
  PencilIcon,
} from '../components/Icons';

const MyMainScreen = ({navigation, route}: any) => {
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

  const menu: {
    title: string;
    icon: React.ReactNode;
    destination: string;
  }[] = [
    {title: '결제내역', icon: <PaymentIcon />, destination: 'PaymentDetails'},
    {title: '1:1 문의내역', icon: <QuestionIcon />, destination: 'InquiryDetails'},
    {title: '계정 정보 수정', icon: <GearIcon />, destination: 'ProfileEdit'},
    {title: '고객센터', icon: <ExclamationIcon />, destination: 'CustomerService'},
    {title: '공지사항', icon: <SpeakerIcon />, destination: 'Announcement'},
  ];
  return (
    <GestureHandlerRootView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#6a51ae"
        translucent={false}
      />
      <SafeAreaView style={styles.backgroundStyle}>
        <View style={styles.header}>
          <Text
            style={{
              color: '#C7CDD1',
              fontSize: 20,
              fontFamily: 'Pretendard-ExtraBold',
            }}>
            내 정보
          </Text>
          <Pressable
            style={styles.ring}
            onPress={() => {
              navigation.navigate('Notification');
            }}>
            <RingIcon />
          </Pressable>
        </View>
        <View
          style={{
            flex: 1,
            marginTop: 10,
            paddingLeft: 20,
            paddingRight: 20,
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
          }}>
          <View style={styles.profileWrapper}>
            <View style={styles.profile}>
              <ProfileIcon />
              <View
                style={{
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                }}>
                <View
                  style={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={{
                      color: '#1B1B1B',
                      fontSize: 16,
                      fontFamily: 'Pretendard-SemiBold',
                      lineHeight: 24,
                    }}>
                    {user.nickname}
                  </Text>
                  <Pressable
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                      gap: 3,
                    }}
                    onPress={() => {
                      navigation.navigate('ProfileEdit');
                    }}>
                    <Text
                      style={{
                        color: '#8E979E',
                        fontSize: 12,
                        fontFamily: 'Pretendard-Regular',
                        lineHeight: 19,
                      }}>
                      내 정보 수정
                    </Text>
                    <PencilIcon />
                  </Pressable>
                </View>
                <Text
                  style={{
                    color: '#1B1B1B',
                    fontSize: 12,
                    fontFamily: 'Pretendard-SeimBold',
                    lineHeight: 19,
                  }}>
                  {user.jobDescription}
                  <Text
                    style={{
                      color: '#B1BAC0',
                    }}>
                    (공개)
                  </Text>
                </Text>
              </View>
            </View>
            <View
              style={{
                height: 1,
                backgroundColor: '#F2F4F6',
                width: '100%',
              }}></View>
            <View style={styles.profileBottomArea}>
              <View
                style={{
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 2,
                }}>
                <Text
                  style={{
                    color: '#6E7881',
                    fontSize: 12,
                    fontFamily: 'Pretendard-Medium',
                    lineHeight: 19,
                  }}>
                  가는김에와 함께한 지
                </Text>
                <Text
                  style={{
                    color: '#005C48',
                    fontSize: 14,
                    fontFamily: 'Pretendard-SemiBold',
                    lineHeight: 22,
                  }}>
                  210일차
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 2,
                }}>
                <Text
                  style={{
                    color: '#6E7881',
                    fontSize: 12,
                    fontFamily: 'Pretendard-Medium',
                    lineHeight: 19,
                  }}>
                  전달
                </Text>
                <Text
                  style={{
                    color: '#005C48',
                    fontSize: 14,
                    fontFamily: 'Pretendard-SemiBold',
                    lineHeight: 22,
                  }}>
                  26회
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              width: '100%',
              paddingTop: 13,
              paddingBottom: 13,
              paddingLeft: 20,
              paddingRight: 20,
              borderRadius: 8,
              backgroundColor: '#1CD7AE',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: '#FFFFFF',
                fontSize: 14,
                fontFamily: 'Pretendard-Medium',
                lineHeight: 22,
              }}>
              가는김에로 절약한 시간
            </Text>
            <Text
              style={{
                color: '#FFFFFF',
                fontSize: 16,
                fontFamily: 'Pretendard-SemiBold',
                lineHeight: 24,
              }}>
              123시간
            </Text>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 8,
            }}>
            {menu.map((menu, index) => (
              <Pressable
                key={index}
                onPress={() => {
                  navigation.navigate(menu.destination);
                }}
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                  paddingTop: 10,
                  paddingBottom: 10,
                  gap: 6,
                }}>
                {menu.icon}
                <Text
                  style={{
                    color: '#1B1B1B',
                    fontSize: 16,
                    lineHeight: 24,
                    fontFamily: 'Pretendard-Medium',
                  }}>
                  {menu.title}
                </Text>
              </Pressable>
            ))}
          </View>
          <View>
            <Text
              style={{
                fontSize: 14,
                fontFamily: 'Pretendard-Regular',
                lineHeight: 22,
                color: '#6E7881',
              }}>
              로그아웃
            </Text>
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
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 20,
    paddingLeft: 20,
    paddingTop: 13,
    paddingBottom: 13,
    maxHeight: 50,
  },
  profileWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 11,
    paddingTop: 14,
    paddingBottom: 12,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: 'white',
    borderRadius: 12,
    boxShadow: '0px 4px 24px rgba(0, 0, 0, 0.03)',
  },
  profile: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 16,
    width: '100%',
  },
  ring: {
    width: 44,
    height: 44,
    padding: 10,
    borderRadius: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileBottomArea: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 20,
    width: '100%',
  },
});

export default MyMainScreen;
