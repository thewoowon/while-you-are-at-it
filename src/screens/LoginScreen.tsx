import React, {useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  Image,
  Text,
  Pressable,
  Platform,
} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import {GoogleIcon, KakaoIcon, NaverIcon} from '../components/Icons';
import {authorize} from 'react-native-app-auth';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import axios from 'axios';
import {API_PREFIX} from '../constants';
import Toast from 'react-native-toast-message';
import {login} from '../services/auth';
import {useAuth} from '../hooks';
import CheckBox from '@react-native-community/checkbox';

const BASE_URL = Platform.select({
  ios: 'http://127.0.0.1:8000', // iOS 시뮬레이터
  android: 'http://127.0.0.1:8000', // Android 에뮬레이터
});

const LoginScreen = ({navigation, route}: any) => {
  const [isSelected, setSelection] = useState(false);
  const {setIsAuthenticated} = useAuth();
  const naverConfig = {
    issuer: 'https://nid.naver.com',
    clientId: 'YOUR_NAVER_CLIENT_ID',
    clientSecret: 'YOUR_NAVER_CLIENT_SECRET',
    redirectUrl: 'yourappscheme:/oauth',
    scopes: ['profile'],
  };

  const kakaoConfig = {
    issuer: 'https://kauth.kakao.com',
    clientId: 'YOUR_KAKAO_CLIENT_ID',
    redirectUrl: 'yourappscheme:/oauth',
    scopes: ['profile'],
  };

  const googleLogin = async () => {
    try {
      // Google Play 서비스 확인
      const hasPlayService = await GoogleSignin.hasPlayServices({
        showPlayServicesUpdateDialog: true,
      });

      if (hasPlayService) {
        // Google 로그인 시도
        const userInfo = await GoogleSignin.signIn();

        // 서버로 토큰 전달
        const response = await axios.post(
          `${BASE_URL}${API_PREFIX}/auth/google/`,
          {
            id_token: userInfo.data?.idToken,
            is_selected: isSelected ? 1 : 0,
          },
        );

        if (response.status === 200) {
          await login({
            access_token: response.data.access_token,
            refresh_token: response.data.refresh_token,
          });
          Toast.show({
            type: 'success',
            text1: '로그인 성공',
            text2: '환영합니다!',
          });

          if (!response.data.user.nickname) {
            navigation.navigate('Nickname');
          } else {
            setIsAuthenticated(true);
          }
        }
      }
    } catch (error: any) {
      // 에러 코드별 처리
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('로그인 취소됨');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('로그인 진행 중');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('Google Play 서비스 이용 불가');
      } else {
        console.log('기타 오류:', error.message);
      }
    }
  };

  const loginWithNaver = async () => {
    try {
      const result = await authorize(naverConfig);

      // 서버로 토큰 전달
      const response = await axios.post(
        `${BASE_URL}${API_PREFIX}/auth/naver/`,
        {
          access_token: result.accessToken,
        },
      );

      if (response.status === 200) {
        navigation.navigate('Nickname');
      }
    } catch (error) {
      console.log('네이버 로그인 에러:', error);
    }
  };

  const loginWithKakao = async () => {
    try {
      const result = await authorize(kakaoConfig);

      // 서버로 토큰 전달
      const response = await axios.post(
        `${BASE_URL}${API_PREFIX}/auth/kakao/`,
        {
          access_token: result.accessToken,
        },
      );

      if (response.status === 200) {
        navigation.navigate('Nickname');
      }
    } catch (error) {
      console.log('카카오 로그인 에러:', error);
    }
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true} // StatusBar가 투명하게 처리되도록 설정
      />
      <Image
        source={require('../assets/images/login_background.png')}
        style={styles.backgroundImage}
      />
      <View style={styles.overlay} />
      <LinearGradient
        start={{x: 0.5, y: 0}} // 중앙 상단
        end={{x: 0.5, y: 1}} // 중앙 하단
        locations={[0, 0.6]} // 시작과 끝 색상의 위치
        colors={['#1CD7AE', '#FFFFFF']} // 시작과 끝 색상
        style={styles.backgroundGradient}
      />

      <SafeAreaView style={styles.safeArea}>
        <View style={styles.content}>
          <View style={styles.flexBox}>
            <Image
              source={require('../assets/images/logo_main_1.png')}
              style={styles.logoImage}
            />
            <Text style={styles.logoTitle}>가는김에</Text>
          </View>
          <Text style={styles.subtitle}>
            우리가 어디에 있든 서로가 있다면, 가는김에
          </Text>
        </View>
        <View style={styles.buttonArea}>
          <View
            style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: 10,
            }}>
            <View style={styles.shortBar} />
            <Text
              style={{
                color: '#1B1B1B',
                fontSize: 14,
                fontFamily: 'Prentendard-Regular',
              }}>
              소셜로그인으로 계속하기
            </Text>
            <View style={styles.shortBar} />
          </View>
          <Pressable
            style={{
              ...styles.button,
              backgroundColor: 'white',
              borderWidth: 1,
              borderColor: '#F2F4F6',
            }}
            onPress={googleLogin}>
            <View style={styles.iconPosition}>
              <GoogleIcon />
            </View>
            <Text style={styles.buttonFont}>구글로 계속하기</Text>
          </Pressable>
          <Pressable
            style={{...styles.button, backgroundColor: '#03C75A'}}
            onPress={loginWithNaver}>
            <View style={styles.iconPosition}>
              <NaverIcon />
            </View>
            <Text style={{...styles.buttonFont, color: 'white'}}>
              네이버로 계속하기
            </Text>
          </Pressable>
          <Pressable
            style={{...styles.button, backgroundColor: '#FEE500'}}
            onPress={loginWithKakao}>
            <View style={styles.iconPosition}>
              <KakaoIcon />
            </View>
            <Text style={styles.buttonFont}>카카오로 계속하기</Text>
          </Pressable>
          <View style={styles.checkBoxContainer}>
            <CheckBox
              value={isSelected}
              onValueChange={setSelection}
              style={styles.checkbox}
            />
            <Text>로그인 유지</Text>
          </View>
          <Pressable
            style={{...styles.button}}
            onPress={() => {
              setIsAuthenticated(true);
            }}>
            <Text
              style={{
                color: '#8E979E',
                fontSize: 14,
                fontFamily: 'Prentendard-Regular',
              }}>
              로그인없이 둘러보기
            </Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    position: 'absolute', // 배경을 절대 위치로 설정
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    opacity: 0.6, // 배경 이미지의 투명도 조절
  },
  safeArea: {
    flex: 1,
    backgroundColor: 'transparent', // SafeAreaView의 배경 투명 처리
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 6,
    // 로그인 버튼, 입력 폼 등의 스타일 추가
  },
  backgroundGradient: {
    flex: 1, // 화면 전체를 덮도록 설정
    position: 'absolute', // 배경을 절대 위치로 설정
    width: '100%',
    height: '100%',
    opacity: 0.9, // 배경의 투명도 조절
  },
  overlay: {
    flex: 1,
    position: 'absolute', // 배경을 절대 위치로 설정
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.2)', // 오버레이 색상 및 투명도
  },
  logoImage: {
    width: 28,
    height: 28,
  },
  logoTitle: {
    fontSize: 20,
    fontFamily: 'Jalnan2',
    color: '#1B1B1B',
  },
  flexBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    gap: 8,
  },
  subtitle: {
    fontSize: 14,
    fontFamily: 'NanumSquareNeoOTF-Bd',
    color: '#005C48',
  },
  buttonArea: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  button: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    height: 48,
  },
  buttonFont: {
    fontSize: 16,
    fontFamily: 'Prentendard-Medium',
    lineHeight: 24,
  },
  iconPosition: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: 20,
  },
  shortBar: {
    width: 80,
    height: 1,
    backgroundColor: '#E6EAED',
  },
  checkBoxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
  },
  checkbox: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
});

export default LoginScreen;
