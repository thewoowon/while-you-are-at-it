import React, {useEffect} from 'react';

import {NavigationContainer} from '@react-navigation/native';

import Toast from 'react-native-toast-message';

import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {GOOGLE_IOS_CLIENT_ID, GOOGLE_AOS_CLIENT_ID} from '@env';
import {AuthProvider} from './src/contexts';
import RootNavigator from './src/navigation/RootNavigator';

const googleSigninConfigure = () => {
  GoogleSignin.configure({
    iosClientId: GOOGLE_IOS_CLIENT_ID,
    webClientId: GOOGLE_AOS_CLIENT_ID,
  });
};

function App(): React.JSX.Element {
  useEffect(() => {
    googleSigninConfigure();
  }, []);

  return (
    <AuthProvider>
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
        <RootNavigator />
        <Toast />
      </NavigationContainer>
    </AuthProvider>
  );
}

export default App;
