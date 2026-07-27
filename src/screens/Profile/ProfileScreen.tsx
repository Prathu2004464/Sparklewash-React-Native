import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
} from "react-native";

import ProfileHeader from "../../components/profile/ProfileHeader";
import ProfileInfoCard from "../../components/profile/ProfileInfoCard";
import SubscriptionCard from "../../components/profile/SubscriptionCard";
import QuickActionCard from "../../components/profile/QuickActionCard";

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>Profile</Text>

        <ProfileHeader
          name="Prathamesh Yeotikar"
          email="prathamesh@email.com"
        />

        <ProfileInfoCard
          fullName="Prathamesh Yeotikar"
          email="prathamesh@email.com"
          phone="+91 9876543210"
          memberSince="January 2026"
        />

        <SubscriptionCard
          plan="Premium Plan"
          status="Active"
          expiryDate="12 Sept 2026"
          remainingWashes={8}
        />

        <QuickActionCard
          onEditProfile={() => {}}
          onChangePassword={() => {}}
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
});