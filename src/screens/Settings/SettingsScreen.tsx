
import React, { useEffect, useState } from 'react';
import { Alert } from "react-native";
import { removeToken } from "../../services/AsyncStorageService";
import API from '../../services/api';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  ActivityIndicator,
} from 'react-native';

import {
  useFocusEffect,
} from '@react-navigation/native';

import SettingsItem from "../../components/settings/SettingItem";
import MaterialIcons from '@react-native-vector-icons/material-design-icons';
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

  const [profile, setProfile] = useState<any>(null);
  const [notifications, setNotifications] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const handleLogout = () => {
  Alert.alert(
    'Logout',
    'Are you sure you want to logout?',
    [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Logout',
        style: 'destructive',
        onPress: async () => {
          try {
            await removeToken();

            Alert.alert(
              'Logged out',
              'You have been logged out successfully.'
            );
          } catch (error) {
            console.log('Logout Error:', error);
            Alert.alert('Error', 'Failed to logout.');
          }
        },
      },
    ]
  );
};

      useFocusEffect(
        React.useCallback(() => {
          loadSettings();
        }, [])
      );

    const loadSettings = async () => {
      try {
        setLoading(true);

        const [profileRes, notificationRes] = await Promise.all([
          API.get('/customer/profile'),
          API.get('/customer/notification-preferences'),
        ]);

        setProfile(profileRes.data.profile);
        setNotifications(notificationRes.data.preferences);
        console.log('SETTINGS PROFILE:', profileRes.data.profile);
        console.log('SETTINGS NOTIFICATIONS:', notificationRes.data.preferences);
      } catch (error) {
        console.log('SETTINGS LOAD ERROR:', error);
      } finally {
        setLoading(false);
      }
    };

    if (loading) {
      return (
        <SafeAreaView style={styles.container}>
          <ActivityIndicator
            size="large"
            color="#1565C0"
            style={{ flex: 1 }}
          />
        </SafeAreaView>
      );
    }


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
            title="Saved Address"
            subtitle={
              profile?.address
                ? profile.address
                : 'No address saved'
            }
            onPress={() => navigation.navigate('SavedAddressesScreen')}
          />

        <SettingsItem
          icon="credit-card-outline"
          title="Payment Methods"
          subtitle="No payment method added"
          onPress={() =>
            navigation.navigate('PaymentMethodsScreen')
          }
        />

        <SettingsItem
            icon="bell-outline"
            title="Notifications"
            subtitle={
              notifications
                ? `Reminders ${
                    notifications.wash_reminders ? 'ON' : 'OFF'
                  } • Alerts ${
                    notifications.subscription_alerts ? 'ON' : 'OFF'
                  }`
                : 'Configure notifications'
            }
            onPress={() =>
              navigation.navigate('NotificationScreen')
            }
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
          onPress={handleLogout}
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