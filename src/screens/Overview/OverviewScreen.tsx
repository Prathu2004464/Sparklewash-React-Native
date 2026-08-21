import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import HomeHeader from "../../components/headers/HomeHeaders";
import DashboardStats from "../../components/cards/DashboardStats";
import UpcomingWashCard from "../../components/cards/UpcomingWashCard";
import VehicleCard from "../../components/cards/VehicleCard";
import ReportIssueCard from "../../components/cards/ReportIssueCard";
import MaterialIcons from '@react-native-vector-icons/material-design-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AppStackParamList } from '../../navigation/AppStack';
import API from '../../services/api';


<MaterialIcons
  name="home"
  size={40}
  color="blue"
/>


export default function OverviewScreen() {
  const navigation =
  useNavigation<NativeStackNavigationProp<AppStackParamList>>();

    // Temporary demo active booking
const [vehicles, setVehicles] = useState<any[]>([]);
const [profile, setProfile] = useState<any>(null);

useEffect(() => {
  loadVehicles();
  loadProfile();
}, []);

const loadVehicles = async () => {
  try {
    const response = await API.get('/vehicles');
    setVehicles(response.data);
  } catch (error) {
    console.log('OVERVIEW VEHICLES ERROR:', error);
  }
};

const loadProfile = async () => {
  try {
    const response = await API.get('/customer/profile');
    setProfile(response.data.profile);
  } catch (error) {
    console.log('HOME PROFILE ERROR:', error);
  }
};

const activeBooking = vehicles.length
  ? {
      vehicleModel: vehicles[0].vehicle_model || 'Vehicle',
      vehicleNumber: vehicles[0].vehicle_number || 'N/A',
      slot: 'Morning',
      date: new Date().toLocaleDateString(),
      status: 'Subscription Active',
    }
  : null;
  return (

    
    <SafeAreaView style={styles.container}>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          styles.content,
          { paddingBottom: 120 },
        ]}
      >
        {/* Header */}
        <HomeHeader
          name={profile?.full_name || profile?.name || 'Customer'}
        />

        {/* Dashboard Cards */}
        <DashboardStats
            activePlans={vehicles.length}
            pendingDue={0}
          />

        {/* Upcoming Wash */}
        {activeBooking ? <UpcomingWashCard /> : null}

        {activeBooking && (
  <View style={styles.activeBookingCard}>
    <View style={styles.activeBookingHeader}>
      <View style={styles.activeBookingIcon}>
        <MaterialIcons name="water" size={22} color="#1565C0" />
      </View>

      <View style={{ flex: 1 }}>
        <Text style={styles.activeBookingTitle}>Today's Wash</Text>
        <Text style={styles.activeBookingVehicle}>
          {activeBooking.vehicleModel} • {activeBooking.slot} Slot
        </Text>
      </View>

      <View style={styles.statusBadge}>
        <Text style={styles.statusText}>Live</Text>
      </View>
    </View>

    <View style={styles.activeBookingInfo}>
      <View style={styles.infoRow}>
        <MaterialIcons name="car-side" size={18} color="#64748B" />
        <Text style={styles.infoText}>{activeBooking.vehicleNumber}</Text>
      </View>

      <View style={styles.infoRow}>
        <MaterialIcons name="calendar-today" size={18} color="#64748B" />
        <Text style={styles.infoText}>{activeBooking.date}</Text>
      </View>

      <View style={styles.infoRow}>
        <MaterialIcons name="clock-outline" size={18} color="#64748B" />
        <Text style={styles.infoText}>{activeBooking.status}</Text>
      </View>
    </View>

    <TouchableOpacity
      style={styles.trackNowButton}
      onPress={() =>
        navigation.navigate('LiveTrackingScreen', {
          booking: activeBooking,
        })
      }>
      <Text style={styles.trackNowButtonText}>Track Now</Text>
      <MaterialIcons name="arrow-right" size={20} color="#FFFFFF" />
    </TouchableOpacity>
  </View>
)}

      

        {/* Vehicles */}
        <Text style={styles.heading}>My Vehicles</Text>

                {vehicles.length === 0 ? (
  <View style={styles.emptyStateCard}>
    <MaterialIcons
      name="car-outline"
      size={44}
      color="#94A3B8"
    />

    <Text style={styles.emptyStateTitle}>
      No vehicles added yet
    </Text>

    <Text style={styles.emptyStateSubtitle}>
      Add your first vehicle to start a wash subscription.
    </Text>
  </View>
) : (
  vehicles.map((vehicle, index) => (
    <VehicleCard
      key={vehicle.id || index}
      vehicleName={vehicle.vehicle_model || 'Vehicle'}
      vehicleNumber={vehicle.vehicle_number || 'N/A'}
      plan={vehicle.plan_name || 'Active Plan'}
      daysLeft={vehicle.days_left || 30}
      active={true}
    />
  ))
)}

        {/* Support */}
        <Text style={styles.heading}>Support</Text>

        <ReportIssueCard />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F8F3",
  },

  content: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 30,
  },

  heading: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1F2937",
    marginTop: 20,
    marginBottom: 15,
  },

  activeBookingCard: {
  backgroundColor: '#FFFFFF',
  borderRadius: 24,
  padding: 18,
  marginTop: 16,
  shadowColor: '#000',
  shadowOpacity: 0.06,
  shadowRadius: 10,
  shadowOffset: { width: 0, height: 4 },
  elevation: 3,
  borderWidth: 1,
  borderColor: '#E8EEF8',
},

  activeBookingHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  activeBookingIcon: {
    width: 48,
    height: 48,
    borderRadius: 16,
    backgroundColor: '#E8F1FD',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },

  activeBookingTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: '#111827',
  },

  activeBookingVehicle: {
    fontSize: 13,
    color: '#64748B',
    marginTop: 2,
  },

  statusBadge: {
    backgroundColor: '#DCFCE7',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 999,
  },

  statusText: {
    color: '#166534',
    fontSize: 12,
    fontWeight: '700',
  },

  activeBookingInfo: {
    marginTop: 16,
    gap: 10,
  },

  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  infoText: {
    marginLeft: 10,
    fontSize: 14,
    color: '#374151',
  },

  trackNowButton: {
    marginTop: 18,
    backgroundColor: '#1565C0',
    borderRadius: 16,
    paddingVertical: 14,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },

  trackNowButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '700',
    marginRight: 6,
  },

  emptyStateCard: {
  backgroundColor: '#FFFFFF',
  borderRadius: 20,
  paddingVertical: 28,
  paddingHorizontal: 20,
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: 8,
  marginBottom: 8,
  borderWidth: 1,
  borderColor: '#E5E7EB',
  shadowColor: '#000',
  shadowOpacity: 0.04,
  shadowRadius: 6,
  shadowOffset: { width: 0, height: 2 },
  elevation: 2,
  },

emptyStateTitle: {
  marginTop: 12,
  fontSize: 18,
  fontWeight: '700',
  color: '#1F2937',
  },

emptyStateSubtitle: {
  marginTop: 6,
  fontSize: 14,
  color: '#64748B',
  textAlign: 'center',
  lineHeight: 20,
  },
});