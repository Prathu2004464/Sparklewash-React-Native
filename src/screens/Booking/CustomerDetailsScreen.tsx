import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import MaterialIcons from '@react-native-vector-icons/material-design-icons';
import { AppStackParamList } from '../../navigation/AppStack';
import DateTimePicker from '@react-native-community/datetimepicker';

type NavProp = NativeStackNavigationProp<AppStackParamList>;
type RouteProps = RouteProp<AppStackParamList, 'CustomerDetailsScreen'>;

export default function CustomerDetailsScreen() {
  const navigation = useNavigation<NavProp>();
  const route = useRoute<RouteProps>();

  const { vehicle, selectedPackage } = route.params;

  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [startDate, setStartDate] = useState('');
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [timeSlot, setTimeSlot] = useState('Morning');
  const [startDateISO, setStartDateISO] = useState(''); 

  const handleDateChange = (event: any, selectedDate?: Date) => {
  setShowDatePicker(false);

  if (selectedDate) {
    const day = String(selectedDate.getDate()).padStart(2, '0');
    const month = String(selectedDate.getMonth() + 1).padStart(2, '0');
    const year = selectedDate.getFullYear();

    setStartDate(`${day}/${month}/${year}`);      // for UI display
    setStartDateISO(`${year}-${month}-${day}`);    // for backend
  }
  };
  const handleContinue = () => {
  if (
    !fullName.trim() ||
    !phone.trim() ||
    !email.trim() ||
    !address.trim() ||
    !city.trim() ||
    !startDate.trim()
  ) {
    Alert.alert('Validation', 'Please fill all fields');
    return;
  }

  if (phone.length !== 10) {
    Alert.alert('Validation', 'Enter a valid 10 digit phone number');
    return;
  }

  navigation.navigate('PlanConfirmationScreen', {
    vehicle,
    selectedPackage,
    customer: {
      fullName,
      phone,
      email,
      address,
      city,
      startDate,       // keep for display purposes downstream
      startDateISO,     // ADD THIS — used for the actual API call
      timeSlot,
    },
  });
};

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>

        {/* Stepper */}
        <View style={styles.stepper}>
          {[
            ['directions-car', 'Vehicle', false],
            ['person-outline', 'Details', true],
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
          <Text style={styles.title}>Customer Details</Text>

          <Text style={styles.subtitle}>
            Enter your contact and service details
          </Text>

          {/* Vehicle Summary */}
          <View style={styles.summaryCard}>
            <MaterialIcons name="car" size={28} color="#1565C0" />

            <View style={{ marginLeft: 12, flex: 1 }}>
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

          {/* Form */}
          <Text style={styles.label}>Full Name *</Text>

          <TextInput
            style={styles.input}
            placeholder="Enter your full name"
            placeholderTextColor="#9CA3AF"
            value={fullName}
            onChangeText={setFullName}
          />

          <Text style={styles.label}>Phone Number *</Text>

          <View style={styles.phoneRow}>
            <View style={styles.countryCode}>
              <Text style={styles.countryText}>+91</Text>
            </View>

            <TextInput
              style={[styles.input, { flex: 1, marginBottom: 0 }]}
              placeholder="9876543210"
              placeholderTextColor="#9CA3AF"
              keyboardType="phone-pad"
              maxLength={10}
              value={phone}
              onChangeText={setPhone}
            />
          </View>

          <Text style={styles.label}>Email Address *</Text>

          <TextInput
            style={styles.input}
            placeholder="your@email.com"
            placeholderTextColor="#9CA3AF"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />

          <Text style={styles.label}>Service Address *</Text>

          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="Flat / House No, Street, Area"
            placeholderTextColor="#9CA3AF"
            multiline
            numberOfLines={4}
            value={address}
            onChangeText={setAddress}
          />

          <Text style={styles.label}>City *</Text>

          <TextInput
            style={styles.input}
            placeholder="Enter city"
            placeholderTextColor="#9CA3AF"
            value={city}
            onChangeText={setCity}
          />

          <Text style={styles.label}>Service Start Date *</Text>

                <TouchableOpacity
                style={styles.datePickerButton}
                activeOpacity={0.8}
                onPress={() => setShowDatePicker(true)}>

                <Text
                    style={[
                    styles.datePickerText,
                    !startDate && { color: '#9CA3AF' },
                    ]}>

                    {startDate || 'Select service start date'}
                </Text>

                <MaterialIcons
                    name="calendar-today"
                    size={22}
                    color="#1565C0"
                />
                </TouchableOpacity>

                {showDatePicker && (
                <DateTimePicker
                    value={new Date()}
                    mode="date"
                    display="default"
                    minimumDate={new Date()}
                    onChange={handleDateChange}
                />
                )}

          <Text style={styles.label}>Preferred Wash Time</Text>

          <View style={styles.timeRow}>
            <TouchableOpacity
              style={[
                styles.timeCard,
                timeSlot === 'Morning' && styles.timeCardActive,
              ]}
              onPress={() => setTimeSlot('Morning')}>

              <Text style={styles.timeEmoji}>🌅</Text>

              <Text
                style={[
                  styles.timeTitle,
                  timeSlot === 'Morning' && styles.timeTitleActive,
                ]}>
                Morning
              </Text>

              <Text
                style={[
                  styles.timeSub,
                  timeSlot === 'Morning' && styles.timeSubActive,
                ]}>
                6 AM - 9 AM
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.timeCard,
                timeSlot === 'Evening' && styles.timeCardActive,
              ]}
              onPress={() => setTimeSlot('Evening')}>

              <Text style={styles.timeEmoji}>🌆</Text>

              <Text
                style={[
                  styles.timeTitle,
                  timeSlot === 'Evening' && styles.timeTitleActive,
                ]}>
                Evening
              </Text>

              <Text
                style={[
                  styles.timeSub,
                  timeSlot === 'Evening' && styles.timeSubActive,
                ]}>
                5 PM - 8 PM
              </Text>
            </TouchableOpacity>
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
              onPress={handleContinue}>

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

  datePickerButton: {
  backgroundColor: '#FFFFFF',
  borderWidth: 1,
  borderColor: '#D1D5DB',
  borderRadius: 14,
  paddingHorizontal: 16,
  paddingVertical: 15,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: 6,
},

datePickerText: {
  color: '#111827',
  fontSize: 15,
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

  summaryCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8FAFC',
    borderRadius: 18,
    padding: 16,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#E5E7EB',
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

  label: {
    color: '#111827',
    fontWeight: '600',
    fontSize: 15,
    marginBottom: 8,
    marginTop: 10,
  },

  input: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 14,
    paddingHorizontal: 16,
    paddingVertical: 15,
    color: '#111827',
    fontSize: 15,
    marginBottom: 16,
  },

  textArea: {
    minHeight: 100,
    textAlignVertical: 'top',
  },

  phoneRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },

  countryCode: {
    height: 54,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    backgroundColor: '#FFFFFF',
  },

  countryText: {
    color: '#111827',
    fontWeight: '600',
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

  timeTitleActive: {
    color: '#06B6D4',
  },

  timeSub: {
    marginTop: 4,
    color: '#6B7280',
    fontSize: 12,
  },

  timeSubActive: {
    color: '#06B6D4',
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