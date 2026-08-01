import React from "react";
import {
  StyleSheet,
  Text,
  View,
} from "react-native";
import MaterialIcons from "@react-native-vector-icons/material-design-icons";

export default function EmptyNotification() {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <MaterialIcons
          name="bell-off-outline"
          size={70}
          color="#2563EB"
        />
      </View>

      <Text style={styles.title}>
        No Notifications Yet
      </Text>

      <Text style={styles.subtitle}>
        We'll notify you whenever there is a new booking,
        payment update, subscription reminder, or special
        offer.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 30,
  },

  iconContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: "#E8F1FE",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 25,
  },

  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#111827",
    marginBottom: 12,
  },

  subtitle: {
    fontSize: 15,
    color: "#6B7280",
    textAlign: "center",
    lineHeight: 24,
  },
});