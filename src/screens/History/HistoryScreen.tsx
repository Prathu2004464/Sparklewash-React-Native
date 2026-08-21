import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
} from "react-native";

import HistoryCard from "../../components/cards/HistoryCard";
import API from '../../services/api';
import { ActivityIndicator, View } from 'react-native';

export default function HistoryScreen() {

  const [history, setHistory] = useState<any[]>([]);
      const [loading, setLoading] = useState(true);

      useEffect(() => {
        loadHistory();
      }, []);

      const loadHistory = async () => {
        try {
          const response = await API.get('/customer/wash-history');
          setHistory(response.data || []);
        } catch (error) {
          console.log('HISTORY ERROR:', error);
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
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <Text style={styles.title}>Wash History</Text>

        <Text style={styles.subtitle}>
          Your completed wash services
        </Text>
            {history.length === 0 ? (
              <View style={{ paddingVertical: 32 }}>
                <Text style={{ textAlign: 'center', color: '#64748B' }}>
                  No wash history found
                </Text>
              </View>
            ) : (
              history.map((item, index) => (
                <HistoryCard
                  key={item.id || index}
                  vehicle={
                    item.vehicle_model
                      ? `${item.vehicle_model} (${item.vehicle_number})`
                      : item.vehicle_number || 'Vehicle'
                  }
                  service={item.service_name || 'Wash Service'}
                  date={item.wash_date || item.created_at || 'N/A'}
                  amount={`₹${item.amount || 0}`}
                />
              ))
            )}
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
    padding: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#1F2937",
  },

  subtitle: {
    fontSize: 15,
    color: "#6B7280",
    marginTop: 6,
    marginBottom: 20,
  },
});