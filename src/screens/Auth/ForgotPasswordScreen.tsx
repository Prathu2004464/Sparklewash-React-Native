import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

import AuthInput from '../../components/auth/AuthInput';
import PrimaryButton from '../../components/auth/PrimaryButton';

const ForgotPasswordScreen = ({ navigation }: any) => {
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
          <View style={styles.iconContainer}>
            <Ionicons
              name="lock-open-outline"
              size={50}
              color="#2563EB"
            />
          </View>

          <Text style={styles.title}>
            Forgot Password?
          </Text>

          <Text style={styles.subtitle}>
            Enter your registered email address and we'll send you an OTP to reset your password.
          </Text>

          <AuthInput
            label="Email Address"
            icon="mail-outline"
            placeholder="Enter your email"
            keyboardType="email-address"
          />

          <PrimaryButton
          title="Send OTP"
          onPress={() =>
            navigation.navigate('OTPVerification', {
              type: 'forgot',
            })
          }
          />
          <Text
            style={styles.back}
            onPress={() => navigation.goBack()}
          >
            Back to Login
          </Text>

        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ForgotPasswordScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },

  content: {
    flexGrow: 1,
    padding: 24,
    justifyContent: 'center',
  },

  iconContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
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
    textAlign: 'center',
    color: '#6B7280',
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 35,
  },

  back: {
    textAlign: 'center',
    color: '#2563EB',
    marginTop: 24,
    fontWeight: '700',
    fontSize: 15,
  },
});