
import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
} from "react-native";

import SettingsItem from "../../components/settings/SettingItem";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { CompositeNavigationProp, useNavigation } from "@react-navigation/native";
import type { StackNavigationProp } from "@react-navigation/stack";
import type { AppStackParamList } from "../../navigation/AppStack";
import AddressCard from "../../components/address/Addresscard";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";


interface SettingsItemProps {
  icon: string;
  title: string;
  subtitle?: string;
  danger?: boolean;
  onPress?: () => void;
}


export default function SettingsScreen() {

  const navigation =
  useNavigation<NativeStackNavigationProp<AppStackParamList>>();


  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>Settings</Text>

        <SettingsItem
          icon="account-circle"
          title="My Profile"
          subtitle="Manage your account information"
          onPress={() => navigation.navigate("Profile")}
        />

        <SettingsItem
          icon="map-marker"
          title="Saved Addresses"
          subtitle="Manage pickup locations"
          onPress={() => navigation.navigate("SavedAddressesScreen")}
        />

        <SettingsItem
          icon="credit-card-outline"
          title="Payment Methods"
          subtitle="Manage your saved payment methods"
          onPress={() => {
            console.log(navigation.getState());
            navigation.navigate("PaymentMethodsScreen");
          }}
        />

        <SettingsItem
          icon="bell-outline"
          title="Notifications"
          subtitle="Push notifications & reminders"
          onPress={() => navigation.navigate("NotificationScreen")}
        />

        <SettingsItem
          icon="help-circle-outline"
          title="Help & Support"
          subtitle="FAQs and customer support"
        />

        <SettingsItem
          icon="shield-account-outline"
          title="Privacy Policy"
          subtitle="Terms & Privacy"
        />

        <SettingsItem
          icon="logout"
          title="Logout"
          danger
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F8FC",
  },

  content: {
    padding: 18,
    paddingBottom: 100,
  },

  title: {
    fontSize: 30,
    fontWeight: "700",
    color: "#1F2937",
    marginBottom: 24,
  },
});