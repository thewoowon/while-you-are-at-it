import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MyMainScreen from './MyMainScreen';
import PaymentDetailsScreen from './PaymentDetailsScreen';
import InquiryDetailsScreen from './InquiryDetailsScreen';
import ProfileEditScreen from './ProfileEditScreen';
import CustomerServiceScreen from './CustomerServiceScreen';
import AnnouncementScreen from './AnnouncementScreen';

// 스택 필요

const MyStack = createStackNavigator();

const MyScreen = () => {
  return (
    <MyStack.Navigator>
      <MyStack.Screen
        name="MyMain"
        component={MyMainScreen}
        options={{headerShown: false}}
      />
      <MyStack.Screen
        name="PaymentDetails"
        component={PaymentDetailsScreen}
        options={{headerShown: false}}
      />
      <MyStack.Screen
        name="InquiryDetails"
        component={InquiryDetailsScreen}
        options={{headerShown: false}}
      />
      <MyStack.Screen
        name="ProfileEdit"
        component={ProfileEditScreen}
        options={{headerShown: false}}
      />
      <MyStack.Screen
        name="CustomerService"
        component={CustomerServiceScreen}
        options={{headerShown: false}}
      />
      <MyStack.Screen
        name="Announcement"
        component={AnnouncementScreen}
        options={{headerShown: false}}
      />
    </MyStack.Navigator>
  );
};

export default MyScreen;
