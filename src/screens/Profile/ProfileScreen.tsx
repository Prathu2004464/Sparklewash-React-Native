import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, View } from 'react-native';
import API from '../../services/api';
import { removeToken } from '../../services/AsyncStorageService';

import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

import {
  useNavigation,
  useFocusEffect,
} from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AppStackParamList } from '../../navigation/AppStack';

import ProfileHeader from '../../components/profile/ProfileHeader';
import ProfileInfoCard from '../../components/profile/ProfileInfoCard';
import SubscriptionCard from '../../components/profile/SubscriptionCard';

import MaterialIcons from '@react-native-vector-icons/material-design-icons';

console.log('NEW PROFILE SCREEN LOADED');


export default function ProfileScreen() {
  const navigation =
    useNavigation<NativeStackNavigationProp<AppStackParamList>>();

    const [profile, setProfile] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [subscription, setSubscription] = useState<any>(null);

    useFocusEffect(
    React.useCallback(() => {
    loadProfile();
    loadSubscription();
   }, [])
   );

  const loadProfile = async () => {
  try {
    setLoading(true);
    setProfile(null);

    const response = await API.get('/customer/profile');

    console.log('PROFILE API RESPONSE:', response.data);

    setProfile(response.data.profile);
    console.log('LOGGED IN USER:', response.data.profile);
  } catch (error: any) {
    console.log('PROFILE ERROR:', error?.response?.data || error.message);

    Alert.alert('Error', 'Failed to load profile');
  } finally {
    setLoading(false);
  }
  };

  const loadSubscription = async () => {
  try {
    const response = await API.get('/customer/billing/unpaid');

    const plans = response.data.data || [];

    if (plans.length > 0) {
      setSubscription(plans[0]);
    } else {
      setSubscription(null);
    }
  } catch (error) {
    console.log('SUBSCRIPTION ERROR:', error);
    setSubscription(null);
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
        <Text style={styles.title}>Profile</Text>

        <ProfileHeader
          name={profile?.full_name || profile?.name || 'Customer'}
          email={profile?.email || 'No email'}
        />

        <ProfileInfoCard
          fullName={profile?.full_name || profile?.name || 'Customer'}
          email={profile?.email || 'No email'}
          phone={profile?.phone || 'Not added'}
          memberSince="January 2026"
        />

        {subscription ? (
            <SubscriptionCard
              plan={`${subscription.vehicle_type || 'Plan'} • ₹${subscription.total || subscription.amount}/month`}
              status="Active"
              expiryDate={subscription.to_date || 'Active'}
              remainingWashes={subscription.remaining_washes || 30}
            />
          ) : (
            <View style={styles.emptySubscription}>
              <MaterialIcons
                name="car-outline"
                size={48}
                color="#94A3B8"
              />

              <Text style={styles.emptyTitle}>No Active Subscription</Text>

              <Text style={styles.emptySubtitle}>
                Book a wash plan to see your subscription details here.
              </Text>
            </View>
          )}

        <Text style={styles.sectionTitle}>Account</Text>

            {/* Edit Profile */}
            <TouchableOpacity
              style={styles.accountButton}
              onPress={() => navigation.navigate('EditProfileScreen')}>

              <MaterialIcons
                name="pencil-outline"
                size={22}
                color="#1565C0"
              />

              <Text style={styles.accountButtonText}>Edit Profile</Text>

              <MaterialIcons
                name="chevron-right"
                size={24}
                color="#94A3B8"
              />
            </TouchableOpacity>

            {/* Change Password */}
            <TouchableOpacity
              style={styles.accountButton}
              onPress={() => navigation.navigate('ChangePasswordScreen')}>

              <MaterialIcons
                name="lock-outline"
                size={22}
                color="#1565C0"
              />

              <Text style={styles.accountButtonText}>Change Password</Text>

              <MaterialIcons
                name="chevron-right"
                size={24}
                color="#94A3B8"
              />
            </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F8FC',
  },

  content: {
    padding: 18,
    paddingBottom: 100,
  },

  title: {
    fontSize: 30,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 24,
  },

  editButton: {
    marginTop: 16,
    marginBottom: 12,
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    paddingVertical: 16,
    paddingHorizontal: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#D6E4F5',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
    elevation: 2,
  },

  editButtonText: {
    marginLeft: 8,
    color: '#1565C0',
    fontSize: 16,
    fontWeight: '700',
  },

  sectionTitle: {
  fontSize: 18,
  fontWeight: '700',
  color: '#1F2937',
  marginTop: 24,
  marginBottom: 14,
  },

  accountButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    paddingVertical: 16,
    paddingHorizontal: 18,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.04,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },

  accountButtonText: {
    flex: 1,
    marginLeft: 14,
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
  },

  emptySubscription: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    paddingVertical: 28,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 6,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.04,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },

  emptyTitle: {
    marginTop: 12,
    fontSize: 18,
    fontWeight: '700',
    color: '#1F2937',
  },

  emptySubtitle: {
    marginTop: 6,
    fontSize: 14,
    color: '#64748B',
    textAlign: 'center',
    lineHeight: 20,
    paddingHorizontal: 10,
  },
});