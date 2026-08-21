import React, { useState } from 'react';
import {
  Alert,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import MaterialIcons from '@react-native-vector-icons/material-design-icons';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AppStackParamList } from '../../navigation/AppStack';

type PaymentRouteProp = RouteProp<AppStackParamList, 'PaymentScreen'>;

export default function PaymentScreen() {
  const navigation =
    useNavigation<NativeStackNavigationProp<AppStackParamList>>();
  const route = useRoute<PaymentRouteProp>();

  const { bill } = route.params;
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    try {
      setLoading(true);

      // Demo payment success
      setTimeout(() => {
        setLoading(false);

        Alert.alert('Payment Successful', 'Your bill has been paid.');

        navigation.replace('PaymentSuccessScreen', {
          bill: {
            ...bill,
            status: 'Paid',
          },
        });
      }, 1500);
    } catch (error) {
      setLoading(false);
      Alert.alert('Payment Failed', 'Please try again.');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>

        <View style={styles.iconContainer}>
          <MaterialIcons name="receipt" size={60} color="#1565C0" />
        </View>

        <Text style={styles.title}>Payment Summary</Text>
        <Text style={styles.subtitle}>
          Review your bill before payment
        </Text>

        <View style={styles.card}>
          <Row label="Vehicle" value={bill.vehicleNumber} />
          <Row label="Plan" value={bill.plan} />
          <Row label="Billing Month" value={bill.month} />
          <Row label="Due Date" value={bill.dueDate} />

          <View style={styles.divider} />

          <View style={styles.totalRow}>
            <Text style={styles.totalLabel}>Total Amount</Text>
            <Text style={styles.totalValue}>₹{bill.amount}</Text>
          </View>
        </View>

        <TouchableOpacity
          style={styles.payButton}
          onPress={handlePayment}
          disabled={loading}>
          <Text style={styles.payButtonText}>
            {loading ? 'Processing...' : `Pay ₹${bill.amount}`}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.cancelButton}
          onPress={() => navigation.goBack()}>
          <Text style={styles.cancelButtonText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <View style={styles.row}>
      <Text style={styles.rowLabel}>{label}</Text>
      <Text style={styles.rowValue}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEF3EE',
  },
  content: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  iconContainer: {
    alignSelf: 'center',
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#E8F1FD',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#111827',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: '#64748B',
    textAlign: 'center',
    marginTop: 6,
    marginBottom: 24,
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
    marginBottom: 14,
  },
  rowLabel: {
    fontSize: 14,
    color: '#64748B',
  },
  rowValue: {
    fontSize: 14,
    fontWeight: '600',
    color: '#111827',
  },
  divider: {
    height: 1,
    backgroundColor: '#E5E7EB',
    marginVertical: 16,
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  totalLabel: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111827',
  },
  totalValue: {
    fontSize: 22,
    fontWeight: '700',
    color: '#1565C0',
  },
  payButton: {
    marginTop: 24,
    backgroundColor: '#1565C0',
    borderRadius: 16,
    paddingVertical: 16,
    alignItems: 'center',
  },
  payButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
  cancelButton: {
    marginTop: 12,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#CBD5E1',
    paddingVertical: 16,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  cancelButtonText: {
    color: '#334155',
    fontSize: 16,
    fontWeight: '600',
  },
});