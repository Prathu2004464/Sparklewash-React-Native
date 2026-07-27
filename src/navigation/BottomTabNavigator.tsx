import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialIcons from "@react-native-vector-icons/material-design-icons";

import OverviewScreen from "../screens/Overview/OverviewScreen";
import HistoryScreen from "../screens/History/HistoryScreen";
import VehiclesScreen from "../screens/Vehicles/VehiclesScreen";
import BillingScreen from "../screens/Billing/BillingScreen";
import SettingsScreen from "../screens/Settings/SettingsScreen";

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,

        tabBarActiveTintColor: "#1565C0",
        tabBarInactiveTintColor: "#9CA3AF",

        tabBarStyle: {
          height: 70,
          paddingTop: 8,
          paddingBottom: 8,
          backgroundColor: "#FFFFFF",
          borderTopWidth: 1,
          borderTopColor: "#ECECEC",
        },

        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "600",
        },

        tabBarIcon: ({ color, size }) => {
          switch (route.name) {
            case "Overview":
          return (
            <MaterialIcons
              name="home-outline"
              size={size}
              color={color}
            />
          );

        case "History":
          return (
            <MaterialIcons
              name="history"
              size={size}
              color={color}
            />
          );

        case "Vehicles":
          return (
            <MaterialIcons
              name="car-outline"
              size={size}
              color={color}
            />
          );

        case "Billing":
          return (
            <MaterialIcons
              name="credit-card-outline"
              size={size}
              color={color}
            />
          );

        case "Settings":
          return (
            <MaterialIcons
              name="cog-outline"
              size={size}
              color={color}
            />
          );
          }
        },
      })}
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