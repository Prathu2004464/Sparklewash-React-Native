import React, { useState } from 'react';
import { Image } from 'react-native';
import { Alert } from 'react-native';
import { sendOTP } from "../../services/phoneAuth";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from 'react-native';

import MaterialIcons from '@react-native-vector-icons/material-design-icons';

import AuthInput from '../../components/auth/AuthInput';
import PasswordInput from '../../components/auth/PasswordInput';
import PrimaryButton from '../../components/auth/PrimaryButton';
import Logo from '../../assets/images/sparklewash_logo.png';

const RegisterScreen = ({ navigation }: any) => {
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [fullNameError, setFullNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [termsError, setTermsError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
  setFullNameError('');
  setEmailError('');
  setPhoneError('');
  setPasswordError('');
  setConfirmPasswordError('');
  setTermsError('');

  let valid = true;

  if (!fullName.trim()) {
    setFullNameError('Full name is required');
    valid = false;
  }

  if (!email.trim()) {
    setEmailError('Email is required');
    valid = false;
  }

  if (!phone.trim()) {
    setPhoneError('Phone number is required');
    valid = false;
  }

  if (!password) {
    setPasswordError('Password is required');
    valid = false;
  }

  if (!confirmPassword) {
    setConfirmPasswordError('Confirm your password');
    valid = false;
  }

  if (password !== confirmPassword) {
    setConfirmPasswordError('Passwords do not match');
    valid = false;
  }

  if (!acceptedTerms) {
    setTermsError('Please accept Terms & Conditions');
    valid = false;
  }

  if (!valid) return;

  // Validate Indian mobile number
  if (!/^[6-9]\d{9}$/.test(phone)) {
    setPhoneError("Enter a valid 10-digit mobile number");
    return;
  }

  try {
    setLoading(true);

    const fullPhone = `+91${phone}`;

    const result = await sendOTP(fullPhone);

    if (!result.success) {
      Alert.alert("OTP Failed", result.message);
      return;
    }

    navigation.navigate("OTPVerification", {
      type: "register",
      fullName,
      email,
      phone,
      password,
    });

  } catch (error: any) {
    Alert.alert("Error", error.message);
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
          contentContainerStyle={styles.scroll}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.logoContainer}>
              <Image
                source={Logo}
                style={styles.logo}
                resizeMode="contain"
              />

              <Text style={styles.appName}>
                SparkleWash
              </Text>
            </View>

          <Text style={styles.title}>
            Create Account
          </Text>

          <Text style={styles.subtitle}>
            Join SparkleWash and manage your vehicles with ease.
          </Text>

          <AuthInput
            label="Full Name"
            icon="account-outline"
            value={fullName}
            onChangeText={setFullName}
            error={fullNameError}
          />

          <AuthInput
            label="Email"
            icon="email-outline"
            placeholder="Enter your email"
            value={email}
            onChangeText={setEmail}
            error={emailError}
          />

          <AuthInput
            label="Phone Number"
            icon="phone-outline"
            placeholder="Enter your phone number"
            value={phone}
            onChangeText={setPhone}
            error={phoneError}
          />

          <PasswordInput
            label="Password"
            value={password}
            onChangeText={setPassword}
            error={passwordError}
          />

          <PasswordInput
            label="Confirm Password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            error={confirmPasswordError}
          />

          <TouchableOpacity
            style={styles.checkboxContainer}
            onPress={() => setAcceptedTerms(!acceptedTerms)}
          >
            <View
              style={[
                styles.checkbox,
                acceptedTerms && styles.checkedBox,
              ]}
            >
              {acceptedTerms && (
                <MaterialIcons
                  name="check"
                  size={14}
                  color="#FFFFFF"
                />
              )}
            </View>

            <Text style={styles.termsText}>
              I agree to the Terms & Conditions
            </Text>
          </TouchableOpacity>

          <PrimaryButton
            title={loading ? "Sending OTP..." : "Create Account"}
            onPress={handleRegister}
          />

          <View style={styles.bottomRow}>
            <Text style={styles.bottomText}>
              Already have an account?
            </Text>

            <TouchableOpacity
              onPress={() => navigation.goBack()}
            >
              <Text style={styles.login}>
                Login
              </Text>
            </TouchableOpacity>
          </View>

        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },

  scroll: {
    padding: 24,
    paddingTop: 40,
  },

  logoContainer: {
    alignItems: 'center',
    marginBottom: 24,
  },

  logoCircle: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: '#2563EB',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 14,
  },

  logo: {
  width: 90,
  height: 90,
},

  appName: {
    fontSize: 26,
    fontWeight: '700',
    color: '#111827',
  },

  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 8,
  },

  subtitle: {
    color: '#6B7280',
    fontSize: 15,
    marginBottom: 28,
    lineHeight: 22,
  },

  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },

  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#CBD5E1',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },

  checkedBox: {
    backgroundColor: '#2563EB',
    borderColor: '#2563EB',
  },

  termsText: {
    flex: 1,
    color: '#374151',
    fontSize: 14,
  },

  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30,
  },

  bottomText: {
    color: '#6B7280',
  },

  login: {
    marginLeft: 6,
    color: '#2563EB',
    fontWeight: '700',
  },
});