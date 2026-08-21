import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import MaterialIcons from '@react-native-vector-icons/material-design-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AppStackParamList } from '../../navigation/AppStack';

export default function PaymentMethodsScreen() {
  const navigation =
  useNavigation<NativeStackNavigationProp<AppStackParamList>>();
  // Temporary empty state
  const [paymentMethods] = useState<any[]>([]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}>

        <Text style={styles.title}>Payment Methods</Text>

        <Text style={styles.subtitle}>
          Manage your saved payment methods for subscription renewals.
        </Text>

        {paymentMethods.length === 0 ? (
          <View style={styles.emptyState}>
            <MaterialIcons
              name="credit-card-outline"
              size={52}
              color="#94A3B8"
            />

            <Text style={styles.emptyTitle}>
              No payment method added
            </Text>

            <Text style={styles.emptySubtitle}>
              Add a card or UPI ID to make future subscription payments easier.
            </Text>
          </View>
        ) : (
          paymentMethods.map((item, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.85}
            style={styles.card}
            onPress={() =>
              navigation.navigate('PaymentDetailsScreen')
            }>

            <View style={styles.cardIcon}>
              <MaterialIcons
                name="credit-card-outline"
                size={24}
                color="#1565C0"
              />
            </View>

            <View style={{ flex: 1, marginLeft: 14 }}>
              <Text style={styles.cardTitle}>
                {item.type}
              </Text>

              <Text style={styles.cardSubtitle}>
                {item.masked}
              </Text>
            </View>

            {item.isDefault && (
              <View style={styles.defaultBadge}>
                <Text style={styles.defaultText}>
                  Default
                </Text>
              </View>
            )}
          </TouchableOpacity>
        ))
        )}

        <TouchableOpacity
        activeOpacity={0.85}
        style={styles.addButton}
        onPress={() =>
          navigation.navigate('AddCardScreen')
        }>
          <MaterialIcons
            name={"plus" as any}
            size={22}
            color="#FFFFFF"
          />

          <Text style={styles.addButtonText}>
            Add Payment Method
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.85}
          style={[
            styles.addButton,
            { backgroundColor: '#0F766E', marginTop: 12 },
          ]}
          onPress={() =>
            navigation.navigate('AddUPIScreen')
          }>

          <MaterialIcons
            name="wallet-outline"
            size={22}
            color="#FFFFFF"
          />

          <Text style={styles.addButtonText}>
            Add UPI ID
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F8FC',
  },

  content: {
    padding: 18,
    paddingBottom: 100,
  },

  title: {
    fontSize: 30,
    fontWeight: '700',
    color: '#1F2937',
  },

  subtitle: {
    marginTop: 6,
    marginBottom: 24,
    fontSize: 15,
    color: '#6B7280',
    lineHeight: 22,
  },

  emptyState: {
    backgroundColor: '#FFFFFF',
    borderRadius: 22,
    paddingVertical: 40,
    paddingHorizontal: 22,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    shadowColor: '#000',
    shadowOpacity: 0.04,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
    elevation: 2,
  },

  emptyTitle: {
    marginTop: 14,
    fontSize: 18,
    fontWeight: '700',
    color: '#1F2937',
  },

  emptySubtitle: {
    marginTop: 8,
    fontSize: 14,
    color: '#64748B',
    textAlign: 'center',
    lineHeight: 21,
    paddingHorizontal: 10,
  },

  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },

  cardIcon: {
    width: 48,
    height: 48,
    borderRadius: 14,
    backgroundColor: '#E8F1FD',
    justifyContent: 'center',
    alignItems: 'center',
  },

  cardTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111827',
  },

  cardSubtitle: {
    marginTop: 2,
    fontSize: 13,
    color: '#6B7280',
  },

  defaultBadge: {
    backgroundColor: '#DCFCE7',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 999,
  },

  defaultText: {
    color: '#166534',
    fontSize: 11,
    fontWeight: '700',
  },

  addButton: {
    marginTop: 12,
    height: 56,
    borderRadius: 16,
    backgroundColor: '#1565C0',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    shadowColor: '#1565C0',
    shadowOpacity: 0.18,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
  },

  addButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
    marginLeft: 8,
  },
});