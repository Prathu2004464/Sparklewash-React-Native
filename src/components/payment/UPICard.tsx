import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import MaterialIcons from "@react-native-vector-icons/material-design-icons";

interface UPICardProps {
  upiId: string;
  isDefault?: boolean;
  onPress?: () => void;
}

export default function UPICard({
  upiId,
  isDefault = false,
  onPress,
}: UPICardProps) {
  return (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.85}
      onPress={onPress}
    >
      <View style={styles.leftSection}>
        <View style={styles.iconContainer}>
          <MaterialIcons
            name="wallet-outline"
            size={24}
            color="#2563EB"
          />
        </View>

        <View style={styles.info}>
          <Text style={styles.title}>UPI</Text>
          <Text style={styles.upiId}>{upiId}</Text>

          {isDefault && (
            <View style={styles.badge}>
              <Text style={styles.badgeText}>
                DEFAULT
              </Text>
            </View>
          )}
        </View>
      </View>

      <MaterialIcons
        name="chevron-right"
        size={24}
        color="#9CA3AF"
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    padding: 18,
    marginBottom: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    elevation: 3,
  },

  leftSection: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },

  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#EFF6FF",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 14,
  },

  info: {
    flex: 1,
  },

  title: {
    fontSize: 17,
    fontWeight: "700",
    color: "#111827",
  },

  upiId: {
    marginTop: 4,
    fontSize: 14,
    color: "#6B7280",
  },

  badge: {
    marginTop: 8,
    alignSelf: "flex-start",
    backgroundColor: "#DBEAFE",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },

  badgeText: {
    color: "#2563EB",
    fontSize: 11,
    fontWeight: "700",
  },
});