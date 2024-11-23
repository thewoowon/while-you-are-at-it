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
import {NOTIFICATION_DATA} from '../data';
import {AlarmIcon, LeftArrowIcon} from '../components/Icons';

const NotificationScreen = ({navigation, route}: any) => {
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
          <Text style={styles.headerText}>알림</Text>
        </View>
        {NOTIFICATION_DATA.length > 0 ? (
          NOTIFICATION_DATA.map(notification => {
            return (
              <View key={notification.id} style={styles.notificationItem}>
                <View style={styles.notificationCircle}>
                  <AlarmIcon />
                </View>
                <View
                  style={{
                    flex: 1,
                  }}>
                  <Text
                    style={{
                      color: '#394245',
                      fontSize: 16,
                      fontFamily: 'Pretendard-SemiBold',
                    }}>
                    {notification.title}
                  </Text>
                  <Text
                    style={{
                      color: '#6E7881',
                      fontSize: 14,
                      fontFamily: 'Pretendard-Regular',
                    }}>
                    {notification.description}
                  </Text>
                </View>
              </View>
            );
          })
        ) : (
          <View style={styles.container}>
            <Text>Order Screen</Text>
          </View>
        )}
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
  },
  headerText: {
    color: '#1F1F1F',
    fontSize: 18,
    fontFamily: 'Pretendard-SemiBold',
  },
  notificationItem: {
    padding: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 17,
  },
  notificationCircle: {
    width: 38,
    height: 38,
    borderRadius: 50,
    backgroundColor: '#E6EAED',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default NotificationScreen;
