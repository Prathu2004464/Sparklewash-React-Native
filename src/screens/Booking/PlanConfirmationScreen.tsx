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
type RouteProps = RouteProp<AppStackParamList, 'PlanConfirmationScreen'>;

export default function PlanConfirmationScreen() {
  const navigation = useNavigation<NavProp>();
  const route = useRoute<RouteProps>();
  

  const { vehicle, selectedPackage, customer } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>

        {/* Stepper */}
        <View style={styles.stepper}>
          {[
            ['directions-car', 'Vehicle', false],
            ['person-outline', 'Details', false],
            ['credit-card', 'Plan', true],
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
          <Text style={styles.title}>Plan Overview</Text>

          <Text style={styles.subtitle}>
            Review your selected wash plan before confirmation
            </Text>

          {/* Summary Banner */}
          <View style={styles.banner}>
            <MaterialIcons name="opacity" size={24} color="#F59E0B" />

            <View style={{ marginLeft: 10, flex: 1 }}>
              <Text style={styles.bannerTitle}>
                Daily Pressure Wash — {vehicle?.vehicle_type}
              </Text>

              <Text style={styles.bannerSub}>
               ₹{selectedPackage?.price ?? 0}/mo • Interior cleaning ₹300/visit extra
              </Text>

              <Text style={styles.bannerNote}>
                Note: Service charge will be additional
              </Text>
            </View>
          </View>

          <Text style={styles.sectionTitle}>SELECTED SERVICES</Text>

          {/* Selected Service */}
          <View style={styles.serviceCard}>
            <View style={styles.serviceIcon}>
              <MaterialIcons name="opacity" size={28} color="#1565C0" />
            </View>

            <View style={{ flex: 1, marginLeft: 14 }}>
              <Text style={styles.serviceTitle}>
                Daily Pressure Wash
              </Text>

              <Text style={styles.serviceDesc}>
                Exterior pressure wash every day
              </Text>

              <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
                <Text style={styles.servicePrice}>
                  ₹{selectedPackage?.price ?? 0}/mo
                </Text>

                <Text style={styles.serviceUnit}>/mo</Text>
              </View>
            </View>

            <View style={styles.selectedDot}>
              <View style={styles.selectedDotInner} />
            </View>
          </View>

          {/* Time */}
          <Text style={styles.sectionTitle}>DAILY WASH TIME</Text>

          <View style={styles.timeRow}>
            <View
              style={[
                styles.timeCard,
                customer?.timeSlot === 'Morning' && styles.timeCardActive,
              ]}>
              <Text style={styles.timeEmoji}>🌅</Text>

              <Text style={styles.timeTitle}>Morning</Text>

              <Text style={styles.timeSub}>6AM–9AM</Text>
            </View>

            <View
              style={[
                styles.timeCard,
                customer?.timeSlot === 'Evening' && styles.timeCardActive,
              ]}>
              <Text style={styles.timeEmoji}>🌆</Text>

              <Text style={styles.timeTitle}>Evening</Text>

              <Text style={styles.timeSub}>5PM–8PM</Text>
            </View>
          </View>

          {/* Total */}
          <View style={styles.totalBox}>
            <Text style={styles.totalLabel}>Monthly Total</Text>

            <Text style={styles.totalAmount}>
              ₹{selectedPackage?.price ?? 0}/mo
            </Text>
          </View>

          {/* Buttons */}
          <View style={styles.footer}>
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => navigation.goBack()}>

              <Text style={styles.backText}>Back</Text>
            </TouchableOpacity>

            <TouchableOpacity
            style={styles.continueButton}
            onPress={() =>
                navigation.navigate('ReviewBookingScreen', {
                vehicle,
                selectedPackage,
                customer,
                })
            }>

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
    marginBottom: 18,
  },

  banner: {
    flexDirection: 'row',
    backgroundColor: '#FFF7ED',
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#F59E0B',
    padding: 16,
    marginBottom: 22,
  },

  bannerTitle: {
    color: '#92400E',
    fontWeight: '700',
    fontSize: 15,
  },

  bannerSub: {
    color: '#B45309',
    fontSize: 13,
    marginTop: 2,
  },

  bannerNote: {
    color: '#92400E',
    fontSize: 12,
    marginTop: 6,
    fontStyle: 'italic',
  },

  sectionTitle: {
    color: '#06B6D4',
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 0.5,
    marginBottom: 14,
  },

  serviceCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 22,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    padding: 18,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOpacity: 0.04,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },

  serviceIcon: {
    width: 56,
    height: 56,
    borderRadius: 16,
    backgroundColor: '#E8F1FD',
    justifyContent: 'center',
    alignItems: 'center',
  },

  serviceTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: '#111827',
  },

  serviceDesc: {
    color: '#64748B',
    fontSize: 13,
    marginTop: 4,
  },

  servicePrice: {
    fontSize: 24,
    fontWeight: '800',
    color: '#1565C0',
    marginTop: 10,
  },

  serviceUnit: {
    color: '#64748B',
    marginBottom: 3,
    marginLeft: 2,
  },

  selectedDot: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#1565C0',
    justifyContent: 'center',
    alignItems: 'center',
  },

  selectedDotInner: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#1565C0',
  },

  timeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },

  timeCard: {
    width: '48%',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    paddingVertical: 22,
    alignItems: 'center',
  },

  timeCardActive: {
    borderColor: '#06B6D4',
    backgroundColor: '#F4FBFF',
    shadowColor: '#06B6D4',
    shadowOpacity: 0.12,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
  },

  timeEmoji: {
    fontSize: 28,
    marginBottom: 10,
  },

  timeTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111827',
  },

  timeSub: {
    marginTop: 4,
    color: '#6B7280',
    fontSize: 12,
  },

  totalBox: {
    marginTop: 28,
    backgroundColor: '#F8FAFC',
    borderRadius: 18,
    padding: 18,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  totalLabel: {
    color: '#374151',
    fontWeight: '600',
    fontSize: 15,
  },

  totalAmount: {
    color: '#111827',
    fontSize: 30,
    fontWeight: '800',
  },

  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30,
  },

  backButton: {
    borderWidth: 1,
    borderColor: '#94A3B8',
    borderRadius: 14,
    paddingHorizontal: 24,
    paddingVertical: 14,
    minWidth: 100,
    alignItems: 'center',
  },

  backText: {
    color: '#64748B',
    fontWeight: '600',
  },

  continueButton: {
    backgroundColor: '#1565C0',
    borderRadius: 14,
    paddingHorizontal: 32,
    paddingVertical: 14,
    minWidth: 170,
    alignItems: 'center',
    shadowColor: '#1565C0',
    shadowOpacity: 0.2,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
  },

  continueText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 16,
  },
});