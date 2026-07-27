import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import MaterialIcons from "@react-native-vector-icons/material-design-icons";

import Addresscard from "../../components/address/Addresscard";

export default function SavedAddressesScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>Saved Addresses</Text>

        <Text style={styles.subtitle}>
          Manage your saved service locations
        </Text>

        <Addresscard
          type="Home"
          address="123 MG Road"
          city="Nagpur"
          state="Maharashtra"
          pincode="440001"
          isDefault
          onPress={() => {}}
        />

        <Addresscard
          type="Office"
          address="IT Park, Hingna Road"
          city="Nagpur"
          state="Maharashtra"
          pincode="440016"
          onPress={() => {}}
        />

        <TouchableOpacity
          activeOpacity={0.85}
          style={styles.addButton}
          onPress={() => {}}
        >
          <MaterialIcons
            name={"add"as any}
            size={22}
            color="#FFFFFF"
          />

          <Text style={styles.addButtonText}>
            Add New Address
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F8FC",
  },

  content: {
    padding: 18,
    paddingBottom: 100,
  },

  title: {
    fontSize: 30,
    fontWeight: "700",
    color: "#1F2937",
  },

  subtitle: {
    marginTop: 6,
    marginBottom: 24,
    fontSize: 15,
    color: "#6B7280",
  },

  addButton: {
    marginTop: 12,
    height: 56,
    borderRadius: 14,
    backgroundColor: "#1565C0",

    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },

  addButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
    marginLeft: 8,
  },
});