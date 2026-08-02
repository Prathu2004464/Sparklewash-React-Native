import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TextInputProps,
  TouchableOpacity,
} from 'react-native';
import MaterialIcons from '@react-native-vector-icons/material-design-icons';

interface PasswordInputProps extends TextInputProps {
  label: string;
  error?: string;
}

const PasswordInput: React.FC<PasswordInputProps> = ({
  label,
  error,
  ...props
}) => {
  const [secureText, setSecureText] = useState(true);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>

      <View style={[styles.inputContainer, error && styles.errorBorder]}>
        <MaterialIcons
          name="lock-outline"
          size={20}
          color="#6B7280"
          style={styles.icon}
        />

        <TextInput
          style={styles.input}
          secureTextEntry={secureText}
          placeholderTextColor="#9CA3AF"
          {...props}
        />

        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => setSecureText(!secureText)}
        >
          <MaterialIcons
            name={secureText ? 'eye-off-outline' : 'eye-outline'}
            size={22}
            color="#6B7280"
          />
        </TouchableOpacity>
      </View>

      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
};

export default PasswordInput;

const styles = StyleSheet.create({
  container: {
    marginBottom: 18,
  },

  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 8,
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 56,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 16,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
  },

  icon: {
    marginRight: 12,
  },

  input: {
    flex: 1,
    fontSize: 16,
    color: '#111827',
  },

  errorBorder: {
    borderColor: '#EF4444',
  },

  error: {
    marginTop: 6,
    color: '#EF4444',
    fontSize: 12,
  },
});