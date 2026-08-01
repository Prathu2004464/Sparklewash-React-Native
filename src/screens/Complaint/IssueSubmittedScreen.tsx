import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import MaterialIcons from "@react-native-vector-icons/material-design-icons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AppStackParamList } from "../../navigation/AppStack";

type NavigationProp =
  NativeStackNavigationProp<AppStackParamList>;

export default function IssueSubmittedScreen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.iconContainer}>
          <MaterialIcons
            name="check-circle"
            size={90}
            color="#22C55E"
          />
        </View>

        <Text style={styles.title}>
          Issue Submitted Successfully
        </Text>

        <Text style={styles.subtitle}>
          Thank you for reporting the issue.
          {"\n"}
          Our support team will review it shortly.
        </Text>

        <View style={styles.issueCard}>
          <Text style={styles.issueLabel}>
            Issue ID
          </Text>

          <Text style={styles.issueId}>
            #SPK-2026-001
          </Text>

          <Text style={styles.status}>
            Status : Pending
          </Text>
        </View>

        <TouchableOpacity
          style={styles.primaryButton}
          onPress={() =>
            navigation.replace("ReportIssueScreen")
          }
        >
          <Text style={styles.primaryText}>
            Report Another Issue
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.secondaryButton}
          onPress={() =>
            navigation.popToTop()
            }
          
        >
          <Text style={styles.secondaryText}>
            Back to Home
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFC",
  },

  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },

  iconContainer: {
    width: 130,
    height: 130,
    borderRadius: 65,
    backgroundColor: "#DCFCE7",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
  },

  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#111827",
    textAlign: "center",
  },

  subtitle: {
    marginTop: 12,
    textAlign: "center",
    color: "#6B7280",
    lineHeight: 24,
    fontSize: 15,
  },

  issueCard: {
    width: "100%",
    marginTop: 30,
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 22,
    elevation: 3,
    alignItems: "center",
  },

  issueLabel: {
    color: "#6B7280",
    fontSize: 14,
  },

  issueId: {
    marginTop: 8,
    fontSize: 22,
    fontWeight: "700",
    color: "#2563EB",
  },

  status: {
    marginTop: 10,
    color: "#16A34A",
    fontWeight: "600",
  },

  primaryButton: {
    width: "100%",
    height: 56,
    backgroundColor: "#2563EB",
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 36,
  },

  primaryText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },

  secondaryButton: {
    width: "100%",
    height: 56,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#2563EB",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 16,
  },

  secondaryText: {
    color: "#2563EB",
    fontSize: 16,
    fontWeight: "700",
  },
});