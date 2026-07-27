import React from "react";
import {
  StyleSheet,
  Text,
  View,
} from "react-native";
import MaterialIcons from "@react-native-vector-icons/material-design-icons";

interface VehicleSummaryCardProps {
  vehicleName: string;
  registrationNumber: string;
  subscription: string;
  status: "Active" | "Inactive";
}

export default function VehicleSummaryCard({
  vehicleName,
  registrationNumber,
  subscription,
  status,
}: VehicleSummaryCardProps) {
  const isActive = status === "Active";

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>My Vehicle</Text>

      <View style={styles.vehicleHeader}>
        <View style={styles.iconContainer}>
          <MaterialIcons
            name="car"
            size={28}
            color="#1565C0"
          />
        </View>

        <View style={styles.vehicleInfo}>
          <Text style={styles.vehicleName}>
            {vehicleName}
          </Text>

          <Text style={styles.registration}>
            {registrationNumber}
          </Text>
        </View>
      </View>

      <View style={styles.divider} />

      <View style={styles.infoRow}>
        <View style={styles.infoItem}>
          <Text style={styles.label}>
            Subscription
          </Text>

          <Text style={styles.value}>
            {subscription}
          </Text>
        </View>

        <View style={styles.infoItem}>
          <Text style={styles.label}>
            Status
          </Text>

          <View
            style={[
              styles.statusBadge,
              isActive
                ? styles.activeBadge
                : styles.inactiveBadge,
            ]}
          >
            <Text
              style={[
                styles.statusText,
                {
                  color: isActive
                    ? "#16A34A"
                    : "#DC2626",
                },
              ]}
            >
              {status}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 20,
    marginBottom: 20,

    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },

  heading: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1F2937",
    marginBottom: 18,
  },

  vehicleHeader: {
    flexDirection: "row",
    alignItems: "center",
  },

  iconContainer: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#E8F2FD",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },

  vehicleInfo: {
    flex: 1,
  },

  vehicleName: {
    fontSize: 18,
    fontWeight: "700",
    color: "#111827",
  },

  registration: {
    marginTop: 4,
    fontSize: 14,
    color: "#6B7280",
  },

  divider: {
    height: 1,
    backgroundColor: "#E5E7EB",
    marginVertical: 18,
  },

  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  infoItem: {
    flex: 1,
  },

  label: {
    fontSize: 13,
    color: "#6B7280",
    marginBottom: 6,
  },

  value: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111827",
  },

  statusBadge: {
    alignSelf: "flex-start",
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 20,
  },

  activeBadge: {
    backgroundColor: "#DCFCE7",
  },

  inactiveBadge: {
    backgroundColor: "#FEE2E2",
  },

  statusText: {
    fontSize: 13,
    fontWeight: "700",
  },
});