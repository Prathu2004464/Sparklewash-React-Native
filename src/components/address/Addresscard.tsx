import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import MaterialIcons from "@react-native-vector-icons/material-design-icons";

interface AddressCardProps {
  type: "Home" | "Office" | "Other";
  address: string;
  city: string;
  state: string;
  pincode: string;
  isDefault?: boolean;
  onPress?: () => void;
}

export default function AddressCard({
  type,
  address,
  city,
  state,
  pincode,
  isDefault = false,
  onPress,
}: AddressCardProps) {
  const getIcon = () => {
    switch (type) {
      case "Home":
        return "home";
      case "Office":
        return "business";
      default:
        return "location-on";
    }
  };

  return (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.85}
      onPress={onPress}
    >
      <View style={styles.header}>
        <View style={styles.leftSection}>
          <View style={styles.iconContainer}>
            <MaterialIcons
              name={getIcon() as any}
              size={22}
              color="#1565C0"
            />
          </View>

          <View>
            <Text style={styles.title}>{type}</Text>

            <Text style={styles.address}>
              {address}
            </Text>

            <Text style={styles.location}>
              {city}, {state} - {pincode}
            </Text>
          </View>
        </View>

        {isDefault && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>
              Default
            </Text>
          </View>
        )}
      </View>

      <MaterialIcons
        name="chevron-right"
        size={24}
        color="#9CA3AF"
        style={styles.arrow}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 18,
    marginBottom: 16,

    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },

  leftSection: {
    flexDirection: "row",
    flex: 1,
  },

  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#E8F2FD",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 14,
  },

  title: {
    fontSize: 17,
    fontWeight: "700",
    color: "#1F2937",
    marginBottom: 6,
  },

  address: {
    fontSize: 15,
    color: "#374151",
    lineHeight: 22,
  },

  location: {
    marginTop: 4,
    fontSize: 14,
    color: "#6B7280",
  },

  badge: {
    backgroundColor: "#E8F5E9",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
  },

  badgeText: {
    color: "#2E7D32",
    fontSize: 12,
    fontWeight: "700",
  },

  arrow: {
    alignSelf: "flex-end",
    marginTop: 12,
  },
});