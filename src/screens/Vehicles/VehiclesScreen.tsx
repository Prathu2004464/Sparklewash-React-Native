import React, { useState, useCallback } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Alert,
  View,
} from 'react-native';

import MaterialIcons from '@react-native-vector-icons/material-design-icons';

import VehicleCard from '../../components/cards/VehicleCard';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AppStackParamList } from '../../navigation/AppStack';

import API from '../../services/api';
import { getToken } from '../../services/AsyncStorageService';

export default function VehiclesScreen() {
  const navigation =
    useNavigation<NativeStackNavigationProp<AppStackParamList>>();

  const [vehicles, setVehicles] = useState<any[]>([]);

  const loadVehicles = async () => {
    try {
      const token = await getToken();

      const response = await API.get('/vehicles', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setVehicles(response.data);
    } catch (error: any) {
  console.log('VEHICLE ERROR:', error);
  console.log('RESPONSE:', error.response?.data);

  Alert.alert(
    'Error',
    error.response?.data?.message ||
      error.message ||
      'Failed to load vehicles.',
  );
}
  };

  useFocusEffect(
    useCallback(() => {
      loadVehicles();
    }, []),
  );

  const handleDeleteVehicle = async (vehicleId: number) => {
    Alert.alert(
      'Remove Vehicle',
      'Are you sure you want to remove this vehicle?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Remove',
          style: 'destructive',
          onPress: async () => {
            try {
              const token = await getToken();

              await API.delete(`/vehicles/${vehicleId}`, {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              });

              // Remove instantly from UI
              setVehicles(prev =>
                prev.filter(v => v.id !== vehicleId),
              );

              Alert.alert('Success', 'Vehicle removed successfully.');
            } catch (error: any) {
              console.log(error.response?.data);

              Alert.alert(
                'Error',
                error.response?.data?.message ||
                  'Failed to remove vehicle.',
              );
            }
          },
        },
      ],
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}>

        <Text style={styles.title}>My Vehicles</Text>

        <Text style={styles.subtitle}>
          Manage all your registered vehicles
        </Text>

        {vehicles.length === 0 ? (
  <View style={styles.emptyContainer}>
    <Text style={styles.emptyText}>
      No vehicles added yet.
    </Text>
  </View>
) : (
  vehicles.map(item => (
    <View key={item.id} style={styles.vehicleContainer}>

      {/* Top row with delete button */}
      <View style={styles.vehicleHeader}>
        <Text style={styles.vehicleLabel}>Registered Vehicle</Text>

        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => handleDeleteVehicle(item.id)}
          activeOpacity={0.8}>

          <MaterialIcons
            name="delete-outline"
            size={22}
            color="#DC2626"
          />
        </TouchableOpacity>
      </View>

      {/* Vehicle Card */}
      <VehicleCard
  vehicleName={item.vehicle_model}
  vehicleNumber={item.vehicle_number}
  plan={item.plan_name || 'No Active Plan'}
  daysLeft={
    item.end_date
      ? Math.max(
          0,
          Math.ceil(
            (new Date(item.end_date).getTime() - Date.now()) /
              (1000 * 60 * 60 * 24),
          ),
        )
      : 0
  }
  active={item.plan_status === 'active'}
  onPress={() => {}}
/>
    </View>
  ))
)}

        {/* Add Vehicle Button */}
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.9}
          onPress={() => navigation.navigate('AddVehicleScreen')}>

          <Text style={styles.buttonText}>
            + Add New Vehicle
          </Text>
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
    padding: 20,
    paddingBottom: 40,
  },

  title: {
    fontSize: 30,
    fontWeight: '800',
    color: '#111827',
  },

  subtitle: {
    marginTop: 6,
    marginBottom: 22,
    color: '#6B7280',
    fontSize: 15,
  },

  vehicleWrapper: {
    marginBottom: 16,
    position: 'relative',
  },
  

  deleteButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 10,
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#FEE2E2',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#FECACA',
  },

  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 60,
  },

  emptyText: {
    textAlign: 'center',
    color: '#6B7280',
    fontSize: 16,
  },

  button: {
    marginTop: 28,
    backgroundColor: '#1565C0',
    borderRadius: 18,
    paddingVertical: 18,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#1565C0',
    shadowOpacity: 0.2,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
  },

  buttonText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 16,
  },

  vehicleContainer: {
  marginBottom: 18,
},

vehicleHeader: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: 8,
  paddingHorizontal: 4,
},

vehicleLabel: {
  color: '#64748B',
  fontSize: 13,
  fontWeight: '600',
},

});