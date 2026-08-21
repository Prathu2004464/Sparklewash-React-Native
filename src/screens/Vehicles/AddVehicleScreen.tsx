import React, { useState } from 'react';
import {
  Alert,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import MaterialIcons from '@react-native-vector-icons/material-design-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import API from '../../services/api';
import { getToken } from '../../services/AsyncStorageService';
import { AppStackParamList } from '../../navigation/AppStack';

const VEHICLE_TYPES = [
  {
    id: 'Hatchback',
    subtitle: 'Alto, Wagon R, Nano',
    price: 999,
  },
  {
    id: 'Sedan',
    subtitle: 'Swift, Dzire, Honda City',
    price: 1199,
  },
  {
    id: 'Mini SUV',
    subtitle: 'Brezza, Nexon, Venue',
    price: 1199,
  },
  {
    id: 'SUV',
    subtitle: 'Fortuner, Innova, Creta',
    price: 1399,
  },
];

export default function AddVehicleScreen() {
  const navigation =
    useNavigation<NativeStackNavigationProp<AppStackParamList>>();

  const route = useRoute<any>();

  const [vehicleNumber, setVehicleNumber] = useState('');
  const [vehicleModel, setVehicleModel] = useState('');
  const [vehicleType, setVehicleType] = useState('Sedan');

  const handleSave = async () => {
  if (!vehicleNumber || !vehicleModel || !vehicleType) {
    Alert.alert('Validation', 'Please fill all fields.');
    return;
  }

  try {
    const token = await getToken();

   const response = await API.post(
  '/vehicles',
  {
    vehicle_number: vehicleNumber,
    vehicle_model: vehicleModel,
    vehicle_type: vehicleType,
  },
  {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
);

// Backend returns { vehicle_id: ... }
const savedVehicle = {
  id: response.data.vehicle_id,
  vehicle_number: vehicleNumber,
  vehicle_model: vehicleModel,
  vehicle_type: vehicleType,
};

// Build the selected package from the chosen vehicle type's price
const selectedTypeData = VEHICLE_TYPES.find(v => v.id === vehicleType);

const selectedPkg = {
  service: 'Daily Pressure Wash',
  price: selectedTypeData?.price || 0,
};

navigation.navigate('CustomerDetailsScreen', {
  vehicle: savedVehicle,
  selectedPackage: selectedPkg,
});
  }  catch (error: any) {
  console.log('ADD VEHICLE ERROR:', error);
  console.log('ADD VEHICLE RESPONSE:', error.response?.data);

  Alert.alert(
    'Error',
    error.response?.data?.message || error.message || 'Failed to add vehicle.',
  );
}
};

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>

        {/* Stepper */}
        <View style={styles.stepper}>
          {[
            ['directions-car', 'Vehicle', true],
            ['person-outline', 'Details', false],
            ['credit-card', 'Plan', false],
            ['check-circle-outline', 'Review', false],
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
          <Text style={styles.title}>Vehicle Details</Text>

          <Text style={styles.subtitle}>
            Tell us about your vehicle
          </Text>

          <Text style={styles.sectionTitle}>SELECT VEHICLE TYPE</Text>

          <View style={styles.grid}>
            {VEHICLE_TYPES.map(item => {
              const active = vehicleType === item.id;

              return (
                <TouchableOpacity
                  key={item.id}
                  activeOpacity={0.9}
                  style={[
                    styles.vehicleCard,
                    active && styles.vehicleCardActive,
                  ]}
                  onPress={() => setVehicleType(item.id)}>

                  <View style={styles.badge}>
                    <Text style={styles.badgeText}>Demo</Text>
                  </View>

                  {active && (
                    <View style={styles.checkCircle}>
                      <MaterialIcons name="check" size={16} color="#fff" />
                    </View>
                  )}

                  <Text style={styles.vehicleTitle}>{item.id}</Text>

                  <Text style={styles.vehicleSubtitle}>
                    {item.subtitle}
                  </Text>

                  <Text style={styles.price}>₹{item.price}/mo</Text>
                </TouchableOpacity>
              );
            })}
          </View>

          <Text style={styles.label}>Vehicle Number *</Text>

          <TextInput
            style={styles.input}
            placeholder="MH 12 AB 1234"
            placeholderTextColor="#64748B"
            value={vehicleNumber}
            onChangeText={setVehicleNumber}
            autoCapitalize="characters"
          />

          <Text style={styles.label}>Make & Model *</Text>

          <TextInput
            style={styles.input}
            placeholder="Maruti Baleno"
            placeholderTextColor="#64748B"
            value={vehicleModel}
            onChangeText={setVehicleModel}
          />

          <View style={styles.footer}>
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => navigation.goBack()}>
              <Text style={styles.backText}>Back</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.continueButton}
              onPress={handleSave}>
              <Text style={styles.continueText}>Continue</Text>
            </TouchableOpacity>
          </View>
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
    color: '#94A3B8',
    fontSize: 12,
  },

  stepTextActive: {
    color: '#fff',
    fontWeight: '700',
  },

  card: {
  margin: 20,
  backgroundColor: '#FFFFFF',
  borderRadius: 28,
  borderWidth: 1,
  borderColor: '#E5E7EB',
  padding: 20,
  shadowColor: '#000',
  shadowOpacity: 0.05,
  shadowRadius: 12,
  shadowOffset: { width: 0, height: 4 },
  elevation: 3,
},

  title: {
  color: '#1F2937',
  fontSize: 30,
  fontWeight: '800',
},

subtitle: {
  color: '#6B7280',
},

  sectionTitle: {
    color: '#06B6D4',
    fontSize: 12,
    fontWeight: '700',
    marginBottom: 14,
  },

  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 16,
  },

  vehicleCard: {
  width: '48%',
  borderWidth: 1,
  borderColor: '#E5E7EB',
  borderRadius: 22,
  padding: 16,
  marginBottom: 14,
  backgroundColor: '#FFFFFF',
  minHeight: 160,
  shadowColor: '#000',
  shadowOpacity: 0.03,
  shadowRadius: 6,
  shadowOffset: { width: 0, height: 2 },
  elevation: 1,
  },

  vehicleCardActive: {
  borderColor: '#06B6D4',
  borderWidth: 1.5,
  backgroundColor: '#F4FBFF',
  shadowColor: '#06B6D4',
  shadowOpacity: 0.18,
  shadowRadius: 10,
  shadowOffset: { width: 0, height: 4 },
  elevation: 4,
  },

  badge: {
  alignSelf: 'flex-start',
  backgroundColor: '#EAF4FF',
  paddingHorizontal: 12,
  paddingVertical: 5,
  borderRadius: 999,
  marginBottom: 10,
  },

  badgeText: {
  color: '#2563EB',
  fontSize: 11,
  fontWeight: '700',
  },

  checkCircle: {
  position: 'absolute',
  top: 14,
  right: 14,
  width: 26,
  height: 26,
  borderRadius: 13,
  backgroundColor: '#06B6D4',
  justifyContent: 'center',
  alignItems: 'center',
  },

  vehicleTitle: {
  color: '#111827',
  fontSize: 20,
  fontWeight: '700',
  marginTop: 6,
  },

  vehicleSubtitle: {
  color: '#64748B',
  marginTop: 6,
  fontSize: 12,
  lineHeight: 18,
  },

  price: {
  marginTop: 14,
  color: '#06B6D4',
  fontWeight: '800',
  fontSize: 24,
  },

  label: {
  color: '#374151',
  fontWeight: '600',
  marginBottom: 8,
  marginTop: 10,
  },

  input: {
  backgroundColor: '#FFFFFF',
  borderWidth: 1,
  borderColor: '#D1D5DB',
  borderRadius: 14,
  color: '#111827',
  paddingHorizontal: 14,
  paddingVertical: 14,
  marginBottom: 16,
  fontSize: 16,},

  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 28,
  },

  backButton: {
    borderWidth: 1,
    borderColor: '#64748B',
    borderRadius: 12,
    paddingHorizontal: 22,
    paddingVertical: 14,
  },

  backText: {
    color: '#CBD5E1',
    fontWeight: '600',
  },

  continueButton: {
    backgroundColor: '#2563EB',
    borderRadius: 14,
    paddingHorizontal: 28,
    paddingVertical: 14,
    minWidth: 150,
    alignItems: 'center',
  },

  continueText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },
});