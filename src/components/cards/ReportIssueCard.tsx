import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AppStackParamList } from "../../navigation/AppStack";

type NavigationProp =
  NativeStackNavigationProp<AppStackParamList>;

export default function ReportIssueCard() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.8}
      onPress={() => navigation.navigate("ReportIssueScreen")}
    >
      <View style={styles.left}>
        <View style={styles.iconBox}>
          <Text style={styles.icon}>💬</Text>
        </View>

        <View>
          <Text style={styles.title}>Report an Issue</Text>
          <Text style={styles.subtitle}>
            Complaints and support
          </Text>
        </View>
      </View>

      <Text style={styles.arrow}>›</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    marginTop: 8,
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 18,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    elevation: 2,
  },

  left: {
    flexDirection: "row",
    alignItems: "center",
  },

  iconBox: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: "#F1F5F9",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 14,
  },

  icon: {
    fontSize: 18,
  },

  title: {
    fontSize: 16,
    fontWeight: "700",
    color: "#1F2937",
  },

  subtitle: {
    marginTop: 2,
    fontSize: 13,
    color: "#9CA3AF",
  },

  arrow: {
    fontSize: 26,
    color: "#9CA3AF",
  },
});