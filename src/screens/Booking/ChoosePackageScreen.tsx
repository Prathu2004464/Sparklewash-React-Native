import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import MaterialIcons from '@react-native-vector-icons/material-design-icons';
import { AppStackParamList } from '../../navigation/AppStack';

const VEHICLES = [
  { id: 'Hatchback', price: 999, models: 'Alto, Wagon R, Nano' },
  { id: 'Sedan', price: 1199, models: 'Swift, Dzire, Honda City' },
  { id: 'Mini SUV', price: 1199, models: 'Brezza, Nexon, Venue' },
  { id: 'SUV', price: 1399, models: 'Fortuner, Innova, Creta' },
];

type NavProp = NativeStackNavigationProp<AppStackParamList>;

export default function ChoosePackageScreen() {
  const navigation = useNavigation<NavProp>();
  const route = useRoute<any>();

  const vehicle = route.params?.vehicle;

  const [selectedVehicle, setSelectedVehicle] = useState(
    vehicle?.vehicle_type || 'Sedan',
  );

  const [selectedService, setSelectedService] = useState('daily');

  const [vehicleNumber, setVehicleNumber] = useState(
    vehicle?.vehicle_number || '',
  );

  const [vehicleModel, setVehicleModel] = useState(
    vehicle?.vehicle_model || '',
  );

  const selectedData = VEHICLES.find(v => v.id === selectedVehicle);

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

          <Text style={styles.section}>SELECT VEHICLE TYPE</Text>

          <View style={styles.grid}>
            {VEHICLES.map(item => {
              const active = selectedVehicle === item.id;

              return (
                <TouchableOpacity
                  key={item.id}
                  activeOpacity={0.9}
                  style={[
                    styles.vehicleCard,
                    active && styles.vehicleCardActive,
                  ]}
                  onPress={() => setSelectedVehicle(item.id)}>

                  <View style={styles.badge}>
                    <Text style={styles.badgeText}>Demo</Text>
                  </View>

                  {active && (
                    <View style={styles.checkCircle}>
                      <MaterialIcons name="check" size={16} color="#fff" />
                    </View>
                  )}

                  <Text style={styles.vehicleTitle}>{item.id}</Text>
                  <Text style={styles.vehicleModels}>{item.models}</Text>
                  <Text style={styles.price}>₹{item.price}/mo</Text>
                </TouchableOpacity>
              );
            })}
          </View>

          <Text style={styles.section}>
            SELECT SERVICES — {selectedVehicle.toUpperCase()}
          </Text>

          <View style={styles.serviceRow}>
            <TouchableOpacity
              style={[
                styles.serviceCard,
                selectedService === 'daily' && styles.serviceCardActive,
              ]}
              onPress={() => setSelectedService('daily')}>
              <View style={styles.radio} />
              <Text style={styles.serviceTitle}>Daily Pressure Wash</Text>
              <Text style={styles.servicePrice}>
                ₹{selectedData?.price}/mo
              </Text>
              <Text style={styles.serviceDesc}>
                Exterior cleaning every day
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.serviceCard,
                selectedService === 'interior' && styles.serviceCardActive,
              ]}
              onPress={() => setSelectedService('interior')}>
              <View style={styles.radio} />
              <Text style={styles.serviceTitle}>Interior Cleaning</Text>
              <Text style={styles.servicePrice}>₹300/visit</Text>
              <Text style={styles.serviceDesc}>
                Deep interior vacuuming & more
              </Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.helper}>
            Select at least one service to see total
          </Text>

          <View style={styles.formRow}>
            <View style={{ flex: 1, marginRight: 10 }}>
              <Text style={styles.label}>Vehicle Number *</Text>

              <TextInput
                value={vehicleNumber}
                onChangeText={setVehicleNumber}
                style={styles.input}
                placeholder="MH 12 AB 1234"
                placeholderTextColor="#64748B"
              />
            </View>

            <View style={{ flex: 1 }}>
              <Text style={styles.label}>Make & Model *</Text>

              <TextInput
                value={vehicleModel}
                onChangeText={setVehicleModel}
                style={styles.input}
                placeholder="Maruti Swift"
                placeholderTextColor="#64748B"
              />
            </View>
          </View>

          <View style={styles.footer}>
            <TouchableOpacity style={styles.backBtn}>
              <Text style={styles.backText}>Back</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.continueBtn}
              onPress={() => {
                const selectedPkg = {
                  service:
                    selectedService === 'daily'
                      ? 'Daily Pressure Wash'
                      : 'Interior Cleaning',
                  price:
                    selectedService === 'daily'
                      ? selectedData?.price || 0
                      : 300,
                };

                navigation.navigate('CustomerDetailsScreen', {
                  vehicle: {
                    ...vehicle,
                    vehicle_type: selectedVehicle,
                    vehicle_number: vehicleNumber,
                    vehicle_model: vehicleModel,
                  },
                  selectedPackage: selectedPkg,
                });
              }}
            >
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
    backgroundColor: '#06112B',
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
    backgroundColor: '#E2E8F0',
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
    backgroundColor: '#16223E',
    borderRadius: 28,
    borderWidth: 1,
    borderColor: '#334155',
    padding: 20,
  },

  title: {
    color: '#fff',
    fontSize: 28,
    fontWeight: '800',
  },

  subtitle: {
    color: '#94A3B8',
    marginTop: 4,
    marginBottom: 20,
  },

  section: {
    color: '#06B6D4',
    fontSize: 12,
    fontWeight: '700',
    marginBottom: 14,
    marginTop: 6,
  },

  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  vehicleCard: {
    width: '48%',
    borderWidth: 1,
    borderColor: '#334155',
    borderRadius: 22,
    padding: 16,
    marginBottom: 14,
    backgroundColor: '#182540',
    minHeight: 150,
  },

  vehicleCardActive: {
    borderColor: '#06B6D4',
    backgroundColor: '#133347',
    shadowColor: '#06B6D4',
    shadowOpacity: 0.25,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
    elevation: 4,
  },

  badge: {
    alignSelf: 'flex-start',
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 999,
    marginBottom: 12,
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
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#06B6D4',
    justifyContent: 'center',
    alignItems: 'center',
  },

  vehicleTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },

  vehicleModels: {
    color: '#94A3B8',
    marginTop: 6,
    fontSize: 12,
    lineHeight: 18,
  },

  price: {
    marginTop: 10,
    color: '#06B6D4',
    fontWeight: '800',
    fontSize: 20,
  },

  serviceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  serviceCard: {
    width: '48%',
    borderWidth: 1,
    borderColor: '#334155',
    borderRadius: 22,
    padding: 16,
    backgroundColor: '#182540',
  },

  serviceCardActive: {
    borderColor: '#06B6D4',
    backgroundColor: '#133347',
  },

  radio: {
    position: 'absolute',
    top: 14,
    right: 14,
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 2,
    borderColor: '#475569',
  },

  serviceTitle: {
    color: '#fff',
    fontWeight: '700',
    marginTop: 6,
  },

  servicePrice: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '800',
    marginTop: 12,
  },

  serviceDesc: {
    color: '#94A3B8',
    fontSize: 12,
    marginTop: 8,
    lineHeight: 18,
  },

  helper: {
    color: '#94A3B8',
    textAlign: 'center',
    marginVertical: 16,
    fontSize: 12,
  },

  formRow: {
    flexDirection: 'row',
    marginTop: 10,
  },

  label: {
    color: '#fff',
    marginBottom: 8,
    fontWeight: '600',
  },

  input: {
    backgroundColor: '#0F172A',
    borderWidth: 1,
    borderColor: '#334155',
    borderRadius: 14,
    paddingHorizontal: 14,
    paddingVertical: 14,
    color: '#fff',
  },

  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 28,
  },

  backBtn: {
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

  continueBtn: {
    backgroundColor: '#2563EB',
    borderRadius: 14,
    paddingHorizontal: 28,
    paddingVertical: 14,
    minWidth: 140,
    alignItems: 'center',
  },

  continueText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },
});