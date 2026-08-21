import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import MaterialIcons from '@react-native-vector-icons/material-design-icons';
import { AppStackParamList } from '../../navigation/AppStack';


type NavProp = NativeStackNavigationProp<AppStackParamList>;
type RouteProps = RouteProp<AppStackParamList, 'BookingSuccessScreen'>;

export default function BookingSuccessScreen() {
  const navigation =
  useNavigation<NativeStackNavigationProp<AppStackParamList>>();
  const route = useRoute<RouteProps>();

  const { vehicle, selectedPackage, customer } = route.params;

  // Temporary booking ID
  const bookingId = `SW${Date.now().toString().slice(-6)}`;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>

        {/* Success Icon */}
        <View style={styles.successCircle}>
          <MaterialIcons name="check" size={72} color="#FFFFFF" />
        </View>

        {/* Title */}
        <Text style={styles.title}>Booking Confirmed!</Text>

        <Text style={styles.subtitle}>
          Your SparkleWash subscription has been activated successfully.
        </Text>

        {/* Booking ID */}
        <View style={styles.bookingIdBox}>
          <Text style={styles.bookingIdLabel}>Booking ID</Text>
          <Text style={styles.bookingId}>{bookingId}</Text>
        </View>

        {/* Summary Card */}
        <View style={styles.summaryCard}>

          <View style={styles.summaryRow}>
            <MaterialIcons name="car" size={22} color="#1565C0" />
            <View style={styles.summaryContent}>
              <Text style={styles.summaryTitle}>Vehicle</Text>
              <Text style={styles.summaryText}>{vehicle?.vehicle_model}</Text>
              <Text style={styles.summarySub}>{vehicle?.vehicle_number}</Text>
            </View>
          </View>

          <View style={styles.divider} />

          <View style={styles.summaryRow}>
            <MaterialIcons name="opacity" size={22} color="#1565C0" />
            <View style={styles.summaryContent}>
              <Text style={styles.summaryTitle}>Plan</Text>
              <Text style={styles.summaryText}>
                {selectedPackage?.service}
              </Text>
              <Text style={styles.summarySub}>
                ₹{selectedPackage?.price}/month
              </Text>
            </View>
          </View>

          <View style={styles.divider} />

          <View style={styles.summaryRow}>
            <MaterialIcons name="clock-outline" size={22} color="#1565C0" />
            <View style={styles.summaryContent}>
              <Text style={styles.summaryTitle}>Wash Time</Text>
              <Text style={styles.summaryText}>
                {customer?.timeSlot}
              </Text>
            </View>
          </View>

          <View style={styles.divider} />

          <View style={styles.summaryRow}>
            <MaterialIcons name="calendar-month-outline" size={22} color="#1565C0" />
            <View style={styles.summaryContent}>
              <Text style={styles.summaryTitle}>Start Date</Text>
              <Text style={styles.summaryText}>
                {customer?.startDate}
              </Text>
            </View>
          </View>
        </View>

        {/* Success Info */}
        <View style={styles.infoBox}>
          <MaterialIcons name="information-outline" size={22} color="#2563EB" />
          <Text style={styles.infoText}>
            Our wash professional will arrive at your location during the selected time slot.
          </Text>
        </View>

        {/* Trust Badges */}
        <View style={styles.badgesRow}>
          <View style={styles.badge}>
            <MaterialIcons name="check-decagram" size={22} color="#16A34A" />
            <Text style={styles.badgeText}>Verified Staff</Text>
          </View>

          <View style={styles.badge}>
            <MaterialIcons name="security" size={22} color="#16A34A" />
            <Text style={styles.badgeText}>Safe Service</Text>
          </View>

          <View style={styles.badge}>
            <MaterialIcons name="headset" size={22} color="#16A34A" />
            <Text style={styles.badgeText}>24/7 Support</Text>
          </View>
        </View>

        {/* Track Button */}
              <TouchableOpacity
            style={styles.trackButton}
            onPress={() =>
              navigation.navigate('LiveTrackingScreen', {
                booking: {
                  vehicleModel: vehicle?.vehicle_model,
                  vehicleNumber: vehicle?.vehicle_number,
                  slot: customer?.timeSlot,
                  date: customer?.startDate,
                  status: 'Washer Assigned',
                },
              })
            }>
            <Text style={styles.trackButtonText}>Track My Wash</Text>
          </TouchableOpacity>

        {/* Home Button */}
        <TouchableOpacity
          style={styles.homeButton}
          onPress={() =>
            navigation.reset({
              index: 0,
              routes: [{ name: 'MainTabs' }],
            })
          }>

          <Text style={styles.homeText}>Back to Home</Text>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEF3EE',
  },

  content: {
    flexGrow: 1,
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 40,
    paddingBottom: 40,
  },

  successCircle: {
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: '#16A34A',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 28,
    shadowColor: '#16A34A',
    shadowOpacity: 0.25,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
    elevation: 6,
  },

  title: {
    fontSize: 34,
    fontWeight: '800',
    color: '#111827',
    textAlign: 'center',
  },

  subtitle: {
    marginTop: 10,
    fontSize: 15,
    lineHeight: 22,
    color: '#6B7280',
    textAlign: 'center',
    marginBottom: 28,
  },

  bookingIdBox: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    paddingVertical: 18,
    alignItems: 'center',
    marginBottom: 24,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },

  bookingIdLabel: {
    color: '#6B7280',
    fontSize: 13,
  },

  bookingId: {
    marginTop: 6,
    fontSize: 24,
    fontWeight: '800',
    color: '#1565C0',
    letterSpacing: 1,
  },

  summaryCard: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 20,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    marginBottom: 24,
  },

  summaryRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },

  summaryContent: {
    marginLeft: 14,
    flex: 1,
  },

  summaryTitle: {
    fontSize: 13,
    color: '#6B7280',
    marginBottom: 2,
  },

  summaryText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111827',
  },

  summarySub: {
    fontSize: 13,
    color: '#64748B',
    marginTop: 2,
  },

  divider: {
    height: 1,
    backgroundColor: '#E5E7EB',
    marginVertical: 16,
  },

  infoBox: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#EFF6FF',
    borderRadius: 18,
    padding: 16,
    borderWidth: 1,
    borderColor: '#BFDBFE',
    marginBottom: 24,
  },

  infoText: {
    marginLeft: 10,
    flex: 1,
    color: '#1E40AF',
    fontSize: 14,
    lineHeight: 20,
  },

  badgesRow: {
    width: '100%',
    marginBottom: 30,
  },

  badge: {
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

  trackButton: {
    width: '100%',
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
    marginBottom: 14,
  },

  trackText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '700',
    marginLeft: 8,
  },

  homeButton: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#94A3B8',
    borderRadius: 18,
    paddingVertical: 18,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },

  homeText: {
    color: '#475569',
    fontSize: 16,
    fontWeight: '700',
  },

trackButtonText: {
  color: '#FFFFFF',
  fontSize: 16,
  fontWeight: '700',
},
});