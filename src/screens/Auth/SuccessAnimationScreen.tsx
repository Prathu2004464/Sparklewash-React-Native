import React, { useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';

export default function SuccessAnimationScreen() {
  const navigation = useNavigation<any>();

  useEffect(() => {
    const timer = setTimeout(() => {
     navigation.replace('Login');
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <LottieView
          source={require('../../assets/animations/success.json')}
          autoPlay
          loop={false}
          style={styles.animation}
        />

        <Text style={styles.title}>Verified Successfully</Text>
        <Text style={styles.subtitle}>Welcome to SparkleWash</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  animation: {
    width: 220,
    height: 220,
  },

  title: {
    marginTop: 12,
    fontSize: 24,
    fontWeight: '700',
    color: '#111827',
  },

  subtitle: {
    marginTop: 8,
    fontSize: 15,
    color: '#64748B',
  },
});