import React, { useState } from 'react';
import {
  Alert,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import MaterialIcons from '@react-native-vector-icons/material-design-icons';
import { useNavigation } from '@react-navigation/native';

export default function EditProfileScreen() {
  const navigation = useNavigation();

  const [fullName, setFullName] = useState('Prathamesh Yeotikar');
  const [email, setEmail] = useState('prathamesh@email.com');
  const [phone, setPhone] = useState('+91 9876543210');
  const [city, setCity] = useState('Nagpur');
  const [address, setAddress] = useState('Dharampeth, Nagpur');

  const handleSave = () => {
    Alert.alert('Profile Updated', 'Your profile has been updated successfully.');

    // TODO: Call backend API here later

    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>

        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}>
            <MaterialIcons name="chevron-left" size={28} color="#111827" />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>Edit Profile</Text>

          <View style={{ width: 40 }} />
        </View>

        {/* Avatar */}
        <View style={styles.avatarContainer}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>P</Text>
          </View>

          <TouchableOpacity style={styles.changePhotoButton}>
            <MaterialIcons name="camera" size={18} color="#1565C0" />
            <Text style={styles.changePhotoText}>Change Photo</Text>
          </TouchableOpacity>
        </View>

        {/* Form */}
        <View style={styles.formCard}>

          <Field
            label="Full Name"
            value={fullName}
            onChangeText={setFullName}
            icon="account-outline"
          />

          <Field
            label="Email Address"
            value={email}
            onChangeText={setEmail}
            icon="email-outline"
            keyboardType="email-address"
          />

          <Field
            label="Phone Number"
            value={phone}
            onChangeText={setPhone}
            icon="phone-outline"
            keyboardType="phone-pad"
          />

          <Field
            label="City"
            value={city}
            onChangeText={setCity}
            icon="map-marker-outline"
          />

          <Field
            label="Address"
            value={address}
            onChangeText={setAddress}
            icon="home-outline"
            multiline
          />
        </View>

        {/* Save Button */}
        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <MaterialIcons name="content-save-outline" size={20} color="#FFFFFF" />
          <Text style={styles.saveButtonText}>Save Changes</Text>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
}

function Field({
  label,
  value,
  onChangeText,
  icon,
  keyboardType = 'default',
  multiline = false,
}: any) {
  return (
    <View style={styles.fieldContainer}>
      <Text style={styles.fieldLabel}>{label}</Text>

      <View style={[styles.inputContainer, multiline && styles.inputContainerMultiline]}>
        <MaterialIcons name={icon} size={22} color="#64748B" />

        <TextInput
          style={[styles.input, multiline && styles.inputMultiline]}
          value={value}
          onChangeText={onChangeText}
          keyboardType={keyboardType}
          multiline={multiline}
          placeholder={label}
          placeholderTextColor="#94A3B8"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEF3EE',
  },

  content: {
    padding: 20,
    paddingBottom: 40,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 24,
  },

  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },

  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#111827',
  },

  avatarContainer: {
    alignItems: 'center',
    marginBottom: 28,
  },

  avatar: {
    width: 110,
    height: 110,
    borderRadius: 55,
    backgroundColor: '#1565C0',
    justifyContent: 'center',
    alignItems: 'center',
  },

  avatarText: {
    color: '#FFFFFF',
    fontSize: 40,
    fontWeight: '700',
  },

  changePhotoButton: {
    marginTop: 14,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: '#D6E4F5',
  },

  changePhotoText: {
    marginLeft: 6,
    color: '#1565C0',
    fontWeight: '600',
  },

  formCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
  },

  fieldContainer: {
    marginBottom: 18,
  },

  fieldLabel: {
    fontSize: 13,
    fontWeight: '600',
    color: '#475569',
    marginBottom: 8,
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8FAFC',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    paddingHorizontal: 14,
    minHeight: 54,
  },

  inputContainerMultiline: {
    alignItems: 'flex-start',
    paddingTop: 14,
  },

  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 15,
    color: '#111827',
  },

  inputMultiline: {
    minHeight: 90,
    textAlignVertical: 'top',
  },

  saveButton: {
    marginTop: 24,
    backgroundColor: '#1565C0',
    borderRadius: 18,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },

  saveButtonText: {
    marginLeft: 8,
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
});