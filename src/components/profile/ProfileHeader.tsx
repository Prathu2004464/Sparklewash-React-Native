import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import MaterialIcons from "@react-native-vector-icons/material-design-icons";

interface ProfileHeaderProps {
  name: string;
  email: string;
  onEdit?: () => void;
}

export default function ProfileHeader({
  name,
  email,
  onEdit,
}: ProfileHeaderProps) {
  const initial = name.charAt(0).toUpperCase();

  return (
    <View style={styles.container}>
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>{initial}</Text>
      </View>

      <Text style={styles.name}>{name}</Text>
      <Text style={styles.email}>{email}</Text>

      <TouchableOpacity
        style={styles.editButton}
        activeOpacity={0.8}
        onPress={onEdit}
      >
        <MaterialIcons
          name="pencil"
          size={18}
          color="#1565C0"
        />
        <Text style={styles.editText}>Edit Profile</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    alignItems: "center",
    paddingVertical: 28,
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

  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: "#1565C0",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },

  avatarText: {
    color: "#FFFFFF",
    fontSize: 34,
    fontWeight: "700",
  },

  name: {
    fontSize: 22,
    fontWeight: "700",
    color: "#1F2937",
  },

  email: {
    marginTop: 4,
    fontSize: 14,
    color: "#6B7280",
  },

  editButton: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 18,
    backgroundColor: "#E8F2FD",
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 25,
  },

  editText: {
    marginLeft: 8,
    color: "#1565C0",
    fontWeight: "600",
    fontSize: 14,
  },
});