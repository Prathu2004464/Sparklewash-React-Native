import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";

import VehicleCard from "../../components/cards/VehicleCard";

export default function VehiclesScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <Text style={styles.title}>My Vehicles</Text>

        <Text style={styles.subtitle}>
          Manage all your registered vehicles
        </Text>

        <VehicleCard
          vehicleName="Tata Nexon"
          vehicleNumber="MH 32 CF 0012"
          plan="Monthly Plan"
          daysLeft={12}
          active
        />

        <VehicleCard
          vehicleName="Honda City"
          vehicleNumber="MH 12 AB 4521"
          plan="Weekly Plan"
          daysLeft={2}
          active={false}
        />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>
            + Add New Vehicle
          </Text>
        </TouchableOpacity>
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
    marginTop: 6,
    marginBottom: 20,
    color: "#6B7280",
    fontSize: 15,
  },

  button: {
    marginTop: 25,
    backgroundColor: "#1565C0",
    borderRadius: 18,
    paddingVertical: 16,
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  },
});