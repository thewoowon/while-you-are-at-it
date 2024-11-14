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
} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

type RootStackParamList = {
  OrderMain: undefined;
  Search: undefined;
  CompanyInfo: undefined;
  OrderSheet: undefined;
  Camera: undefined;
};

const OrderMainScreen = ({navigation}: any) => {
  return (
    <GestureHandlerRootView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#6a51ae"
        translucent={false}
      />
      <SafeAreaView style={styles.backgroundStyle}>
        <View style={styles.container}>
          <Text>Order Screen</Text>
        </View>
        <Pressable
          onPress={() => {
            // stack navigation
            navigation.navigate('Search');
          }}>
          <Text>Pressable</Text>
        </Pressable>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundStyle: {
    flex: 1,
  },
});

export default OrderMainScreen;
