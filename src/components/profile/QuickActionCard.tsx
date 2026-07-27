import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import MaterialIcons from "@react-native-vector-icons/material-design-icons";

interface QuickActionCardProps {
  onEditProfile?: () => void;
  onChangePassword?: () => void;
}

interface ActionItemProps {
  icon: string;
  title: string;
  onPress?: () => void;
}

function ActionItem({
  icon,
  title,
  onPress,
}: ActionItemProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.row}
      onPress={onPress}
    >
      <View style={styles.left}>
        <View style={styles.iconContainer}>
          <MaterialIcons
            name={icon as any}
            size={22}
            color="#1565C0"
          />
        </View>

        <Text style={styles.actionTitle}>
          {title}
        </Text>
      </View>

      <MaterialIcons
        name="chevron-right"
        size={22}
        color="#9CA3AF"
      />
    </TouchableOpacity>
  );
}

export default function QuickActionCard({
  onEditProfile,
  onChangePassword,
}: QuickActionCardProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Account</Text>

      <ActionItem
        icon="account-edit"
        title="Edit Profile"
        onPress={onEditProfile}
      />

      <View style={styles.divider} />

      <ActionItem
        icon="lock-reset"
        title="Change Password"
        onPress={onChangePassword}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 20,
    marginBottom: 25,

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

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
  },

  left: {
    flexDirection: "row",
    alignItems: "center",
  },

  iconContainer: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#E8F2FD",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 14,
  },

  actionTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111827",
  },

  divider: {
    height: 1,
    backgroundColor: "#E5E7EB",
  },
});