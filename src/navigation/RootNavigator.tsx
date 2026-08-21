import React, { useEffect, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';

import AuthNavigator from './AuthNavigator';
import AppStack from './AppStack';
import SplashScreen from '../screens/Splash/SplashScreen';

import { getToken } from '../services/AsyncStorageService';

export default function RootNavigator() {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const checkAuth = async () => {
    try {
      const token = await getToken();
      setIsLoggedIn(!!token);
    } catch (error) {
      console.log('AUTH CHECK ERROR:', error);
      setIsLoggedIn(false);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    checkAuth();

    // Re-check token periodically so logout updates immediately
    const interval = setInterval(checkAuth, 1000);

    return () => clearInterval(interval);
  }, []);

  if (isLoading) {
    return <SplashScreen />;
  }

  return isLoggedIn ? <AppStack /> : <AuthNavigator />;
}