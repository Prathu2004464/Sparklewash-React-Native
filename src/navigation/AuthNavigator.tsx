import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../screens/Auth/LoginScreen';
import RegisterScreen from '../screens/Auth/RegisterScreen';
import ForgotPasswordScreen from '../screens/Auth/ForgotPasswordScreen';
import OTPVerificationScreen from '../screens/Auth/OTPVerificationScreen';
import ResetPasswordScreen from '../screens/Auth/ResetPasswordScreen';
import AddVehicleScreen from "../screens/Vehicles/AddVehicleScreen";
import ReviewBookingScreen from '../screens/Booking/ReviewBookingScreen';
import BookingSuccessScreen from '../screens/Booking/BookingSuccessScreen';
import SuccessAnimationScreen from '../screens/Auth/SuccessAnimationScreen';

export type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
  ForgotPassword: undefined;
  OTPVerification: undefined;
  ResetPassword: undefined;
  AddVehicleScreen: undefined;
  SuccessAnimationScreen: undefined;

  ReviewBookingScreen: {
    vehicle: any;
    package: any;
    customer: any;
  };

  BookingSuccessScreen: {
    vehicle: any;
    package: any;
    customer: any;
  };
};

const Stack = createNativeStackNavigator<AuthStackParamList>();

export default function AuthNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Login"
        component={LoginScreen}
      />

      <Stack.Screen
        name="Register"
        component={RegisterScreen}
      />

      <Stack.Screen
              name="SuccessAnimationScreen"
              component={SuccessAnimationScreen}
              options={{ headerShown: false }}
            />

      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPasswordScreen}
      />

      <Stack.Screen
        name="OTPVerification"
        component={OTPVerificationScreen}
      />

      <Stack.Screen
        name="ResetPassword"
        component={ResetPasswordScreen}
      />

      <Stack.Screen
        name="AddVehicleScreen"
        component={AddVehicleScreen}
      />

        <Stack.Screen
        name="ReviewBookingScreen"
        component={ReviewBookingScreen}
      />
        <Stack.Screen
        name="BookingSuccessScreen"
        component={BookingSuccessScreen}
      />
      
    </Stack.Navigator>
  );
}