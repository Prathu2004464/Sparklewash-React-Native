import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import MaterialIcons from '@react-native-vector-icons/material-design-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AppStackParamList } from '../../navigation/AppStack';

export default function PaymentSuccessScreen() {
  const navigation =
    useNavigation<NativeStackNavigationProp<AppStackParamList>>();

  const route = useRoute<any>();
  const bill = route.params?.bill;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>

        {/* Success Icon */}
        <View style={styles.iconContainer}>
          <MaterialIcons
            name="check-circle"
            size={90}
            color="#16A34A"
          />
        </View>

        {/* Title */}
        <Text style={styles.title}>Payment Successful</Text>

        <Text style={styles.subtitle}>
          Your bill has been paid successfully.
        </Text>

        {/* Receipt Card */}
        <View style={styles.card}>

          <View style={styles.row}>
            <View style={styles.rowLeft}>
              <MaterialIcons name="car-side" size={18} color="#64748B" />
              <Text style={styles.label}>Vehicle</Text>
            </View>
            <Text style={styles.value}>
              {bill?.vehicleNumber || 'MH 32 CF 0012'}
            </Text>
          </View>

          <View style={styles.row}>
            <View style={styles.rowLeft}>
              <MaterialIcons name="receipt" size={18} color="#64748B" />
              <Text style={styles.label}>Plan</Text>
            </View>
            <Text style={styles.value}>
              {bill?.plan || 'Monthly'}
            </Text>
          </View>

          <View style={styles.row}>
            <View style={styles.rowLeft}>
              <MaterialIcons name="calendar-month" size={18} color="#64748B" />
              <Text style={styles.label}>Billing Month</Text>
            </View>
            <Text style={styles.value}>
              {bill?.month || 'Aug 2026'}
            </Text>
          </View>

          <View style={styles.row}>
            <View style={styles.rowLeft}>
              <MaterialIcons name="wallet" size={18} color="#64748B" />
              <Text style={styles.label}>Amount Paid</Text>
            </View>
            <Text style={[styles.value, styles.amount]}>
              ₹{bill?.amount || '999'}
            </Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.row}>
            <Text style={styles.label}>Payment Status</Text>
            <View style={styles.statusBadge}>
              <Text style={styles.statusText}>Paid</Text>
            </View>
          </View>
        </View>

        {/* Download Receipt */}
        <TouchableOpacity style={styles.secondaryButton}>
          <MaterialIcons name="receipt" size={20} color="#1565C0" />
          <Text style={styles.secondaryButtonText}>Download Receipt</Text>
        </TouchableOpacity>

        {/* Go Home */}
        <TouchableOpacity
          style={styles.primaryButton}
          onPress={() => navigation.navigate('MainTabs')}>
          <MaterialIcons name="home" size={20} color="#FFFFFF" />
          <Text style={styles.primaryButtonText}>Go to Home</Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEF3EE',
  },

  content: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
  },

  iconContainer: {
    alignSelf: 'center',
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#ECFDF5',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },

  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#111827',
    textAlign: 'center',
  },

  subtitle: {
    fontSize: 15,
    color: '#64748B',
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 28,
    lineHeight: 22,
  },

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },

  rowLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  label: {
    fontSize: 14,
    color: '#64748B',
    marginLeft: 8,
  },

  value: {
    fontSize: 14,
    fontWeight: '600',
    color: '#111827',
  },

  amount: {
    color: '#16A34A',
    fontSize: 18,
    fontWeight: '700',
  },

  divider: {
    height: 1,
    backgroundColor: '#E5E7EB',
    marginVertical: 8,
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

  secondaryButton: {
    marginTop: 22,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#D6E4F5',
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },

  secondaryButtonText: {
    marginLeft: 8,
    color: '#1565C0',
    fontSize: 15,
    fontWeight: '700',
  },

  primaryButton: {
    marginTop: 14,
    backgroundColor: '#1565C0',
    borderRadius: 16,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },

  primaryButtonText: {
    marginLeft: 8,
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
});