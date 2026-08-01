import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import BottomTabNavigator from "./BottomTabNavigator";
import ProfileScreen from "../screens/Profile/ProfileScreen";
import SavedAddressesScreen from "../screens/Address/SavedAddressesScreen";
import PaymentMethodsScreen from "../screens/Payment/PaymentMethodsScreen";
import PaymentDetailsScreen from "../screens/Payment/PaymentDetailsScreen";
import EditCardScreen from "../screens/Payment/EditCardScreen";
import NotificationScreen from "../screens/Notifications/NotificationScreen";
import ReportIssueScreen from "../screens/Complaint/ReportIssueScreen";
import IssueSubmittedScreen from "../screens/Complaint/IssueSubmittedScreen";

export type AppStackParamList = {
  MainTabs: undefined;
  Profile: undefined;
  SavedAddressesScreen: undefined;
  PaymentMethodsScreen: undefined;
  PaymentDetailsScreen: undefined;
  AddCardScreen: undefined;
  EditCardScreen: undefined;
  AddUPIScreen: undefined;
  NotificationScreen: undefined;
  ReportIssueScreen: undefined;
  IssueSubmittedScreen: undefined;
};

const Stack = createStackNavigator<AppStackParamList>();

export default function AppStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="MainTabs"
        component={BottomTabNavigator}
      />

      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
      />

      <Stack.Screen
        name="SavedAddressesScreen"
        component={SavedAddressesScreen}
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


    </Stack.Navigator>
    
  );
}