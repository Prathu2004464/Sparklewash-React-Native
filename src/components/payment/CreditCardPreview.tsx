import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MaterialIcons from "@react-native-vector-icons/material-design-icons";

interface CreditCardPreviewProps {
  cardType?: "Visa" | "Mastercard" | "RuPay";
  cardNumber: string;
  cardHolder: string;
  expiry: string;
}

export default function CreditCardPreview({
  cardType = "Visa",
  cardNumber,
  cardHolder,
  expiry,
}: CreditCardPreviewProps) {
  return (
    <View style={styles.card}>
      {/* Top */}

      <View style={styles.topRow}>
        <MaterialIcons
          name="credit-card-chip-outline"
          size={36}
          color="#FFF"
        />

        <Text style={styles.brand}>
          {cardType.toUpperCase()}
        </Text>
      </View>

      {/* Card Number */}

      <Text style={styles.number}>
        {cardNumber || "•••• •••• •••• ••••"}
      </Text>

      {/* Bottom */}

      <View style={styles.bottomRow}>
        <View>
          <Text style={styles.label}>
            CARD HOLDER
          </Text>

          <Text style={styles.value}>
            {cardHolder || "YOUR NAME"}
          </Text>
        </View>

        <View>
          <Text style={styles.label}>
            EXPIRES
          </Text>

          <Text style={styles.value}>
            {expiry || "MM/YY"}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    height: 210,
    borderRadius: 24,
    padding: 24,
    justifyContent: "space-between",

    backgroundColor: "#2563EB",

    shadowColor: "#2563EB",
    shadowOpacity: 0.25,
    shadowRadius: 18,
    shadowOffset: {
      width: 0,
      height: 10,
    },

    elevation: 8,
  },

  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  brand: {
    color: "#FFF",
    fontSize: 24,
    fontWeight: "800",
    letterSpacing: 1,
  },

  number: {
    color: "#FFF",
    fontSize: 24,
    letterSpacing: 3,
    fontWeight: "700",
  },

  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  label: {
    color: "#DBEAFE",
    fontSize: 11,
    marginBottom: 4,
    letterSpacing: 1,
  },

  value: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "600",
  },
});