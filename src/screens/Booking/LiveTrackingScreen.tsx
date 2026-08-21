import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import MaterialIcons from '@react-native-vector-icons/material-design-icons';
import { useNavigation } from '@react-navigation/native';

const TRACKING_STEPS = [
  {
    title: 'Booking Confirmed',
    subtitle: 'Your wash plan has been confirmed',
    time: '10:30 AM',
    status: 'completed',
    icon: 'check-circle',
  },
  {
    title: 'Washer Assigned',
    subtitle: 'We are assigning a wash executive',
    time: 'Pending',
    status: 'active',
    icon: 'account-check',
  },
  {
    title: 'On The Way',
    subtitle: 'Your washer is heading to your location',
    time: 'Pending',
    status: 'pending',
    icon: 'motorbike',
  },
  {
    title: 'Wash In Progress',
    subtitle: 'Vehicle cleaning has started',
    time: 'Pending',
    status: 'pending',
    icon: 'water',
  },
  {
    title: 'Wash Completed',
    subtitle: 'Your vehicle wash has been completed',
    time: 'Pending',
    status: 'pending',
    icon: 'flag-checkered',
  },
];

export default function LiveTrackingScreen() {
  const navigation = useNavigation();

  const getCircleStyle = (status: string) => {
    switch (status) {
      case 'completed':
        return styles.circleCompleted;
      case 'active':
        return styles.circleActive;
      default:
        return styles.circlePending;
    }
  };

  const getIconColor = (status: string) => {
    switch (status) {
      case 'completed':
        return '#FFFFFF';
      case 'active':
        return '#FFFFFF';
      default:
        return '#94A3B8';
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>

        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}>
            <MaterialIcons name="chevron-left" size={24} color="#111827" />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>Live Wash Tracking</Text>
          <View style={{ width: 40 }} />
        </View>

        {/* Status Banner */}
        <View style={styles.banner}>
          <View style={styles.bannerIcon}>
            <MaterialIcons name="water" size={28} color="#1565C0" />
          </View>

          <View style={{ flex: 1 }}>
            <Text style={styles.bannerTitle}>Washer Assigned</Text>
            <Text style={styles.bannerSubtitle}>
              Your wash executive will be assigned shortly
            </Text>
          </View>
        </View>

        {/* ETA Card */}
        <View style={styles.etaCard}>
          <View style={styles.etaItem}>
            <MaterialIcons name="timer-outline" size={22} color="#1565C0" />
            <Text style={styles.etaLabel}>Estimated Arrival</Text>
            <Text style={styles.etaValue}>15 - 20 min</Text>
          </View>

          <View style={styles.etaDivider} />

          <View style={styles.etaItem}>
            <MaterialIcons name="calendar-today" size={22} color="#1565C0" />
            <Text style={styles.etaLabel}>Today</Text>
            <Text style={styles.etaValue}>Morning Slot</Text>
          </View>
        </View>

        {/* Vehicle Card */}
        <View style={styles.vehicleCard}>
          <View style={styles.vehicleIcon}>
            <MaterialIcons name="car" size={30} color="#1565C0" />
          </View>

          <View style={{ flex: 1, marginLeft: 14 }}>
            <Text style={styles.vehicleTitle}>Maruti Baleno</Text>
            <Text style={styles.vehicleText}>MH 26 MD 5656</Text>
            <Text style={styles.vehicleText}>Sedan</Text>
          </View>
        </View>

        {/* Tracking Timeline */}
        <View style={styles.timelineCard}>
          <Text style={styles.timelineTitle}>Tracking Timeline</Text>

          {TRACKING_STEPS.map((step, index) => {
            const isLast = index === TRACKING_STEPS.length - 1;

            return (
              <View key={index} style={styles.stepRow}>

                {/* Left Timeline */}
                <View style={styles.leftColumn}>
                  <View style={[styles.circle, getCircleStyle(step.status)]}>
                    <MaterialIcons
                      name={step.icon as any}
                      size={18}
                      color={getIconColor(step.status)}
                    />
                  </View>

                  {!isLast && (
                    <View
                      style={[
                        styles.line,
                        step.status === 'completed'
                          ? styles.lineCompleted
                          : styles.linePending,
                      ]}
                    />
                  )}
                </View>

                {/* Right Content */}
                <View style={styles.stepContent}>
                  <View style={styles.stepHeader}>
                    <Text style={styles.stepTitle}>{step.title}</Text>
                    <Text style={styles.stepTime}>{step.time}</Text>
                  </View>

                  <Text style={styles.stepSubtitle}>{step.subtitle}</Text>
                </View>
              </View>
            );
          })}
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEF3EE',
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 8,
  },

  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },

  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#111827',
  },

  banner: {
    marginHorizontal: 16,
    marginTop: 12,
    backgroundColor: '#E8F1FD',
    borderRadius: 22,
    padding: 18,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#C7DBFB',
  },

  bannerIcon: {
    width: 56,
    height: 56,
    borderRadius: 16,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },

  bannerTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: '#1565C0',
  },

  bannerSubtitle: {
    fontSize: 13,
    color: '#334155',
    marginTop: 4,
  },

  etaCard: {
    marginHorizontal: 16,
    marginTop: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 22,
    paddingVertical: 18,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
    elevation: 2,
  },

  etaItem: {
    alignItems: 'center',
    flex: 1,
  },

  etaDivider: {
    width: 1,
    height: 48,
    backgroundColor: '#E5E7EB',
  },

  etaLabel: {
    marginTop: 6,
    fontSize: 12,
    color: '#64748B',
  },

  etaValue: {
    marginTop: 4,
    fontSize: 15,
    fontWeight: '700',
    color: '#111827',
  },

  vehicleCard: {
    marginHorizontal: 16,
    marginTop: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 18,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
    elevation: 2,
  },

  vehicleIcon: {
    width: 60,
    height: 60,
    borderRadius: 18,
    backgroundColor: '#E8F1FD',
    justifyContent: 'center',
    alignItems: 'center',
  },

  vehicleTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: '#111827',
  },

  vehicleText: {
    fontSize: 13,
    color: '#64748B',
    marginTop: 2,
  },

  timelineCard: {
    marginHorizontal: 16,
    marginTop: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 26,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
    elevation: 2,
  },

  timelineTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 18,
  },

  stepRow: {
    flexDirection: 'row',
  },

  leftColumn: {
    width: 40,
    alignItems: 'center',
  },

  circle: {
    width: 34,
    height: 34,
    borderRadius: 17,
    justifyContent: 'center',
    alignItems: 'center',
  },

  circleCompleted: {
    backgroundColor: '#16A34A',
  },

  circleActive: {
    backgroundColor: '#1565C0',
  },

  circlePending: {
    backgroundColor: '#E5E7EB',
  },

  line: {
    width: 3,
    flex: 1,
    marginTop: 4,
    borderRadius: 2,
  },

  lineCompleted: {
    backgroundColor: '#16A34A',
  },

  linePending: {
    backgroundColor: '#E5E7EB',
  },

  stepContent: {
    flex: 1,
    paddingBottom: 24,
    paddingLeft: 12,
  },

  stepHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  stepTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#111827',
  },

  stepTime: {
    fontSize: 12,
    color: '#64748B',
  },

  stepSubtitle: {
    marginTop: 4,
    fontSize: 13,
    color: '#64748B',
    lineHeight: 20,
  },
});