import React, { useState } from 'react';
import { Image } from 'react-native';
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
const Logo: any = require('../../assets/images/sparklewash_logo.png');

const LoginScreen = ({ navigation }: any) => {
  const [rememberMe, setRememberMe] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleLogin = () => {
  setEmailError('');
  setPasswordError('');

  let valid = true;

  if (!email.trim()) {
    setEmailError('Email is required');
    valid = false;
  }

  if (!password.trim()) {
    setPasswordError('Password is required');
    valid = false;
  }

  if (!valid) {
    return;
  }

  // Temporary navigation while backend is not connected
  navigation.replace('App');
};

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scroll}
        >
          {/* Logo */}

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

          {/* Heading */}

          <Text style={styles.title}>
            Welcome Back 👋
          </Text>

          <Text style={styles.subtitle}>
            Login to continue managing your vehicles and subscriptions.
          </Text>

          {/* Email */}

          <AuthInput
            label="Email"
            icon="email-outline"
            placeholder="Enter your email"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
            error={emailError}
          />

          {/* Password */}

          <PasswordInput
            label="Password"
            placeholder="Enter your password"
            value={password}
            onChangeText={setPassword}
            error={passwordError}
          />

          {/* Remember */}

          <View style={styles.row}>

            <TouchableOpacity
              style={styles.checkboxContainer}
              onPress={() =>
                setRememberMe(!rememberMe)
              }
            >
              <View
                style={[
                  styles.checkbox,
                  rememberMe && styles.checkedBox,
                ]}
              >
                {rememberMe && (
                  <MaterialIcons
                    name="check"
                    size={14}
                    color="#FFFFFF"
                  />
                )}
              </View>

              <Text style={styles.rememberText}>
                Remember Me
              </Text>

            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate('ForgotPassword')}
            >
              <Text style={styles.forgot}>
                Forgot Password?
              </Text>
            </TouchableOpacity>

          </View>

          {/* Login Button */}

          <PrimaryButton
            title="Login"
            onPress={handleLogin}
          />

          {/* Divider */}

          <View style={styles.dividerRow}>

            <View style={styles.divider} />

            <Text style={styles.or}>
              OR
            </Text>

            <View style={styles.divider} />

          </View>

          {/* Google */}

          <TouchableOpacity style={styles.googleButton}>

            <MaterialIcons
              name="google"
              size={22}
              color="#EA4335"
            />

            <Text style={styles.googleText}>
              Continue with Google
            </Text>

          </TouchableOpacity>

          {/* Register */}

          <View style={styles.bottomRow}>

            <Text style={styles.bottomText}>
              Don't have an account?
            </Text>

            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Register')
              }
            >
              <Text style={styles.register}>
                Create Account
              </Text>
            </TouchableOpacity>

          </View>

        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen;

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
    marginBottom: 28,
  },

    logo: {
      width: 110,
      height: 110,
      marginBottom: 16,
    },

  appName: {
    fontSize: 28,
    fontWeight: '700',
    color: '#111827',
    marginTop: -15,
  marginBottom: 10,
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
    marginBottom: 30,
    lineHeight: 22,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },

  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#CBD5E1',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },

  checkedBox: {
    backgroundColor: '#2563EB',
    borderColor: '#2563EB',
  },

  rememberText: {
    color: '#374151',
    fontSize: 14,
  },

  forgot: {
    color: '#2563EB',
    fontWeight: '600',
    fontSize: 14,
  },

  dividerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 28,
  },

  divider: {
    flex: 1,
    height: 1,
    backgroundColor: '#E5E7EB',
  },

  or: {
    marginHorizontal: 12,
    color: '#9CA3AF',
    fontWeight: '600',
  },

  googleButton: {
    height: 56,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
  },

  googleText: {
    marginLeft: 10,
    fontWeight: '600',
    color: '#111827',
    fontSize: 16,
  },

  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 32,
  },

  bottomText: {
    color: '#6B7280',
  },

  register: {
    color: '#2563EB',
    fontWeight: '700',
    marginLeft: 6,
  },

});