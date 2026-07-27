import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import MaterialIcons from "@react-native-vector-icons/material-design-icons";

interface SettingsItemProps {
  icon: string;
  title: string;
  subtitle?: string;
  danger?: boolean;
  onPress?: () => void;
}
export default function SettingsItem({
  icon,
  title,
  subtitle, 
  danger = false,
  onPress,
}: SettingsItemProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.container}
      onPress={onPress}
    >
      <View style={styles.left}>
        <View
          style={[
            styles.iconContainer,
            danger && styles.dangerIconContainer,
          ]}
        >
          <MaterialIcons
            name={icon as any}
            size={24}
            color={danger ? "#DC2626" : "#1565C0"}
          />
        </View>

        <View style={styles.textContainer}>
          <Text
            style={[
              styles.title,
              danger && styles.dangerTitle,
            ]}
          >
            {title}
          </Text>

          {subtitle ? (
            <Text style={styles.subtitle}>
              {subtitle}
            </Text>
          ) : null}
        </View>
      </View>

      <MaterialIcons
        name="chevron-right"
        size={24}
        color="#9CA3AF"
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 16,
    marginBottom: 14,

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },

  left: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },

  iconContainer: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: "#E8F2FD",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 14,
  },

  dangerIconContainer: {
    backgroundColor: "#FEE2E2",
  },

  textContainer: {
    flex: 1,
  },

  title: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1F2937",
  },

  dangerTitle: {
    color: "#DC2626",
  },

  subtitle: {
    marginTop: 3,
    fontSize: 13,
    color: "#9CA3AF",
  },
});   