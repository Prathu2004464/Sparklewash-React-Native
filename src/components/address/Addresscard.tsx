import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MaterialIcons from '@react-native-vector-icons/material-design-icons';

type AddressType = 'Home' | 'Office' | 'Other';

interface AddressCardProps {
  type: AddressType;
  address: string;
  city: string;
  state: string;
  pincode: string;
  isDefault?: boolean;
  onPress: () => void;
}

export default function AddressCard({
  type,
  address,
  city,
  state,
  pincode,
  isDefault,
  onPress,
}: AddressCardProps) {
  const icon = type === 'Home' ? 'home-outline' : 'office-building-outline';

  return (
    <TouchableOpacity style={styles.card} activeOpacity={0.85} onPress={onPress}>
      <View style={styles.iconBox}>
        <MaterialIcons name={icon as any} size={24} color="#1565C0" />
      </View>

      <View style={{ flex: 1, marginLeft: 14 }}>
        <View style={styles.headerRow}>
          <Text style={styles.type}>{type}</Text>
          {isDefault && (
            <View style={styles.defaultBadge}>
              <Text style={styles.defaultText}>Default</Text>
            </View>
          )}
        </View>

        <Text style={styles.address}>{address}</Text>
        {(city || state || pincode) && (
          <Text style={styles.subText}>
            {[city, state, pincode].filter(Boolean).join(', ')}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
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
  iconBox: {
    width: 48,
    height: 48,
    borderRadius: 14,
    backgroundColor: '#E8F1FD',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  type: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111827',
  },
  defaultBadge: {
    marginLeft: 8,
    backgroundColor: '#DCFCE7',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 999,
  },
  defaultText: {
    color: '#166534',
    fontSize: 11,
    fontWeight: '700',
  },
  address: {
    marginTop: 4,
    fontSize: 14,
    color: '#374151',
  },
  subText: {
    marginTop: 2,
    fontSize: 13,
    color: '#6B7280',
  },
});