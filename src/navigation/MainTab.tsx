import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import {DeliveryScreen, MyScreen, OrderScreen, AroundScreen} from '../screens';
import {AroundIcon, DeliveryIcon, OrderIcon, MyIcon} from '../components/Icons';
import {Text} from 'react-native';
import ChatScreen from '../screens/ChatScreen';

const Tab = createBottomTabNavigator();

const MainTab = () => (
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
      name="Around"
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
      name="Delivery"
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
      name="Order"
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
      name="MyPage"
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
    <Tab.Screen
      name="Chat"
      component={ChatScreen}
      options={{
        headerShown: false,
        tabBarItemStyle: {
          display: 'none',
        },
      }}
    />
  </Tab.Navigator>
);

export default MainTab;
