import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
} from "react-native";

import HistoryCard from "../../components/cards/HistoryCard";

export default function HistoryScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <Text style={styles.title}>Wash History</Text>

        <Text style={styles.subtitle}>
          Your completed wash services
        </Text>

        <HistoryCard
          vehicle="Tata Nexon"
          service="Premium Exterior Wash"
          date="15 Jul 2026"
          amount="₹299"
        />

        <HistoryCard
          vehicle="Honda City"
          service="Interior + Exterior Wash"
          date="10 Jul 2026"
          amount="₹499"
        />

        <HistoryCard
          vehicle="Hyundai Creta"
          service="Foam Wash"
          date="03 Jul 2026"
          amount="₹399"
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F8F3",
  },

  content: {
    padding: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#1F2937",
  },

  subtitle: {
    fontSize: 15,
    color: "#6B7280",
    marginTop: 6,
    marginBottom: 20,
  },
});