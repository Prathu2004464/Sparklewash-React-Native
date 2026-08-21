import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import MaterialIcons from '@react-native-vector-icons/material-design-icons';
import { AppStackParamList } from '../../navigation/AppStack';
import API from '../../services/api';
import { getToken } from '../../services/AsyncStorageService';

type NavProp = NativeStackNavigationProp<AppStackParamList>;
type RouteProps = RouteProp<AppStackParamList, 'ReviewBookingScreen'>;

export default function ReviewBookingScreen() {
  const navigation = useNavigation<NavProp>();
  const route = useRoute<RouteProps>();

  const { vehicle, selectedPackage, customer } = route.params;
  const [accepted, setAccepted] = useState(false);

  const handleConfirm = () => {
    if (!accepted) {
      Alert.alert(
        'Terms Required',
        'Please accept the terms and conditions to continue.',
      );
      return;
    }

    navigation.navigate('BookingSuccessScreen', {
      vehicle,
      selectedPackage,
      customer,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>

        {/* Stepper */}
        <View style={styles.stepper}>
          {[
            ['directions-car', 'Vehicle', false],
            ['person-outline', 'Details', false],
            ['credit-card', 'Plan', false],
            ['check-circle-outline', 'Review', true],
          ].map(([icon, label, active], index) => (
            <View key={index} style={styles.stepItem}>
              <View
                style={[
                  styles.stepCircle,
                  active && styles.stepCircleActive,
                ]}>
                <MaterialIcons
                  name={icon as any}
                  size={22}
                  color={active ? '#fff' : '#94A3B8'}
                />
              </View>

              <Text
                style={[
                  styles.stepText,
                  active && styles.stepTextActive,
                ]}>
                {label}
              </Text>
            </View>
          ))}
        </View>

        <View style={styles.card}>
          <Text style={styles.title}>Review Booking</Text>

          <Text style={styles.subtitle}>
            Please verify all details before confirming
          </Text>

          {/* Vehicle - shown only here */}
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <MaterialIcons
                name="car"
                size={22}
                color="#1565C0"
              />

              <Text style={styles.sectionTitle}>Vehicle</Text>
            </View>

            <View style={styles.summaryCard}>
              <View style={styles.iconBox}>
                <MaterialIcons
                  name="car"
                  size={30}
                  color="#1565C0"
                />
              </View>

              <View style={{ flex: 1, marginLeft: 14 }}>
                <Text style={styles.summaryTitle}>
                  {vehicle?.vehicle_model}
                </Text>

                <Text style={styles.summaryText}>
                  {vehicle?.vehicle_number}
                </Text>

                <Text style={styles.summaryText}>
                  {vehicle?.vehicle_type}
                </Text>
              </View>
            </View>
          </View>

          {/* Customer */}
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <MaterialIcons name="account-outline" size={22} color="#1565C0" />
              <Text style={styles.sectionTitle}>Customer</Text>
            </View>

            <View style={styles.infoRow}>
              <Text style={styles.label}>Name</Text>
              <Text style={styles.value}>{customer?.fullName}</Text>
            </View>

            <View style={styles.infoRow}>
              <Text style={styles.label}>Phone</Text>
              <Text style={styles.value}>+91 {customer?.phone}</Text>
            </View>

            <View style={styles.infoRow}>
              <Text style={styles.label}>Email</Text>
              <Text style={styles.value}>{customer?.email}</Text>
            </View>
          </View>

          {/* Address */}
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <MaterialIcons
                name="map-marker-outline"
                size={22}
                color="#1565C0"
              />

              <Text style={styles.sectionTitle}>Service Address</Text>
            </View>

            <Text style={styles.address}>{customer?.address}</Text>
            <Text style={styles.address}>{customer?.city}</Text>
          </View>

          {/* Schedule */}
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <MaterialIcons name="calendar-month-outline" size={22} color="#1565C0" />
              <Text style={styles.sectionTitle}>Schedule</Text>
            </View>

            <View style={styles.infoRow}>
              <Text style={styles.label}>Wash Time</Text>
              <Text style={styles.value}>{customer?.timeSlot}</Text>
            </View>

            <View style={styles.infoRow}>
              <Text style={styles.label}>Start Date</Text>
              <Text style={styles.value}>{customer?.startDate}</Text>
            </View>
          </View>

          {/* Price */}
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <MaterialIcons
                name="receipt-text-outline"
                size={22}
                color="#1565C0"
              />

              <Text style={styles.sectionTitle}>Price Breakdown</Text>
            </View>

            <View style={styles.infoRow}>
              <Text style={styles.label}>
                Daily Pressure Wash
              </Text>

              <Text style={styles.value}>
                ₹{selectedPackage?.price ?? 0}/mo
              </Text>
            </View>

            <View style={styles.infoRow}>
              <Text style={styles.label}>Service Charge</Text>
              <Text style={styles.value}>Additional</Text>
            </View>

            <View style={styles.divider} />

            <View style={styles.totalRow}>
              <Text style={styles.totalLabel}>Monthly Total</Text>

              <Text style={styles.totalAmount}>
                ₹{selectedPackage?.price ?? 0}/mo
              </Text>
            </View>
          </View>

          {/* Trust Badges */}
          <View style={styles.badgesContainer}>
            <View style={styles.badgeCard}>
              <MaterialIcons
                name="check-decagram"
                size={22}
                color="#16A34A"
              />

              <Text style={styles.badgeText}>Scratch-Safe Cleaning</Text>
            </View>

            <View style={styles.badgeCard}>
              <MaterialIcons
                name="check-circle"
                size={22}
                color="#16A34A"
              />

              <Text style={styles.badgeText}>Verified Professionals</Text>
            </View>

            <View style={styles.badgeCard}>
              <MaterialIcons
                name="clock-outline"
                size={22}
                color="#16A34A"
              />

              <Text style={styles.badgeText}>Daily Service</Text>
            </View>
          </View>

          {/* Terms */}
          <TouchableOpacity
            style={styles.termsBox}
            activeOpacity={0.8}
            onPress={() => setAccepted(!accepted)}>

            <View
              style={[
                styles.checkbox,
                accepted && styles.checkboxActive,
              ]}>
              {accepted && (
                <MaterialIcons name="check" size={16} color="#fff" />
              )}
            </View>

            <Text style={styles.termsText}>
              I agree to the Terms of Service and Privacy Policy.
            </Text>
          </TouchableOpacity>

          {/* Confirm Button */}
          <TouchableOpacity
  style={styles.confirmButton}
 onPress={async () => {
  console.log('CONFIRM BUTTON PRESSED');

  console.log('Vehicle:', vehicle);
  console.log('Package:', selectedPackage);
  console.log('Customer:', customer);
  if (!accepted) {
  Alert.alert(
    'Terms Required',
    'Please accept the terms and conditions to continue.',
  );
  return;
}

if (!vehicle?.id) {
  Alert.alert(
    'Vehicle Error',
    'Vehicle ID is missing. Please add the vehicle again.',
  );
  return;
}

  try {
    const token = await getToken();

    console.log('Token:', token);

    const payload = {
  vehicle_id: vehicle?.id,
  plan_name: selectedPackage?.service,
  plan_price: Number(selectedPackage?.price ?? 0),
  start_date: customer?.startDateISO,   // CHANGED from customer?.startDate
};

console.log('BOOKING PAYLOAD', payload);

const response = await API.post(
  '/bookings',
  payload,
  {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
);

    console.log('Booking response:', response.data);

    navigation.navigate('BookingSuccessScreen', {
      vehicle,
      selectedPackage,
      customer,
    });

  } catch (error: any) {
    console.log('BOOKING ERROR:', error);
    console.log('BOOKING ERROR RESPONSE:', error.response?.data);

    Alert.alert(
      'Error',
      error.response?.data?.message ||
      error.message ||
      'Booking failed',
    );
  }
}}>

  <MaterialIcons
    name="check-circle-outline"
    size={22}
    color="#FFFFFF"
  />

  <Text style={styles.confirmText}>Confirm Booking</Text>
</TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEF3EE',
  },

  stepper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 20,
    paddingBottom: 10,
  },

  stepItem: {
    alignItems: 'center',
  },

  stepCircle: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: '#D1D5DB',
    justifyContent: 'center',
    alignItems: 'center',
  },

  stepCircleActive: {
    backgroundColor: '#06B6D4',
  },

  stepText: {
    marginTop: 8,
    color: '#6B7280',
    fontSize: 12,
  },

  stepTextActive: {
    color: '#06B6D4',
    fontWeight: '700',
  },

  card: {
    marginHorizontal: 12,
    marginTop: 8,
    marginBottom: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#F3F4F6',
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
  },

  title: {
    color: '#111827',
    fontSize: 32,
    fontWeight: '800',
  },

  subtitle: {
    color: '#6B7280',
    fontSize: 15,
    marginTop: 4,
    marginBottom: 20,
  },

  section: {
    marginBottom: 24,
  },

  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
  },

  sectionTitle: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: '700',
    color: '#111827',
  },

  summaryCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8FAFC',
    borderRadius: 18,
    padding: 16,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },

  iconBox: {
    width: 58,
    height: 58,
    borderRadius: 16,
    backgroundColor: '#E8F1FD',
    justifyContent: 'center',
    alignItems: 'center',
  },

  summaryTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111827',
  },

  summaryText: {
    color: '#6B7280',
    fontSize: 13,
    marginTop: 2,
  },

  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },

  label: {
    color: '#6B7280',
    fontSize: 15,
  },

  value: {
    color: '#111827',
    fontWeight: '600',
    fontSize: 15,
  },

  address: {
    color: '#111827',
    fontSize: 15,
    marginBottom: 4,
  },

  divider: {
    height: 1,
    backgroundColor: '#E5E7EB',
    marginVertical: 14,
  },

  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  totalLabel: {
    fontSize: 17,
    fontWeight: '700',
    color: '#111827',
  },

  totalAmount: {
    fontSize: 30,
    fontWeight: '800',
    color: '#111827',
  },

  badgesContainer: {
    marginBottom: 24,
  },

  badgeCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ECFDF5',
    borderRadius: 16,
    padding: 14,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#BBF7D0',
  },

  badgeText: {
    marginLeft: 10,
    color: '#166534',
    fontWeight: '600',
    fontSize: 14,
  },

  termsBox: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#F8FAFC',
    borderRadius: 16,
    padding: 14,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    marginBottom: 24,
  },

  checkbox: {
    width: 22,
    height: 22,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: '#94A3B8',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
    marginTop: 2,
  },

  checkboxActive: {
    backgroundColor: '#1565C0',
    borderColor: '#1565C0',
  },

  termsText: {
    flex: 1,
    color: '#374151',
    fontSize: 14,
    lineHeight: 20,
  },

  confirmButton: {
    backgroundColor: '#1565C0',
    borderRadius: 18,
    paddingVertical: 18,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#1565C0',
    shadowOpacity: 0.25,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 5,
  },

  confirmText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
    marginLeft: 8,
  },
});