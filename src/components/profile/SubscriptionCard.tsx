import React from "react";
import {
  StyleSheet,
  Text,
  View,
} from "react-native";
import MaterialIcons from "@react-native-vector-icons/material-design-icons";

interface SubscriptionCardProps {
  plan: string;
  status: "Active" | "Expired";
  expiryDate: string;
  remainingWashes: number;
}

export default function SubscriptionCard({
  plan,
  status,
  expiryDate,
  remainingWashes,
}: SubscriptionCardProps) {
  const isActive = status === "Active";

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Subscription</Text>

      <View style={styles.header}>
        <View style={styles.planSection}>
          <View style={styles.iconContainer}>
            <MaterialIcons
              name="star-circle"
              size={24}
              color="#F59E0B"
            />
          </View>

          <View>
            <Text style={styles.plan}>{plan}</Text>
            <Text style={styles.planLabel}>
              Current Plan
            </Text>
          </View>
        </View>

        <View
          style={[
            styles.badge,
            isActive
              ? styles.activeBadge
              : styles.expiredBadge,
          ]}
        >
          <Text
            style={[
              styles.badgeText,
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

      <View style={styles.divider} />

      <View style={styles.infoRow}>
        <View style={styles.infoItem}>
          <Text style={styles.label}>
            Expires On
          </Text>
          <Text style={styles.value}>
            {expiryDate}
          </Text>
        </View>

        <View style={styles.infoItem}>
          <Text style={styles.label}>
            Remaining Washes
          </Text>
          <Text style={styles.value}>
            {remainingWashes}
          </Text>
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

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  planSection: {
    flexDirection: "row",
    alignItems: "center",
  },

  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#FEF3C7",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },

  plan: {
    fontSize: 17,
    fontWeight: "700",
    color: "#111827",
  },

  planLabel: {
    marginTop: 3,
    fontSize: 13,
    color: "#6B7280",
  },

  badge: {
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
  },

  activeBadge: {
    backgroundColor: "#DCFCE7",
  },

  expiredBadge: {
    backgroundColor: "#FEE2E2",
  },

  badgeText: {
    fontSize: 13,
    fontWeight: "700",
  },

  divider: {
    height: 1,
    backgroundColor: "#E5E7EB",
    marginVertical: 20,
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
    fontWeight: "700",
    color: "#111827",
  },
});