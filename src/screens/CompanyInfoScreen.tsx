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
  LeftChevronIcon,
  MiniPhoneIcon,
  MiniStarIcon,
  MiniWatchIcon,
} from '../components/Icons';
import NaverMap from '../components/NaverMap';

const CompanyInfoScreen = ({navigation, route}: any) => {
  const {company} = route.params;
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
          <Text style={styles.headerText}>{company.name}</Text>
        </View>
        <View style={styles.container}>
          <View
            style={{
              height: 141,
              maxHeight: 141,
            }}>
            <NaverMap />
          </View>
          <View>
            <Text>{company.name}</Text>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: 4,
              }}>
              <MiniStarIcon />
              <Text
                style={{
                  color: '#394245',
                  fontSize: 14,
                  fontFamily: 'Pretendard-Medium',
                }}>{`5.0 (후기 250개)`}</Text>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: 4,
              }}>
              <MiniWatchIcon />
              <Text
                style={{
                  color: '#394245',
                  fontSize: 14,
                  fontFamily: 'Pretendard-Medium',
                }}>
                영업시간
              </Text>
              <Text
                style={{
                  color: '#394245',
                  fontSize: 14,
                  fontFamily: 'Pretendard-Medium',
                }}>
                오전 09:30 ~ 오후 06:00
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
                  color: '#394245',
                  fontSize: 14,
                  fontFamily: 'Pretendard-Medium',
                }}>
                전화번호
              </Text>
              <Text
                style={{
                  color: '#394245',
                  fontSize: 14,
                  fontFamily: 'Pretendard-Medium',
                }}>
                02.123.4567
              </Text>
            </View>
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
  },
  headerText: {
    color: '#181818',
    fontSize: 18,
    fontFamily: 'Pretendard-SeimBold',
  },
});

export default CompanyInfoScreen;
