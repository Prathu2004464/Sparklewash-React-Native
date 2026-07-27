import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function DashboardStats() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Active Plans</Text>
        <Text style={styles.value}>2</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>Pending Due</Text>
        <Text style={styles.value}>₹499</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 18,
    marginBottom: 10,
  },

  card: {
    width: "48%",
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    paddingVertical: 20,
    alignItems: "center",

    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },

  title: {
    color: "#6B7280",
    fontSize: 14,
    marginBottom: 8,
  },

  value: {
    fontSize: 28,
    fontWeight: "700",
    color: "#1565C0",
  },
});