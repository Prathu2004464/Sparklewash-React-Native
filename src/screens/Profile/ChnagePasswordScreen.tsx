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

export default function ChangePasswordScreen() {
  const navigation = useNavigation();

  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleChangePassword = () => {
    if (!currentPassword || !newPassword || !confirmPassword) {
      Alert.alert('Required', 'Please fill all fields.');
      return;
    }

    if (newPassword.length < 6) {
      Alert.alert('Weak Password', 'Password must be at least 6 characters.');
      return;
    }

    if (newPassword !== confirmPassword) {
      Alert.alert('Mismatch', 'New passwords do not match.');
      return;
    }

    Alert.alert('Success', 'Password changed successfully.', [
      {
        text: 'OK',
        onPress: () => navigation.goBack(),
      },
    ]);
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

          <Text style={styles.headerTitle}>Change Password</Text>

          <View style={{ width: 40 }} />
        </View>

        {/* Icon */}
        <View style={styles.iconContainer}>
          <MaterialIcons name="lock-reset" size={64} color="#1565C0" />
        </View>

        <Text style={styles.title}>Update Password</Text>
        <Text style={styles.subtitle}>
          Enter your current password and choose a secure new password.
        </Text>

        {/* Form */}
        <View style={styles.card}>

          {/* Current Password */}
          <PasswordField
            label="Current Password"
            value={currentPassword}
            onChangeText={setCurrentPassword}
            secureTextEntry={!showCurrent}
            toggle={() => setShowCurrent(!showCurrent)}
            visible={showCurrent}
          />

          {/* New Password */}
          <PasswordField
            label="New Password"
            value={newPassword}
            onChangeText={setNewPassword}
            secureTextEntry={!showNew}
            toggle={() => setShowNew(!showNew)}
            visible={showNew}
          />

          {/* Confirm Password */}
          <PasswordField
            label="Confirm New Password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry={!showConfirm}
            toggle={() => setShowConfirm(!showConfirm)}
            visible={showConfirm}
          />
        </View>

        {/* Save Button */}
        <TouchableOpacity
          style={styles.saveButton}
          onPress={handleChangePassword}>

          <MaterialIcons
            name="content-save-outline"
            size={20}
            color="#FFFFFF"
          />

          <Text style={styles.saveButtonText}>Update Password</Text>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
}

function PasswordField({
  label,
  value,
  onChangeText,
  secureTextEntry,
  toggle,
  visible,
}: any) {
  return (
    <View style={styles.fieldContainer}>
      <Text style={styles.fieldLabel}>{label}</Text>

      <View style={styles.inputContainer}>
        <MaterialIcons name="lock-outline" size={22} color="#64748B" />

        <TextInput
          style={styles.input}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
          placeholder={label}
          placeholderTextColor="#94A3B8"
        />

        <TouchableOpacity onPress={toggle}>
          <MaterialIcons
            name={visible ? 'eye-off-outline' : 'eye-outline'}
            size={22}
            color="#64748B"
          />
        </TouchableOpacity>
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
    elevation: 2,
  },

  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#111827',
  },

  iconContainer: {
    alignSelf: 'center',
    width: 110,
    height: 110,
    borderRadius: 55,
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
    marginTop: 8,
    marginBottom: 28,
    lineHeight: 22,
  },

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 20,
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

  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 15,
    color: '#111827',
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