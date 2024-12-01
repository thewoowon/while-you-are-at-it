import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SearchScreen from './SearchScreen';
import OrderMainScreen from './OrderMainScreen';
import CompanyInfoScreen from './CompanyInfoScreen';
import OrderSheetScreen from './OrderSheetScreen';
import CameraScreen from './CameraScreen';
import NotificationScreen from './NotificationScreen';
import CompleteScreen from './CompleteScreen';

// 스택 필요

const OrderStack = createStackNavigator();

const OrderScreen = () => {
  return (
    <OrderStack.Navigator>
      <OrderStack.Screen
        name="OrderMain"
        component={OrderMainScreen}
        options={{headerShown: false}}
      />
      <OrderStack.Screen
        name="Search"
        component={SearchScreen}
        options={{headerShown: false, animationEnabled: false}}
      />
      <OrderStack.Screen
        name="CompanyInfo"
        component={CompanyInfoScreen}
        options={{headerShown: false}}
      />
      <OrderStack.Screen
        name="OrderSheet"
        component={OrderSheetScreen}
        options={{headerShown: false}}
      />
      <OrderStack.Screen
        name="Camera"
        component={CameraScreen}
        options={{headerShown: false}}
      />
      <OrderStack.Screen
        name="Notification"
        component={NotificationScreen}
        options={{headerShown: false}}
      />
      <OrderStack.Screen
        name="Complete"
        component={CompleteScreen}
        options={{headerShown: false}}
      />
    </OrderStack.Navigator>
  );
};

export default OrderScreen;
