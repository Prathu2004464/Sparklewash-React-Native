import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

import PasswordInput from '../../components/auth/PasswordInput';
import PrimaryButton from '../../components/auth/PrimaryButton';

const ResetPasswordScreen = ({ navigation }: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}
        >
          {/* Icon */}

          <View style={styles.iconContainer}>
            <Ionicons
              name="lock-closed-outline"
              size={55}
              color="#2563EB"
            />
          </View>

          {/* Heading */}

          <Text style={styles.title}>
            Reset Password
          </Text>

          <Text style={styles.subtitle}>
            Create a strong new password for your SparkleWash account.
          </Text>

          {/* New Password */}

          <PasswordInput
            label="New Password"
            placeholder="Enter new password"
          />

          {/* Confirm Password */}

          <PasswordInput
            label="Confirm Password"
            placeholder="Confirm new password"
          />

          {/* Button */}

          <PrimaryButton
            title="Reset Password"
            onPress={() => navigation.navigate('Login')}
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ResetPasswordScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },

  content: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 24,
  },

  iconContainer: {
    width: 110,
    height: 110,
    borderRadius: 55,
    backgroundColor: '#DBEAFE',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 30,
  },

  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#111827',
    textAlign: 'center',
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 15,
    color: '#6B7280',
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 35,
  },
});