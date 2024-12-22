import React, {useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {LeftChevronIcon, RefreshIcon, RemoveIcon} from '../components/Icons';

const NicknameScreen = ({navigation, route}: any) => {
  const [nickname, setNickname] = useState('');
  const [warning, setWarning] = useState(
    '닉네임은 최소 2글자 이상이어야 합니다',
  );

  const onChangeText = (text: string) => {
    setNickname(text);
    if (text.length < 2) {
      setWarning('닉네임은 최소 2글자 이상이어야 합니다');
    } else {
      setWarning('');
    }
  };

  // 닉네임은 최소 2글자 이상이어야 합니다
  // 존재하는 닉네임입니다
  // 사용할 수 있는 닉네임입니다
  // 비속어는 포함할 수 없습니다
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
              <LeftChevronIcon />
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
                onChangeText={onChangeText}
              />
              <View style={styles.iconContainer}>
                {nickname.length > 0 ? (
                  <Pressable
                    onPress={() => {
                      navigation.goBack();
                    }}>
                    <RemoveIcon />
                  </Pressable>
                ) : null}
                {nickname.length > 0 ? (
                  <Pressable
                    onPress={() => {
                      navigation.goBack();
                    }}>
                    <RefreshIcon />
                  </Pressable>
                ) : null}
              </View>
            </View>
            <Text style={styles.warning}>{warning}</Text>
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
