import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  LayoutAnimation,
  Platform,
  UIManager,
} from "react-native";
import MaterialIcons from "@react-native-vector-icons/material-design-icons";

if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

interface UpcomingBillingCardProps {
  vehicle: string;
  plan: string;
  dueDate: string;
  amount: string;
  autoPay?: boolean;
  expanded: boolean;
  onPress: () => void;
  onPayNow?: () => void;
}

export default function UpcomingBillingCard({
  vehicle,
  plan,
  dueDate,
  amount,
  autoPay = false,
  expanded,
  onPress,
  onPayNow,
}: UpcomingBillingCardProps) {
  const handlePress = () => {
    LayoutAnimation.configureNext(
      LayoutAnimation.Presets.easeInEaseOut
    );
    onPress();
  };

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={handlePress}
      style={[
        styles.card,
        expanded && styles.expandedCard,
      ]}
    >
      <View style={styles.row}>
        <View style={{ flex: 1 }}>
          <Text style={styles.title}>
            {vehicle} • {plan}
          </Text>

          <Text style={styles.subtitle}>
            Due {dueDate}
            {autoPay ? " • Autopay On" : ""}
          </Text>
        </View>

        <View style={styles.right}>
          <Text style={styles.amount}>{amount}</Text>

          <MaterialIcons
            name={expanded ? "chevron-up" : "chevron-down"}
            size={24}
            color="#6B7280"
          />
        </View>
      </View>

      {expanded && (
        <TouchableOpacity
          style={styles.button}
          onPress={onPayNow}
        >
          <Text style={styles.buttonText}>
            Pay Now
          </Text>
        </TouchableOpacity>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 18,
    marginBottom: 16,

    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },

  expandedCard: {
    borderWidth: 1,
    borderColor: "#1565C0",
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  right: {
    alignItems: "flex-end",
  },

  title: {
    fontSize: 17,
    fontWeight: "700",
    color: "#1F2937",
  },

  subtitle: {
    marginTop: 5,
    color: "#6B7280",
    fontSize: 13,
  },

  amount: {
    fontSize: 20,
    fontWeight: "700",
    color: "#1565C0",
    marginBottom: 6,
  },

  button: {
    marginTop: 18,
    backgroundColor: "#1565C0",
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: "center",
  },

  buttonText: {
    color: "#FFFFFF",
    fontWeight: "700",
    fontSize: 16,
  },
});