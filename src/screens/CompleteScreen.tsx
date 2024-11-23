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
import {BigHeartIcon} from '../components/Icons';

const CompleteScreen = ({navigation, route}: any) => {
  return (
    <GestureHandlerRootView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#6a51ae"
        translucent={false}
      />
      <SafeAreaView style={styles.backgroundStyle}>
        <View style={styles.container}>
          <BigHeartIcon />
          <Text
            style={{
              fontSize: 20,
              fontFamily: 'Pretendard-SemiBold',
              color: '#192628',
            }}>
            주문이 완료되었습니다!
          </Text>
        </View>
        <View style={styles.buttons}>
          <Pressable
            onPress={() => navigation.navigate('주변')}
            style={{
              width: '100%',
              backgroundColor: '#E8FBF7',
              paddingTop: 16,
              paddingBottom: 16,
              borderRadius: 6,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 16,
                fontFamily: 'Pretendard-SemiBold',
                color: '#1CD7AE',
              }}>
              홈으로
            </Text>
          </Pressable>
          <Pressable
            onPress={() => navigation.navigate('주변')}
            style={{
              width: '100%',
              backgroundColor: '#1CD7AE',
              paddingTop: 16,
              paddingBottom: 16,
              borderRadius: 6,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 16,
                fontFamily: 'Pretendard-SemiBold',
                color: 'white',
              }}>
              주문서 확인하기
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundStyle: {
    flex: 1,
    width: '100%',
  },
  buttons: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    width: '100%',
    padding: 20,
  },
});

export default CompleteScreen;
