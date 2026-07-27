import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface HistoryCardProps {
  vehicle: string;
  service: string;
  date: string;
  amount: string;
  status?: string;
}

export default function HistoryCard({
  vehicle,
  service,
  date,
  amount,
  status = "Completed",
}: HistoryCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.status}>{status}</Text>
        <Text style={styles.amount}>{amount}</Text>
      </View>

      <Text style={styles.vehicle}>{vehicle}</Text>

      <Text style={styles.service}>{service}</Text>

      <Text style={styles.date}>{date}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
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
    marginBottom: 12,
  },

  status: {
    backgroundColor: "#DCFCE7",
    color: "#15803D",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
    fontSize: 12,
    fontWeight: "700",
  },

  amount: {
    color: "#1565C0",
    fontSize: 18,
    fontWeight: "700",
  },

  vehicle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1F2937",
  },

  service: {
    marginTop: 6,
    color: "#6B7280",
    fontSize: 14,
  },

  date: {
    marginTop: 12,
    color: "#9CA3AF",
    fontSize: 13,
  },
});