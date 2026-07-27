import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';


import SplashScreen from '../screens/Splash/SplashScreen';
import AuthNavigator from './AuthNavigator';
import AppStack from './AppStack';

export type RootStackParamList = {
  Splash: undefined;
  Auth: undefined;
  App: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="Splash"
        component={SplashScreen}
      />

      <Stack.Screen
        name="Auth"
        component={AuthNavigator}
      />

      <Stack.Screen
        name="App"
        component={AppStack}
      />
    </Stack.Navigator>
  );
}