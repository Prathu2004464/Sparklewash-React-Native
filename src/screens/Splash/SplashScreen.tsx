import React, { useEffect, useRef } from 'react';
import {
  View,
  Animated,
  StyleSheet,
} from 'react-native';
import {
  useNavigation,
  StackActions,
} from '@react-navigation/native';

import { getToken } from '../../services/AsyncStorageService';

const SplashScreen = () => {
  const opacity = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation<any>();

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start();

    checkLogin();

    return () => {
      // Cleanup handled by the timeout inside checkLogin
    };
  }, []);

  const checkLogin = async () => {
    try {
      const token = await getToken();

      setTimeout(() => {
        if (token) {
          navigation.dispatch(
            StackActions.replace('App')
          );
        } else {
          navigation.dispatch(
            StackActions.replace('Auth')
          );
        }
      }, 2500);

    } catch (error) {
      console.log('SPLASH AUTH CHECK ERROR:', error);

      navigation.dispatch(
        StackActions.replace('Auth')
      );
    }
  };

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require('../../assets/images/sparklewash_logo.png')}
        style={[styles.logo, { opacity }]}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },

  logo: {
    width: 180,
    height: 180,
  },
});

export default SplashScreen;