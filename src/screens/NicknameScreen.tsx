import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  Platform,
} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {LeftArrowIcon, RefreshIcon, RemoveIcon} from '../components/Icons';
import {useAuth} from '../hooks';
import axios from 'axios';
import {API_PREFIX} from '../constants';
import {useDebounce} from '../hooks';

const BASE_URL = Platform.select({
  ios: 'http://127.0.0.1:8000', // iOS 시뮬레이터
  android: 'http://127.0.0.1:8000', // Android 에뮬레이터
});

const NicknameScreen = ({navigation, route}: any) => {
  const [nickname, setNickname] = useState('');
  const [warning, setWarning] = useState('');
  const {setIsAuthenticated} = useAuth();
  const [isNicknameValid, setIsNicknameValid] = useState(false);
  const debouncedString = useDebounce(nickname, 500);

  const onChangeText = async (text: string) => {
    setNickname(text);
    // 유효하다면
    if (await validationCheck(text)) {
      setIsNicknameValid(true);
      return;
    }

    setIsNicknameValid(false);
  };

  const validationCheck = async (nickname: string): Promise<boolean> => {
    if (nickname.length < 2) {
      setWarning('닉네임은 최소 2글자 이상이어야 합니다');
      return false;
    }

    const response = await axios.get(
      `${BASE_URL}${API_PREFIX}/users/nickname/${nickname}`,
    );

    if (!response.data.is_available) {
      setWarning('존재하는 닉네임입니다');
      return false;
    }

    const regex = /씨발|새끼/g;

    if (regex.test(nickname)) {
      setWarning('비속어는 포함할 수 없습니다');
      return false;
    }

    setWarning('사용할 수 있는 닉네임입니다');
    return true;
  };
  const onComplete = async () => {
    if (isNicknameValid) {
      const response = await axios.put(`${BASE_URL}${API_PREFIX}/users/me`, {
        nickname,
      });

      if (response.status === 201) {
        setIsAuthenticated(true);
      }
    }
  };

  useEffect(() => {
    onChangeText(debouncedString);
  }, [debouncedString]);

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
          <Text style={styles.headerText}>{'프로필 설정'}</Text>
        </View>
        <View style={styles.layout}>
          <Text style={styles.title}>닉네임을 설정해주세요</Text>
          <View style={styles.inputContainer}>
            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.input}
                placeholder="닉네임을 입력해주세요"
                placeholderTextColor={'#8E979E'}
                defaultValue=""
                value={nickname}
                onChangeText={setNickname}
              />
              <View style={styles.iconContainer}>
                {nickname.length > 0 ? (
                  <Pressable
                    onPress={() => {
                      setNickname('');
                    }}>
                    <RemoveIcon />
                  </Pressable>
                ) : null}
                {nickname.length > 0 ? (
                  <Pressable
                    onPress={() => {
                      validationCheck(nickname);
                    }}>
                    <RefreshIcon />
                  </Pressable>
                ) : null}
              </View>
            </View>
            <Text
              style={{
                ...styles.warning,
                color: isNicknameValid ? '#1CD7AE' : '#FF0000',
              }}>
              {warning}
            </Text>
          </View>
        </View>
        <View
          style={{
            width: '100%',
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
            onPress={onComplete}
            disabled={!isNicknameValid}
            style={({pressed}) => [
              {
                width: '100%',
                padding: 16,
                borderRadius: 12,
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
              가입 완료하기
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
  input: {
    fontSize: 16,
    lineHeight: 24,
    color: '#1B1B1B',
    fontFamily: 'Pretendard-Medium',
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
  },
  inputWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#C7CDD1',
    paddingBottom: 10,
    paddingTop: 10,
    paddingLeft: 8,
    paddingRight: 8,
  },
  iconContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
  },
  layout: {
    flex: 1,
    paddingTop: 40,
    paddingLeft: 20,
    paddingRight: 20,
    gap: 12,
  },
  title: {
    fontSize: 18,
    color: '#1B1B1B',
    fontFamily: 'NanumSquareNeoOTF-Bd',
    fontWeight: 'bold',
  },
  warning: {
    fontSize: 14,
    color: '#FF0000',
    fontFamily: 'Pretendard-Regular',
    lineHeight: 22,
    paddingLeft: 8,
  },
});

export default NicknameScreen;
