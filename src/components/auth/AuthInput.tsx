import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TextInputProps,
} from 'react-native';

import MaterialIcons from '@react-native-vector-icons/material-design-icons';

interface AuthInputProps extends TextInputProps {
  label: string;
  icon: string;
  error?: string;
}

const AuthInput: React.FC<AuthInputProps> = ({
  label,
  icon,
  error,
  ...props
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>

      <View
          style={[
            styles.inputContainer,
            error ? styles.errorBorder : null,
          ]}
        >
        <MaterialIcons
          name={icon as any}
          size={22}
          color="#6B7280"
          style={styles.icon}
        />

        <TextInput
          style={styles.input}
          placeholderTextColor="#9CA3AF"
          {...props}
        />
      </View>

      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
};

export default AuthInput;

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

  errorBorder: {
  borderColor: '#EF4444',
},

errorText: {
  color: '#EF4444',
  fontSize: 12,
  marginTop: 6,
  marginLeft: 4,
  fontWeight: '500',
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


  error: {
    marginTop: 6,
    color: '#EF4444',
    fontSize: 12,
  },
});