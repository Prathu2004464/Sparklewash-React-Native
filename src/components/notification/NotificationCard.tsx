import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import MaterialIcons from "@react-native-vector-icons/material-design-icons";

interface NotificationCardProps {
  icon: string;
  iconColor: string;
  title: string;
  message: string;
  time: string;
  unread?: boolean;
  onPress?: () => void;
}

export default function NotificationCard({
  icon,
  iconColor,
  title,
  message,
  time,
  unread = false,
  onPress,
}: NotificationCardProps) {
  return (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.8}
      onPress={onPress}
    >
      <View
        style={[
          styles.iconContainer,
          { backgroundColor: iconColor + "20" },
        ]}
      >
        <MaterialIcons
          name={icon as any}
          size={24}
          color={iconColor}
        />
      </View>

      <View style={styles.content}>
        <View style={styles.topRow}>
          <Text style={styles.title}>{title}</Text>

          {unread && <View style={styles.dot} />}
        </View>

        <Text style={styles.message}>
          {message}
        </Text>

        <Text style={styles.time}>
          {time}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    padding: 16,
    borderRadius: 18,
    marginBottom: 14,
    elevation: 2,
    alignItems: "flex-start",
  },

  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 14,
  },

  content: {
    flex: 1,
  },

  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  title: {
    fontSize: 16,
    fontWeight: "700",
    color: "#111827",
  },

  message: {
    marginTop: 6,
    fontSize: 14,
    color: "#6B7280",
    lineHeight: 20,
  },

  time: {
    marginTop: 10,
    fontSize: 12,
    color: "#9CA3AF",
  },

  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#2563EB",
  },
});