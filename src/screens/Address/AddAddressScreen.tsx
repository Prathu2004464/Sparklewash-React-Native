import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function AddAddressScreen() {
  const [addressType, setAddressType] = useState<
    "Home" | "Office" | "Other"
  >("Home");

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>Add Address</Text>

        <Text style={styles.subtitle}>
          Save a new service location
        </Text>

        <Text style={styles.label}>Address Type</Text>

        <View style={styles.typeContainer}>
          {["Home", "Office", "Other"].map((type) => (
            <TouchableOpacity
              key={type}
              style={[
                styles.typeButton,
                addressType === type && styles.activeType,
              ]}
              onPress={() =>
                setAddressType(type as "Home" | "Office" | "Other")
              }
            >
              <Text
                style={[
                  styles.typeText,
                  addressType === type && styles.activeTypeText,
                ]}
              >
                {type}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.label}>House / Flat No.</Text>
        <TextInput
          placeholder="Enter house or flat number"
          style={styles.input}
        />

        <Text style={styles.label}>Street</Text>
        <TextInput
          placeholder="Enter street name"
          style={styles.input}
        />

        <Text style={styles.label}>Landmark</Text>
        <TextInput
          placeholder="Nearby landmark"
          style={styles.input}
        />

        <Text style={styles.label}>City</Text>
        <TextInput
          placeholder="Enter city"
          style={styles.input}
        />

        <Text style={styles.label}>State</Text>
        <TextInput
          placeholder="Enter state"
          style={styles.input}
        />

        <Text style={styles.label}>Pincode</Text>
        <TextInput
          placeholder="Enter pincode"
          keyboardType="number-pad"
          style={styles.input}
        />

        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.saveText}>
            Save Address
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
    fontSize: 28,
    fontWeight: "700",
    color: "#1F2937",
  },

  subtitle: {
    marginTop: 6,
    marginBottom: 24,
    fontSize: 15,
    color: "#6B7280",
  },

  label: {
    marginBottom: 8,
    marginTop: 16,
    fontSize: 15,
    fontWeight: "600",
    color: "#374151",
  },

  typeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  typeButton: {
    flex: 1,
    paddingVertical: 12,
    marginHorizontal: 4,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#D1D5DB",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },

  activeType: {
    backgroundColor: "#1565C0",
    borderColor: "#1565C0",
  },

  typeText: {
    fontSize: 15,
    fontWeight: "600",
    color: "#374151",
  },

  activeTypeText: {
    color: "#FFFFFF",
  },

  input: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    paddingHorizontal: 16,
    height: 52,
    fontSize: 15,
    color: "#1F2937",
  },

  saveButton: {
    marginTop: 32,
    height: 56,
    borderRadius: 14,
    backgroundColor: "#1565C0",
    justifyContent: "center",
    alignItems: "center",
  },

  saveText: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "700",
  },
});