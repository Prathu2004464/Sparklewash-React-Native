import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CustomTabBar from './CustomTabBar';

import OverviewScreen from "../screens/Overview/OverviewScreen";
import HistoryScreen from "../screens/History/HistoryScreen";
import VehiclesScreen from "../screens/Vehicles/VehiclesScreen";
import BillingScreen from "../screens/Billing/BillingScreen";
import SettingsScreen from "../screens/Settings/SettingsScreen";

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
    tabBar={(props) => <CustomTabBar {...props} />}
    screenOptions={{
      headerShown: false,
  }}
>
      <Tab.Screen
        name="Overview"
        component={OverviewScreen}
      />

      <Tab.Screen
        name="History"
        component={HistoryScreen}
      />

      <Tab.Screen
        name="Vehicles"
        component={VehiclesScreen}
      />

      <Tab.Screen
        name="Billing"
        component={BillingScreen}
      />

      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
      />
    </Tab.Navigator>
  );
}