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
import {HomeIcon, LeftArrowIcon, PlusIcon} from '../components/Icons';

const ChatScreen = ({navigation, route}: any) => {
  const [messages, setMessages] = useState([]);
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
              gap: 4,
            }}>
            <Pressable
              onPress={() => {
                navigation.goBack();
              }}>
              <LeftArrowIcon />
            </Pressable>
            <Pressable
              onPress={() => {
                navigation.navigate('Around');
              }}>
              <HomeIcon />
            </Pressable>
          </View>
          <Text style={styles.headerText}>{'헤파이토스'}</Text>
        </View>
        <View style={styles.layout}>
          <View style={styles.chatMain}>
            {messages.length === 0 ? (
              <View
                style={{
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: 16,
                }}>
                <Text style={styles.voidText}>
                  헤파이토스의 망치님과의 채팅방입니다.
                </Text>
                <Text style={styles.voidText}>
                  타인에게 피해가 되는 언행은 삼가해주세요
                </Text>
              </View>
            ) : (
              messages.map((message, index) => {
                return (
                  <View key={index}>
                    <Text>{message}</Text>
                  </View>
                );
              })
            )}
          </View>
          <View style={styles.inputContainer}>
            <View style={styles.iconContainer}>
              <Pressable
                onPress={() => {
                  console.log('send message');
                }}>
                <PlusIcon />
              </Pressable>
            </View>
            <TextInput
              style={styles.input}
              placeholder="메시지를 입력해주세요"
              placeholderTextColor={'#8E979E'}
              defaultValue=""
            />
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
    borderBottomWidth: 1,
    borderColor: '#F2F4F6',
  },
  headerText: {
    color: '#181818',
    fontSize: 18,
    fontFamily: 'Pretendard-SemiBold',
  },
  layout: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  chatMain: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth: 1,
    borderColor: '#F2F4F6',
    gap: 22,
    backgroundColor: 'white',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
  },
  iconContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
  },
  input: {
    flex: 1,
    height: 40,
    padding: 10,
    fontFamily: 'Pretendard-Regular',
    fontSize: 14,
    backgroundColor: '#F2F4F6',
    borderRadius: 6,
    maxHeight: 42,
  },
  voidText: {
    fontFamily: 'Pretendard-Regular',
    fontSize: 14,
    color: '#C7CDD1',
    lineHeight: 20,
  },
});

export default ChatScreen;
