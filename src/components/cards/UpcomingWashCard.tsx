import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function UpcomingWashCard() {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Next Wash</Text>

      <Text style={styles.date}>Tomorrow • 09:00 AM</Text>

      <Text style={styles.address}>
        Home Service • Nagpur, Maharashtra
      </Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Reschedule</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#1565C0",
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
  },

  title: {
    color: "#fff",
    fontSize: 15,
  },

  date: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "700",
    marginTop: 10,
  },

  address: {
    color: "#D9E8FF",
    marginTop: 6,
    marginBottom: 18,
    fontSize: 14,
  },

  button: {
    alignSelf: "flex-start",
    backgroundColor: "#fff",
    borderRadius: 25,
    paddingHorizontal: 18,
    paddingVertical: 10,
  },

  buttonText: {
    color: "#1565C0",
    fontWeight: "700",
  },
});