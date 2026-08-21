import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BottomTabNavigator from './BottomTabNavigator';

import ProfileScreen from '../screens/Profile/ProfileScreen';
import SavedAddressesScreen from '../screens/Address/SavedAddressesScreen';
import PaymentMethodsScreen from '../screens/Payment/PaymentMethodsScreen';
import PaymentDetailsScreen from '../screens/Payment/PaymentDetailsScreen';
import EditCardScreen from '../screens/Payment/EditCardScreen';
import AddUPIScreen from '../screens/Payment/AddUPIScreen';
import NotificationScreen from '../screens/Notifications/NotificationScreen';
import ReportIssueScreen from '../screens/Complaint/ReportIssueScreen';
import IssueSubmittedScreen from '../screens/Complaint/IssueSubmittedScreen';

import LoginScreen from '../screens/Auth/LoginScreen';
import RegisterScreen from '../screens/Auth/RegisterScreen';
import ForgotPasswordScreen from '../screens/Auth/ForgotPasswordScreen';
import OTPVerificationScreen from '../screens/Auth/OTPVerificationScreen';
import ResetPasswordScreen from '../screens/Auth/ResetPasswordScreen';

import AddVehicleScreen from '../screens/Vehicles/AddVehicleScreen';

import CustomerDetailsScreen from '../screens/Booking/CustomerDetailsScreen';
import PlanConfirmationScreen from '../screens/Booking/PlanConfirmationScreen';
import ReviewBookingScreen from '../screens/Booking/ReviewBookingScreen';
import BookingSuccessScreen from '../screens/Booking/BookingSuccessScreen';
import LiveTrackingScreen from '../screens/Booking/LiveTrackingScreen';
import PaymentScreen from '../screens/Billing/PaymentScreen';
import PaymentSuccessScreen from '../screens/Billing/PaymentSuccessScreen';
import EditProfileScreen from '../screens/Profile/EditProfileScreen';
import ChangePasswordScreen from '../screens/Profile/ChnagePasswordScreen';
import AddCardScreen from '../screens/Payment/AddCardScreen';
import SuccessAnimationScreen from '../screens/Auth/SuccessAnimationScreen';
import LoginSuccessAnimationScreen from '../screens/Auth/LoginSuccessAnimationScreen';

export type AppStackParamList = {
  MainTabs: undefined;

  Profile: undefined;
  EditProfileScreen: undefined;
  SavedAddressesScreen: undefined;
  PaymentMethodsScreen: undefined;
  PaymentDetailsScreen: undefined;
  AddCardScreen: undefined;
  EditCardScreen: undefined;   
  AddUPIScreen: undefined;
  NotificationScreen: undefined;
  ReportIssueScreen: undefined;
  IssueSubmittedScreen: undefined;

  Login: undefined;
  Register: undefined;
  ForgotPassword: undefined;
  OTPVerification: undefined;
  SuccessAnimationScreen: undefined;
  LoginSuccessAnimationScreen: undefined;
  ResetPassword: undefined;
  ChangePasswordScreen: undefined;

  // Booking Flow
  AddVehicleScreen: undefined;

  CustomerDetailsScreen: {
    vehicle: any;
    selectedPackage: any;
  };

  PlanConfirmationScreen: {
    vehicle: any;
    selectedPackage: any;
    customer: any;
  };

  ReviewBookingScreen: {
    vehicle: any;
    selectedPackage: any;
    customer: any;
  };

  BookingSuccessScreen: {
    vehicle: any;
    selectedPackage: any;
    customer: any;
  };

  LiveTrackingScreen: {
  booking?: any;
  };

  PaymentScreen: {
  bill: any;
  };

  PaymentSuccessScreen: {
    bill: any;
  };
};

const Stack = createNativeStackNavigator<AppStackParamList>();

export default function AppStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>

      {/* Main App */}
      <Stack.Screen
        name="MainTabs"
        component={BottomTabNavigator}
      />

      {/* Profile & Settings */}
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
      />

      <Stack.Screen
        name="EditProfileScreen"
        component={EditProfileScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="SavedAddressesScreen"
        component={SavedAddressesScreen}
      />

      <Stack.Screen
        name="AddCardScreen"
        component={AddCardScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="AddUPIScreen"
        component={AddUPIScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="PaymentMethodsScreen"
        component={PaymentMethodsScreen}
      />

      <Stack.Screen
        name="PaymentDetailsScreen"
        component={PaymentDetailsScreen}
      />

      <Stack.Screen
        name="EditCardScreen"
        component={EditCardScreen}
      />

      <Stack.Screen
        name="NotificationScreen"
        component={NotificationScreen}
      />

      <Stack.Screen
        name="ReportIssueScreen"
        component={ReportIssueScreen}
      />

      <Stack.Screen
        name="IssueSubmittedScreen"
        component={IssueSubmittedScreen}
      />

      {/* Authentication */}
      <Stack.Screen
        name="Login"
        component={LoginScreen}
      />

      <Stack.Screen
        name="Register"
        component={RegisterScreen}
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
        name="SuccessAnimationScreen"
        component={SuccessAnimationScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="LoginSuccessAnimationScreen"
        component={LoginSuccessAnimationScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="ResetPassword"
        component={ResetPasswordScreen}
      />

      {/* Booking Flow */}
      <Stack.Screen
        name="AddVehicleScreen"
        component={AddVehicleScreen}
      />

      <Stack.Screen
        name="CustomerDetailsScreen"
        component={CustomerDetailsScreen}
      />

      <Stack.Screen
        name="PlanConfirmationScreen"
        component={PlanConfirmationScreen}
      />

      <Stack.Screen
        name="ReviewBookingScreen"
        component={ReviewBookingScreen}
      />

      <Stack.Screen
        name="BookingSuccessScreen"
        component={BookingSuccessScreen}
      />

      <Stack.Screen
        name="LiveTrackingScreen"
        component={LiveTrackingScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="PaymentScreen"
        component={PaymentScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="PaymentSuccessScreen"
        component={PaymentSuccessScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="ChangePasswordScreen"
        component={ChangePasswordScreen}
        options={{ headerShown: false }}
      />

    </Stack.Navigator>
  );
}