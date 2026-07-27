import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MaterialIcons from "@react-native-vector-icons/material-design-icons";

interface PaymentHistoryCardProps {
  vehicle: string;
  plan: string;
  date: string;
  amount: string;
}

export default function PaymentHistoryCard({
  vehicle,
  plan,
  date,
  amount,
}: PaymentHistoryCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.left}>
        <View style={styles.iconContainer}>
          <MaterialIcons
            name="check"
            size={18}
            color="#16A34A"
          />
        </View>

        <View>
          <Text style={styles.title}>
            {vehicle} · {plan}
          </Text>

          <Text style={styles.date}>
            {date}
          </Text>
        </View>
      </View>

      <Text style={styles.amount}>{amount}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },

  left: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },

  iconContainer: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: "#DCFCE7",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },

  title: {
    fontSize: 15,
    fontWeight: "700",
    color: "#1F2937",
  },

  date: {
    marginTop: 4,
    fontSize: 12,
    color: "#9CA3AF",
  },

  amount: {
    fontSize: 16,
    fontWeight: "700",
    color: "#1F2937",
  },
});