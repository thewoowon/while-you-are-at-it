import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AroundMainScreen from './AroundMainScreen';
import NotificationScreen from './NotificationScreen';
import DeliveryDetailScreen from './DeliveryDetailScreen';

// 스택 필요

const AroundStack = createStackNavigator();

const AroundScreen = () => {
  return (
    <AroundStack.Navigator>
      <AroundStack.Screen
        name="AroundMain"
        component={AroundMainScreen}
        options={{headerShown: false}}
      />
      {/* // 주문 상세 화면 */}
      {/* <AroundStack.Screen
        name="Search"
        component={OrderScreen}
        options={{headerShown: false}}
      /> */}
      {/* // 전달 상세 화면 */}
      <AroundStack.Screen
        name="DeliveryDetail"
        component={DeliveryDetailScreen}
        options={{headerShown: false}}
      />
      <AroundStack.Screen
        name="Notification"
        component={NotificationScreen}
        options={{headerShown: false}}
      />
    </AroundStack.Navigator>
  );
};

export default AroundScreen;
