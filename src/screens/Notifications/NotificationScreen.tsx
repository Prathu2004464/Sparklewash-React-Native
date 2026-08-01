import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import MaterialIcons from "@react-native-vector-icons/material-design-icons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import NotificationCard from "../../components/notification/NotificationCard";
import EmptyNotification from "../../components/notification/EmptyNotification";
import { AppStackParamList } from "../../navigation/AppStack";

type Notification = {
  id: number;
  icon: string;
  iconColor: string;
  title: string;
  message: string;
  time: string;
  unread: boolean;
};

export default function NotificationScreen() {
  const navigation =
    useNavigation<NativeStackNavigationProp<AppStackParamList>>();

  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: 1,
      icon: "check-circle-outline",
      iconColor: "#16A34A",
      title: "Booking Confirmed",
      message: "Your Premium Wash has been confirmed.",
      time: "10 min ago",
      unread: true,
    },
    {
      id: 2,
      icon: "credit-card-outline",
      iconColor: "#7C3AED",
      title: "Payment Successful",
      message: "₹599 payment completed successfully.",
      time: "25 min ago",
      unread: true,
    },
    {
      id: 3,
      icon: "star-outline",
      iconColor: "#F59E0B",
      title: "Subscription Reminder",
      message: "Your subscription expires tomorrow.",
      time: "Yesterday",
      unread: false,
    },
    {
      id: 4,
      icon: "gift-outline",
      iconColor: "#EA580C",
      title: "Special Offer",
      message: "Flat 20% OFF on Ceramic Wash.",
      time: "2 days ago",
      unread: false,
    },
  ]);

  const markAllRead = () => {
    setNotifications((prev) =>
      prev.map((item) => ({
        ...item,
        unread: false,
      }))
    );
  };

  const clearAll = () => {
    setNotifications([]);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}

      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
        >
          <MaterialIcons
            name="arrow-left"
            size={24}
            color="#111827"
          />
        </TouchableOpacity>

        <Text style={styles.title}>
          Notifications
        </Text>

        <View style={{ width: 24 }} />
      </View>

      {/* Buttons */}

      {notifications.length > 0 && (
        <View style={styles.actionRow}>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={markAllRead}
          >
            <MaterialIcons
              name="check-circle-outline"
              size={18}
              color="#2563EB"
            />

            <Text style={styles.actionText}>
              Mark All Read
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.actionButton}
            onPress={clearAll}
          >
            <MaterialIcons
              name="delete-outline"
              size={18}
              color="#DC2626"
            />

            <Text
              style={[
                styles.actionText,
                { color: "#DC2626" },
              ]}
            >
              Clear All
            </Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Notifications */}

      {notifications.length === 0 ? (
        <EmptyNotification />
      ) : (
        <ScrollView
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}
        >
          {notifications.map((item) => (
            <NotificationCard
              key={item.id}
              icon={item.icon}
              iconColor={item.iconColor}
              title={item.title}
              message={item.message}
              time={item.time}
              unread={item.unread}
            />
          ))}
        </ScrollView>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFC",
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 18,
    backgroundColor: "#FFF",
  },

  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#111827",
  },

  actionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginVertical: 16,
  },

  actionButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 12,
    elevation: 2,
  },

  actionText: {
    marginLeft: 8,
    color: "#2563EB",
    fontWeight: "600",
  },

  content: {
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
});