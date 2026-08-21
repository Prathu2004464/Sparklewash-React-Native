import React from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import MaterialIcons from '@react-native-vector-icons/material-design-icons';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';

const icons: Record<string, string> = {
  Overview: 'home-outline',
  History: 'history',
  Vehicles: 'car-outline',
  Billing: 'credit-card-outline',
  Settings: 'cog-outline',
};

export default function CustomTabBar({
  state,
  navigation,
}: BottomTabBarProps) {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        {state.routes.map((route, index) => {
          const isFocused = state.index === index;

          return (
            <TouchableOpacity
  key={route.key}
  activeOpacity={0.85}
  style={styles.tab}
  onPress={() => navigation.navigate(route.name)}>

                    {isFocused ? (
                    <View style={styles.activeBubble}>
                    <MaterialIcons
                        name={icons[route.name] as any}
                        size={28}
                        color="#FFFFFF"
                    />
                    </View>
                ) : (
                    <View style={styles.inactiveBubble}>
                    <MaterialIcons
                        name={icons[route.name] as any}
                        size={26}
                        color="#64748B"
                    />
                    </View>
                )}
                </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    left: 16,
    right: 16,
    bottom: 18,
    alignItems: 'center',
  },

  container: {
    flexDirection: 'row',
    width: '100%',
    height: 76,
    backgroundColor: '#FFFFFF',
    borderRadius: 38,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12,

    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowRadius: 14,
    shadowOffset: { width: 0, height: 4 },
    elevation: 10,

    overflow: 'visible',
  },

  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  circle: {
    width: 56,
    height: 56,
    borderRadius: 28, // PERFECT CIRCLE
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },

  activeCircle: {
    backgroundColor: '#1565C0',

    // FLOAT ABOVE THE BAR
    transform: [{ translateY: -24 }],

    borderWidth: 4,
    borderColor: '#FFFFFF',

    shadowColor: '#1565C0',
    shadowOpacity: 0.45,
    shadowRadius: 14,
    shadowOffset: { width: 0, height: 6 },
    elevation: 16,
  },

  inactiveBubble: {
  width: 56,
  height: 56,
  borderRadius: 28,
  alignItems: 'center',
  justifyContent: 'center',
},

activeBubble: {
  position: 'absolute',
  top: -24, // float above bar
  width: 60,
  height: 60,
  borderRadius: 30, // always a perfect circle
  backgroundColor: '#1565C0',
  alignItems: 'center',
  justifyContent: 'center',

  borderWidth: 4,
  borderColor: '#FFFFFF',

  shadowColor: '#1565C0',
  shadowOpacity: 0.45,
  shadowRadius: 14,
  shadowOffset: { width: 0, height: 6 },
  elevation: 16,
},
});