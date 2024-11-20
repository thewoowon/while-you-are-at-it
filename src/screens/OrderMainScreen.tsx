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
import {RingIcon, SearchIcon} from '../components/Icons';
import {ORDER_DATA} from '../data';

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
        <View style={styles.header}>
          {/* 상단 헤더 */}
          <Text style={styles.headerText}>주문</Text>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              gap: 16,
            }}>
            <Pressable
              onPress={() => {
                navigation.navigate('Search');
              }}>
              <SearchIcon />
            </Pressable>
            <Pressable
              onPress={() => {
                navigation.navigate('Notification');
              }}>
              <RingIcon />
            </Pressable>
          </View>
        </View>
        <ScrollView style={styles.orderList}>
          {ORDER_DATA.length > 0 ? (
            ORDER_DATA.map(order => {
              return (
                <Pressable
                  key={order.id}
                  style={{
                    padding: 20,
                    borderRadius: 10,
                  }}
                  onPress={() => {
                    navigation.navigate('CompanyInfo');
                  }}>
                  <Text
                    style={{
                      color: '#394245',
                      fontSize: 16,
                      fontFamily: 'Pretendard-SeimBold',
                    }}>
                    {order.title}
                  </Text>
                  <Text
                    style={{
                      color: '#6E7881',
                      fontSize: 14,
                      fontFamily: 'Pretendard-Regular',
                    }}>
                    {order.description}
                  </Text>
                  <Text
                    style={{
                      color: '#6E7881',
                      fontSize: 14,
                      fontFamily: 'Pretendard-Regular',
                    }}>
                    {order.dueDate}
                  </Text>
                </Pressable>
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
        </ScrollView>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  },
});

export default OrderMainScreen;
