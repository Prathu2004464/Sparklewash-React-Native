import React, { useEffect } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';

export default function LoginSuccessAnimationScreen() {
  const navigation = useNavigation<any>();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('MainTabs');
    }, 2200);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <LottieView
        source={require('../../assets/animations/login-success.json')}
        autoPlay
        loop={false}
        style={styles.animation}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F8FC',
    justifyContent: 'center',
    alignItems: 'center',
  },

  animation: {
    width: 220,
    height: 220,
  },
});