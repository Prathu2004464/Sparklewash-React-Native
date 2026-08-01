import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  
} from "react-native";

import HomeHeader from "../../components/headers/HomeHeaders";
import DashboardStats from "../../components/cards/DashboardStats";
import UpcomingWashCard from "../../components/cards/UpcomingWashCard";
import VehicleCard from "../../components/cards/VehicleCard";
import ReportIssueCard from "../../components/cards/ReportIssueCard";
import QuickActionCard from "../Overview/OverviewScreen";

export default function OverviewScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        {/* Header */}
        <HomeHeader />

        {/* Dashboard Statistics */}
        <DashboardStats />

        {/* Upcoming Wash */}
        <UpcomingWashCard />

        {/* Quick Actions */}
        {/* Quick Actions */}

<Text style={styles.heading}>Quick Actions</Text>


        {/* Vehicles */}
        <Text style={styles.heading}>My Vehicles</Text>

        <VehicleCard
          vehicleName="Tata Nexon"
          vehicleNumber="MH 32 CF 0012"
          plan="Monthly Plan"
          daysLeft={12}
          active={true}
        />

        <VehicleCard
          vehicleName="Honda City"
          vehicleNumber="MH 12 AB 4521"
          plan="Weekly Plan"
          daysLeft={2}
          active={false}
        />

        {/* Support */}
        <Text style={styles.heading}>Support</Text>

        <ReportIssueCard />
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
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 30,
  },

  heading: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1F2937",
    marginTop: 20,
    marginBottom: 15,
  },
});