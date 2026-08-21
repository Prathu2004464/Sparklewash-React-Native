import React, { useRef, useState } from 'react';
import { Alert } from 'react-native';
import { verifyOTP } from '../../services/phoneAuth';
import axios from 'axios';
import { saveToken } from '../../services/AsyncStorageService';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import MaterialIcons from '@react-native-vector-icons/material-design-icons';
import PrimaryButton from '../../components/auth/PrimaryButton';
import API_BASE_URL from '../../config/api';

const OTPVerificationScreen = ({ navigation, route }: any) => {
  const {
  type,
  fullName,
  email,
  phone,
  password,
  } = route.params;
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [loading, setLoading] = useState(false);

  const inputs = useRef<Array<TextInput | null>>([]);

  const handleChange = (text: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    if (text && index < 5) {
      inputs.current[index + 1]?.focus();
    }
  };

  const handleVerifyOTP = async () => {

  const code = otp.join("");

  if (code.length !== 6) {
    Alert.alert("Invalid OTP", "Please enter all 6 digits.");
    return;
  }

  try {

    setLoading(true);

    const result = await verifyOTP(code);

    if (!result.success) {
      Alert.alert("Verification Failed", result.message);
      return;
    }

    // Firebase Verified Successfully

    // Firebase Verified Successfully

const response = await axios.post(
  `${API_BASE_URL}/auth/register`,
  {
    name: fullName,
    email,
    phone,
    password,
  }
);

const { user } = response.data;

console.log('Registered user:', user);

navigation.replace('SuccessAnimationScreen');

  } catch (error: any) {

    console.log(error);

    Alert.alert(
      "Error",
      error.response?.data?.message || error.message
    );

  } finally {

    setLoading(false);

  }

  };

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
            <MaterialIcons
              name="shield-check"
              size={55}
              color="#2563EB"
            />
          </View>

          <Text style={styles.title}>
            OTP Verification
          </Text>

          <Text style={styles.subtitle}>
            Enter the 6-digit verification code sent to your registered phone number.
          </Text>

          <View style={styles.otpContainer}>
            {otp.map((digit, index) => (
              <TextInput
                key={index}
                ref={(ref) => {
                  inputs.current[index] = ref;
                }}
                style={styles.otpBox}
                value={digit}
                onChangeText={(text) => handleChange(text, index)}
                keyboardType="number-pad"
                maxLength={1}
              />
            ))}
          </View>

          <Text style={styles.timer}>
            Resend OTP in 00:59
          </Text>

          <TouchableOpacity>
            <Text style={styles.resend}>
              Resend Code
            </Text>
          </TouchableOpacity>

          <PrimaryButton
              title={loading ? "Verifying..." : "Verify OTP"}
              onPress={handleVerifyOTP}
          />

        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default OTPVerificationScreen;

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
    textAlign: 'center',
    color: '#6B7280',
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 40,
  },

  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },

  otpBox: {
    width: 50,
    height: 58,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#CBD5E1',
    backgroundColor: '#FFFFFF',
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '700',
    color: '#111827',
  },

  timer: {
    textAlign: 'center',
    color: '#6B7280',
    marginBottom: 8,
  },

  resend: {
    textAlign: 'center',
    color: '#2563EB',
    fontWeight: '700',
    marginBottom: 28,
  },
});