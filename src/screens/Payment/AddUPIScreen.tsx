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
import { useNavigation } from "@react-navigation/native";

export default function AddUPIScreen() {
  const navigation = useNavigation();

  const [upiId, setUpiId] = useState("");
  const [isDefault, setIsDefault] = useState(false);
  const [verified, setVerified] = useState(false);

  const verifyUPI = () => {
    const regex = /^[a-zA-Z0-9.\-_]{2,}@[a-zA-Z]{2,}$/;

    if (!upiId.trim()) {
      Alert.alert("Error", "Please enter your UPI ID");
      return;
    }

    if (!regex.test(upiId)) {
      Alert.alert("Invalid UPI", "Please enter a valid UPI ID");
      return;
    }

    setVerified(true);
    Alert.alert("Success", "UPI Verified Successfully");
  };

  const saveUPI = () => {
    Alert.alert("Success", "UPI Saved Successfully");
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}

        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialIcons
              name="arrow-left"
              size={24}
              color="#111827"
            />
          </TouchableOpacity>

          <Text style={styles.title}>Add UPI</Text>

          <View style={{ width: 24 }} />
        </View>

        <Text style={styles.subtitle}>
          Add your preferred UPI ID
        </Text>

        {/* Icon */}

        <View style={styles.iconContainer}>
          <MaterialIcons
            name="wallet-outline"
            size={70}
            color="#2563EB"
          />
        </View>

        {/* Input */}

        <Text style={styles.label}>UPI ID</Text>

        <TextInput
          style={styles.input}
          placeholder="yourname@okaxis"
          placeholderTextColor="#9CA3AF"
          value={upiId}
          onChangeText={(text) => {
            setUpiId(text);
            setVerified(false);
          }}
          autoCapitalize="none"
        />

        <Text style={styles.helperTitle}>Supported Apps</Text>

        <Text style={styles.helper}>
          • Google Pay{"\n"}
          • PhonePe{"\n"}
          • Paytm{"\n"}
          • BHIM
        </Text>

        <TouchableOpacity
          style={styles.defaultRow}
          onPress={() => setIsDefault(!isDefault)}
        >
          <MaterialIcons
            name={
              isDefault
                ? "checkbox-marked"
                : "checkbox-blank-outline"
            }
            size={24}
            color="#2563EB"
          />

          <Text style={styles.defaultText}>
            Make this my default payment method
          </Text>
        </TouchableOpacity>

        {verified && (
          <View style={styles.successBox}>
            <MaterialIcons
              name="check-circle"
              size={22}
              color="#16A34A"
            />

            <Text style={styles.successText}>
              UPI Verified Successfully
            </Text>
          </View>
        )}

        {!verified ? (
          <TouchableOpacity
            style={styles.button}
            onPress={verifyUPI}
          >
            <Text style={styles.buttonText}>
              Verify UPI
            </Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.button}
            onPress={saveUPI}
          >
            <Text style={styles.buttonText}>
              Save UPI
            </Text>
          </TouchableOpacity>
        )}
      </ScrollView>
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
    alignItems: "center",
    justifyContent: "space-between",
  },

  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#111827",
  },

  subtitle: {
    marginTop: 12,
    marginBottom: 30,
    textAlign: "center",
    color: "#6B7280",
    fontSize: 15,
  },

  iconContainer: {
    alignItems: "center",
    marginBottom: 30,
  },

  label: {
    fontSize: 15,
    fontWeight: "600",
    color: "#111827",
    marginBottom: 8,
  },

  input: {
    height: 56,
    backgroundColor: "#FFF",
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    paddingHorizontal: 16,
    fontSize: 16,
    color: "#111827",
  },

  helperTitle: {
    marginTop: 24,
    fontSize: 15,
    fontWeight: "600",
    color: "#111827",
  },

  helper: {
    marginTop: 8,
    fontSize: 14,
    color: "#6B7280",
    lineHeight: 24,
  },

  defaultRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 28,
  },

  defaultText: {
    marginLeft: 10,
    fontSize: 15,
    color: "#374151",
    fontWeight: "500",
    flex: 1,
  },

  successBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ECFDF5",
    padding: 14,
    borderRadius: 12,
    marginTop: 24,
  },

  successText: {
    marginLeft: 10,
    color: "#16A34A",
    fontWeight: "600",
    fontSize: 15,
  },

  button: {
    marginTop: 30,
    height: 56,
    backgroundColor: "#2563EB",
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    color: "#FFF",
    fontSize: 17,
    fontWeight: "700",
  },
});