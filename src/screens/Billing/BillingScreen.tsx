import React, { useState } from "react";

import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
} from "react-native";

import UpcomingBillingCard from "../../components/cards/UpcomingBillingCard";
import PaymentHistoryCard from "../../components/cards/PaymentHistoryCard";

export default function BillingScreen() {

const [expandedCard, setExpandedCard] = useState<number | null>(0);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>Billing</Text>

        <Text style={styles.section}>Upcoming</Text>

        <UpcomingBillingCard
          vehicle="Honda City"
          plan="Weekly"
          dueDate="24 Jul 2026"
          amount="₹349"
          expanded={expandedCard === 0}
          onPress={() =>
            setExpandedCard(expandedCard === 0 ? null : 0)
          }
        />

        <UpcomingBillingCard
          vehicle="Nexon"
          plan="Monthly"
          dueDate="1 Aug 2026"
          amount="₹999"
          autoPay
          expanded={expandedCard === 1}
          onPress={() =>
            setExpandedCard(expandedCard === 1 ? null : 1)
          }
/>

        <Text style={styles.section}>Payment History</Text>

        <PaymentHistoryCard
          vehicle="Nexon"
          plan="Monthly Renewal"
          date="15 Jul 2026"
          amount="₹999"
        />

        <PaymentHistoryCard
          vehicle="Honda City"
          plan="Weekly"
          date="17 Jul 2026"
          amount="₹349"
        />
      </ScrollView>
    </SafeAreaView>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F8FC",
  },

  content: {
    padding: 18,
    paddingBottom: 100,
  },

  title: {
    fontSize: 30,
    fontWeight: "700",
    color: "#1F2937",
    marginBottom: 24,
  },

  section: {
    fontSize: 15,
    fontWeight: "600",
    color: "#8B95A7",
    marginBottom: 12,
    marginTop: 10,
  },
});