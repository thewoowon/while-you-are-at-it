import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from './src/screens/HomeScreen';
import {DeliveryScreen, MyScreen, OrderScreen} from './src/screens';
import {
  AroundIcon,
  DeliveryIcon,
  OrderIcon,
  MyIcon,
} from './src/components/Icons';

const Tab = createBottomTabNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
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
        }}>
        <Tab.Screen
          name="주변"
          component={HomeScreen}
          options={{
            headerShown: false,
            tabBarIcon: () => <AroundIcon />,
          }}
        />
        <Tab.Screen
          name="전달"
          component={DeliveryScreen}
          options={{
            headerShown: false,
            tabBarIcon: () => <DeliveryIcon />,
          }}
        />
        <Tab.Screen
          name="주문"
          component={OrderScreen}
          options={{
            headerShown: false,
            tabBarIcon: () => <OrderIcon />,
          }}
        />
        <Tab.Screen
          name="내 정보"
          component={MyScreen}
          options={{
            headerShown: false,
            tabBarIcon: () => <MyIcon />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
