import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SearchScreen from './SearchScreen';
import OrderMainScreen from './OrderMainScreen';
import CompanyInfoScreen from './CompanyInfoScreen';
import OrderSheetScreen from './OrderSheetScreen';
import CameraScreen from './CameraScreen';

// 스택 필요

const OrderStack = createStackNavigator();

const OrderScreen = () => {
  return (
    <OrderStack.Navigator>
      <OrderStack.Screen name="OrderMain" component={OrderMainScreen} />
      <OrderStack.Screen name="Search" component={SearchScreen} />
      <OrderStack.Screen name="CompanyInfo" component={CompanyInfoScreen} />
      <OrderStack.Screen name="OrderSheet" component={OrderSheetScreen} />
      <OrderStack.Screen name="Camera" component={CameraScreen} />
    </OrderStack.Navigator>
  );
};

export default OrderScreen;
