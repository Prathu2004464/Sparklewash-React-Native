import React, { useState } from "react";
import {
    Alert,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import MaterialIcons from "@react-native-vector-icons/material-design-icons";
import {
  useNavigation,
} from "@react-navigation/native";
import {
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";

import { AppStackParamList } from "../../navigation/AppStack";

type NavigationProp =
  NativeStackNavigationProp<AppStackParamList>;

export default function ReportIssueScreen() {
  const navigation = useNavigation<NavigationProp>();

  const vehicles = [
    "Honda City",
    "Tata Nexon",
    "Hyundai Creta",
  ];

  const [vehicle, setVehicle] = useState(vehicles[0]);

  const categories = [
    "Exterior Wash",
    "Interior Cleaning",
    "Payment Issue",
    "Subscription",
    "Staff Behaviour",
    "Other",
  ];

  const [category, setCategory] = useState(categories[0]);

  const [priority, setPriority] = useState("Medium");

  const [title, setTitle] = useState("");

  const [description, setDescription] = useState("");

 const handleSubmit = () => {
  if (!title.trim()) {
    Alert.alert("Validation", "Please enter issue title");
    return;
  }

  if (!description.trim()) {
    Alert.alert("Validation", "Please describe your issue");
    return;
  }

  const issueData = {
    vehicle,
    category,
    priority,
    title,
    description,
    createdAt: new Date().toISOString(),
    status: "Pending",
  };

  console.log("Issue Submitted:", issueData);

  navigation.replace("IssueSubmittedScreen");
};

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>Report an Issue</Text>
        </View>

        <Text style={styles.subtitle}>
          Please provide details about the issue you are experiencing.
        </Text>

        <Text style={styles.label}>Vehicle</Text>
        <View style={styles.selector}>
          <Text style={styles.selectorText}>{vehicle}</Text>
          <MaterialIcons name="menu-down" size={24} color="#6B7280" />
        </View>

        <Text style={styles.label}>Category</Text>
        <View style={styles.selector}>
          <Text style={styles.selectorText}>{category}</Text>
          <MaterialIcons name="menu-down" size={24} color="#6B7280" />
        </View>

        <Text style={styles.label}>Priority</Text>
        <View style={styles.priorityRow}>
          {["Low", "Medium", "High"].map((p) => (
            <TouchableOpacity
              key={p}
              style={[
                styles.priorityButton,
                priority === p && styles.prioritySelected,
              ]}
              onPress={() => setPriority(p)}
            >
              <Text
                style={[
                  styles.priorityText,
                  priority === p && styles.priorityTextSelected,
                ]}
              >
                {p}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.label}>Title</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter issue title"
          value={title}
          onChangeText={setTitle}
        />

        <Text style={styles.label}>Description</Text>
        <TextInput
          style={styles.description}
          placeholder="Describe your issue"
          value={description}
          onChangeText={setDescription}
          multiline
        />

        <TouchableOpacity
          style={styles.submitButton}
          onPress={handleSubmit}
        >
          <Text style={styles.submitText}>Submit Issue</Text>
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
    padding: 20,
    paddingBottom: 40,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },

  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#111827",
  },

  subtitle: {
    fontSize: 15,
    color: "#6B7280",
    marginBottom: 24,
    lineHeight: 22,
  },

  label: {
    fontSize: 15,
    fontWeight: "600",
    color: "#111827",
    marginBottom: 8,
    marginTop: 12,
  },

  selector: {
    height: 56,
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    paddingHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  selectorText: {
    fontSize: 16,
    color: "#111827",
  },

  priorityRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
    marginBottom: 10,
  },

  priorityButton: {
    flex: 1,
    marginHorizontal: 4,
    height: 48,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#D1D5DB",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },

  prioritySelected: {
    backgroundColor: "#2563EB",
    borderColor: "#2563EB",
  },

  priorityText: {
    color: "#374151",
    fontWeight: "600",
    fontSize: 15,
  },

  priorityTextSelected: {
    color: "#FFFFFF",
  },

  input: {
    height: 56,
    borderRadius: 16,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E5E7EB",
    paddingHorizontal: 16,
    fontSize: 15,
    color: "#111827",
  },

  description: {
    minHeight: 130,
    borderRadius: 16,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E5E7EB",
    paddingHorizontal: 16,
    paddingVertical: 14,
    textAlignVertical: "top",
    fontSize: 15,
    color: "#111827",
  },

  uploadButton: {
    height: 56,
    marginTop: 24,
    borderRadius: 16,
    borderWidth: 1.5,
    borderStyle: "dashed",
    borderColor: "#2563EB",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#EFF6FF",
  },

  uploadText: {
    marginLeft: 10,
    color: "#2563EB",
    fontWeight: "600",
    fontSize: 15,
  },

  submitButton: {
    height: 58,
    marginTop: 30,
    borderRadius: 16,
    backgroundColor: "#2563EB",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
  },

  submitText: {
    color: "#FFFFFF",
    fontWeight: "700",
    fontSize: 17,
  },
});