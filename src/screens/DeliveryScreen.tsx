import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import DeliveryMainScreen from './DeliveryMainScreen';
import DeliveryDetailScreen from './DeliveryDetailScreen';
import DeliveryCreateScreen from './DeliveryCreateScreen';

// 스택 필요

const AroundStack = createStackNavigator();

const DeliveryScreen = ({navigation, route}: any) => {
  return (
    <AroundStack.Navigator>
      <AroundStack.Screen
        name="DeliveryMain"
        component={DeliveryMainScreen}
        options={{headerShown: false}}
      />
      <AroundStack.Screen
        name="DeliveryCreate"
        component={DeliveryCreateScreen}
        options={{headerShown: false}}
      />
      {/* // 전달 상세 화면 */}
      <AroundStack.Screen
        name="DeliveryDetail"
        component={DeliveryDetailScreen}
        options={{headerShown: false}}
      />
    </AroundStack.Navigator>
  );
};

export default DeliveryScreen;
