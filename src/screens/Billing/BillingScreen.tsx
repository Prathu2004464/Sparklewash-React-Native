import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AppStackParamList } from '../../navigation/AppStack';

import UpcomingBillingCard from '../../components/cards/UpcomingBillingCard';
import PaymentHistoryCard from '../../components/cards/PaymentHistoryCard';
import API from '../../services/api';
import { View, ActivityIndicator } from 'react-native';

export default function BillingScreen() {
  const navigation =
    useNavigation<NativeStackNavigationProp<AppStackParamList>>();

  const [expandedCard, setExpandedCard] = useState<number | null>(0);
  const [bills, setBills] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      loadBills();
    }, []);

    const loadBills = async () => {
      try {
        const response = await API.get('/customer/billing/unpaid');
        setBills(response.data.data || []);
      } catch (error) {
        console.log('BILLING ERROR:', error);
      } finally {
        setLoading(false);
      }
    };

        if (loading) {
      return (
        <SafeAreaView style={styles.container}>
          <ActivityIndicator
            size="large"
            color="#1565C0"
            style={{ flex: 1 }}
          />
        </SafeAreaView>
      );
    }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>Billing</Text>

        <Text style={styles.section}>Upcoming</Text>
        {bills.length === 0 ? (
          <View style={{ paddingVertical: 24 }}>
            <Text style={{ color: '#64748B', textAlign: 'center' }}>
              No unpaid bills
            </Text>
          </View>
        ) : (
          bills.map((bill, index) => (
            <UpcomingBillingCard
              key={bill.payment_id || index}
              vehicle={bill.vehicle_number || 'Vehicle'}
              plan={bill.plan_name || 'Plan'}
              dueDate={bill.to_date || bill.renewal_date || 'N/A'}
              amount={`₹${bill.total}`}
              expanded={expandedCard === index}
              onPress={() =>
                setExpandedCard(expandedCard === index ? null : index)
              }
              onPayNow={() =>
                navigation.navigate('PaymentScreen', {
                  bill: {
                    paymentId: bill.payment_id,
                    vehicleNumber: bill.vehicle_number,
                    plan: bill.plan_name,
                    dueDate: bill.to_date,
                    amount: String(bill.total),
                  },
                })
              }
            />
          ))
        )}

        <Text style={styles.section}>Payment History</Text>

          {bills.map((bill, index) => (
          <PaymentHistoryCard
            key={`history-${bill.payment_id || index}`}
            vehicle={bill.vehicle_number || 'Vehicle'}
            plan={bill.plan_name || 'Plan'}
            date={bill.bill_sent_at || bill.to_date || 'N/A'}
            amount={`₹${bill.total}`}
          />
        ))}
              </ScrollView>
            </SafeAreaView>
          );
        }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F8FC',
  },

  content: {
    padding: 18,
    paddingBottom: 100,
  },

  title: {
    fontSize: 30,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 24,
  },

  section: {
    fontSize: 15,
    fontWeight: '600',
    color: '#8B95A7',
    marginBottom: 12,
    marginTop: 10,
  },
});

