import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface BillingCardProps {
  title: string;
  date: string;
  amount: string;
  status: "Paid" | "Pending" | "Failed";
}

export default function BillingCard({
  title,
  date,
  amount,
  status,
}: BillingCardProps) {
  const statusColor =
    status === "Paid"
      ? "#16A34A"
      : status === "Pending"
      ? "#F59E0B"
      : "#DC2626";

  const statusBackground =
    status === "Paid"
      ? "#DCFCE7"
      : status === "Pending"
      ? "#FEF3C7"
      : "#FEE2E2";

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.date}>{date}</Text>
        </View>

        <Text style={styles.amount}>{amount}</Text>
      </View>

      <View
        style={[
          styles.statusBadge,
          { backgroundColor: statusBackground },
        ]}
      >
        <Text style={[styles.statusText, { color: statusColor }]}>
          {status}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 18,
    marginBottom: 16,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  title: {
    fontSize: 17,
    fontWeight: "700",
    color: "#1F2937",
  },

  date: {
    marginTop: 4,
    color: "#6B7280",
    fontSize: 13,
  },

  amount: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1565C0",
  },

  statusBadge: {
    alignSelf: "flex-start",
    marginTop: 14,
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 20,
  },

  statusText: {
    fontSize: 12,
    fontWeight: "700",
  },
});