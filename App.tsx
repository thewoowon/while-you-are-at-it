import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {
  DeliveryScreen,
  MyScreen,
  OrderScreen,
  AroundScreen,
} from './src/screens';
import {
  AroundIcon,
  DeliveryIcon,
  OrderIcon,
  MyIcon,
} from './src/components/Icons';
import {Text} from 'react-native';
import Toast from 'react-native-toast-message';

const Tab = createBottomTabNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer
      theme={{
        dark: false,
        colors: {
          primary: '#FF6B6B',
          background: '#FFFFFF',
          card: '#FFFFFF',
          text: '#000000',
          border: '#E5E5E5',
          notification: '#FF6B6B',
        },
      }}>
      <Tab.Navigator
        screenOptions={{
          // 간격 조정
          tabBarStyle: {
            height: 86,
            paddingVertical: 10,
          },
          tabBarItemStyle: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 5,
          },
          tabBarLabelStyle: {
            fontSize: 13,
            fontFamily: 'Pretendard-Medium',
            color: '#8E979E',
          },
          tabBarActiveTintColor: 'blue', // 활성화된 탭의 텍스트 색상
          tabBarInactiveTintColor: 'gray', // 비활성화된 탭의 텍스트 색상
        }}>
        <Tab.Screen
          name="주변"
          component={AroundScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({focused, color}) => (
              <AroundIcon color={focused ? 'black' : '#C7CDD1'} />
            ),
            tabBarLabel: ({focused, color}) => (
              <Text
                style={{
                  fontFamily: 'Pretendard-Medium',
                  fontSize: 13,
                  color: focused ? '#192628' : '#8E979E',
                }}>
                주변
              </Text>
            ),
          }}
        />
        <Tab.Screen
          name="전달"
          component={DeliveryScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({focused, color}) => (
              <DeliveryIcon color={focused ? 'black' : '#C7CDD1'} />
            ),
            tabBarLabel: ({focused, color}) => (
              <Text
                style={{
                  fontFamily: 'Pretendard-Medium',
                  fontSize: 13,
                  color: focused ? '#192628' : '#8E979E',
                }}>
                전달
              </Text>
            ),
          }}
        />
        <Tab.Screen
          name="주문"
          component={OrderScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({focused, color}) => (
              <OrderIcon color={focused ? 'black' : '#C7CDD1'} />
            ),
            tabBarLabel: ({focused, color}) => (
              <Text
                style={{
                  fontFamily: 'Pretendard-Medium',
                  fontSize: 13,
                  color: focused ? '#192628' : '#8E979E',
                }}>
                주문
              </Text>
            ),
          }}
        />
        <Tab.Screen
          name="내 정보"
          component={MyScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({focused, color}) => (
              <MyIcon color={focused ? 'black' : '#C7CDD1'} />
            ),
            tabBarLabel: ({focused, color}) => (
              <Text
                style={{
                  fontFamily: 'Pretendard-Medium',
                  fontSize: 13,
                  color: focused ? '#192628' : '#8E979E',
                }}>
                내 정보
              </Text>
            ),
          }}
        />
      </Tab.Navigator>
      <Toast />
    </NavigationContainer>
  );
}

export default App;
