import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MaterialCommunityIcons from '@react-native-vector-icons/material-design-icons';

interface VehicleCardProps {
  vehicleName: string;
  vehicleNumber: string;
  plan: string;
  daysLeft: number;
  active?: boolean;
}

const VehicleCard = ({
  vehicleName,
  vehicleNumber,
  plan,
  daysLeft,
  active = true,
}: VehicleCardProps) => {
  return (
    <View style={styles.card}>
      {/* Top Row */}
      <View style={styles.topRow}>
        <View style={styles.left}>
          <MaterialCommunityIcons
            name="car-outline"
            size={22}
            color="#1565C0"
            />


          <View style={{ marginLeft: 10 }}>
            <Text style={styles.vehicleName}>{vehicleName}</Text>
            <Text style={styles.vehicleNumber}>{vehicleNumber}</Text>
          </View>
        </View>

        <View
          style={[
            styles.badge,
            {
              backgroundColor: active ? "#E8F5E9" : "#EAF3FF",
            },
          ]}
        >
          <Text
            style={[
              styles.badgeText,
              {
                color: active ? "#4E8B2C" : "#1565C0",
              },
            ]}
          >
            {active ? "Active" : "Renew soon"}
          </Text>
        </View>
      </View>

      {/* Plan */}
      <Text style={styles.plan}>
        {plan} · {daysLeft} days left
      </Text>

      {/* Progress */}
      <View style={styles.progressBg}>
        <View
          style={[
            styles.progress,
            {
              width: `${Math.min((daysLeft / 15) * 100, 100)}%`,
              backgroundColor: active ? "#6EA73A" : "#1565C0",
            },
          ]}
        />
      </View>
    </View>
  );
};

export default VehicleCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 18,
    padding: 16,
    marginBottom: 16,

    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 4,
    },

    elevation: 2,
  },

  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  left: {
    flexDirection: "row",
    alignItems: "center",
  },

  vehicleName: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1D3557",
  },

  vehicleNumber: {
    marginTop: 2,
    fontSize: 13,
    color: "#9CA3AF",
  },

  badge: {
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 15,
  },

  badgeText: {
    fontSize: 12,
    fontWeight: "600",
  },

  plan: {
    marginTop: 18,
    fontSize: 16,
    fontWeight: "600",
    color: "#375A1C",
  },

  progressBg: {
    marginTop: 10,
    height: 5,
    backgroundColor: "#ECECEC",
    borderRadius: 10,
    overflow: "hidden",
  },

  progress: {
    height: 5,
    borderRadius: 10,
  },
});