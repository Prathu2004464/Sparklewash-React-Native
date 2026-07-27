import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import MaterialIcons from "@react-native-vector-icons/material-design-icons";

interface PaymentCardProps {
  cardType: "Visa" | "Mastercard" | "RuPay";
  cardNumber: string;
  cardHolder: string;
  expiry: string;
  isDefault?: boolean;
  onPress?: () => void;
}

export default function PaymentCard({
  cardType,
  cardNumber,
  cardHolder,
  expiry,
  isDefault = false,
  onPress,
}: PaymentCardProps) {
  return (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.85}
      onPress={onPress}
    >
      <View style={styles.topRow}>
        <View style={styles.cardIcon}>
          <MaterialIcons
            name="credit-card-outline"
            size={24}
            color="#2563EB"
          />
        </View>

        {isDefault && (
          <View style={styles.defaultBadge}>
            <Text style={styles.defaultText}>DEFAULT</Text>
          </View>
        )}
      </View>

      <Text style={styles.cardType}>{cardType}</Text>

      <Text style={styles.cardNumber}>
        •••• •••• •••• {cardNumber}
      </Text>

      <Text style={styles.cardHolder}>
        {cardHolder}
      </Text>

      <View style={styles.bottomRow}>
        <Text style={styles.expiry}>
          Expires {expiry}
        </Text>

        <MaterialIcons
          name="chevron-right"
          size={24}
          color="#9CA3AF"
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 18,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    elevation: 3,
  },

  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },

  cardIcon: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: "#EFF6FF",
    justifyContent: "center",
    alignItems: "center",
  },

  defaultBadge: {
    backgroundColor: "#DBEAFE",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
  },

  defaultText: {
    color: "#2563EB",
    fontWeight: "700",
    fontSize: 11,
  },

  cardType: {
    fontSize: 18,
    fontWeight: "700",
    color: "#111827",
    marginBottom: 12,
  },

  cardNumber: {
    fontSize: 18,
    letterSpacing: 2,
    color: "#374151",
    marginBottom: 16,
  },

  cardHolder: {
    fontSize: 15,
    color: "#6B7280",
    marginBottom: 18,
  },

  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  expiry: {
    fontSize: 14,
    color: "#6B7280",
  },
});