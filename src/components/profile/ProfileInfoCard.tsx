import React from "react";
import {
  StyleSheet,
  Text,
  View,
} from "react-native";
import MaterialIcons from "@react-native-vector-icons/material-design-icons";

interface ProfileInfoCardProps {
  fullName: string;
  email: string;
  phone: string;
  memberSince: string;
}

interface InfoRowProps {
  icon: string;
  label: string;
  value: string;
}

function InfoRow({
  icon,
  label,
  value,
}: InfoRowProps) {
  return (
    <View style={styles.row}>
      <View style={styles.iconContainer}>
        <MaterialIcons
          name={icon as any}
          size={22}
          color="#1565C0"
        />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.value}>{value}</Text>
      </View>
    </View>
  );
}

export default function ProfileInfoCard({
  fullName,
  email,
  phone,
  memberSince,
}: ProfileInfoCardProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Personal Information</Text>

      <InfoRow
        icon="account-outline"
        label="Full Name"
        value={fullName}
      />

      <View style={styles.divider} />

      <InfoRow
        icon="email-outline"
        label="Email"
        value={email}
      />

      <View style={styles.divider} />

      <InfoRow
        icon="phone-outline"
        label="Phone"
        value={phone}
      />

      <View style={styles.divider} />

      <InfoRow
        icon="calendar-month-outline"
        label="Member Since"
        value={memberSince}
      />
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

  title: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1F2937",
    marginBottom: 18,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
  },

  iconContainer: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#E8F2FD",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 14,
  },

  textContainer: {
    flex: 1,
  },

  label: {
    fontSize: 13,
    color: "#6B7280",
    marginBottom: 2,
  },

  value: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111827",
  },

  divider: {
    height: 1,
    backgroundColor: "#E5E7EB",
    marginVertical: 14,
  },
});