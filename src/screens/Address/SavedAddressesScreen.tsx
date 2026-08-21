import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import MaterialIcons from "@react-native-vector-icons/material-design-icons";

import AddressCard from "../../components/address/Addresscard";
import API from '../../services/api';

export default function SavedAddressesScreen() {
  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadAddress();
  }, []);

  const loadAddress = async () => {
    try {
      setLoading(true);
      const response = await API.get('/customer/profile');
      setProfile(response.data.profile);
    } catch (error) {
      console.log('ADDRESS LOAD ERROR:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <ActivityIndicator size="large" color="#1565C0" style={{ flex: 1 }} />
      </SafeAreaView>
    );
  }

  let addressCard = null;
  if (profile?.address) {
    // Split address safely: "Street, City, State, Pincode"
    const parts = String(profile.address)
      .split(',')
      .map(p => p.trim());

    const [address = '', city = '', state = '', pincode = ''] = parts;

    addressCard = (
      <AddressCard
        type="Home"
        address={address}
        city={city}
        state={state}
        pincode={pincode}
        isDefault
        onPress={() => {}}
      />
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>Saved Addresses</Text>

        <Text style={styles.subtitle}>
          Manage your saved service locations
        </Text>

        {addressCard ?? (
          <View style={styles.emptyState}>
            <MaterialIcons
              name="map-marker-outline"
              size={48}
              color="#94A3B8"
            />

            <Text style={styles.emptyTitle}>
              No address saved
            </Text>

            <Text style={styles.emptySubtitle}>
              Add your service address from Edit Profile.
            </Text>
          </View>
        )}
        <TouchableOpacity
          activeOpacity={0.85}
          style={styles.addButton}
          onPress={() => {}}
        >
          <MaterialIcons
            name={"plus" as any}
            size={22}
            color="#FFFFFF"
          />

          <Text style={styles.addButtonText}>
             Add New Address
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
    paddingVertical: 36,
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