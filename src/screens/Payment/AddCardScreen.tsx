import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import MaterialIcons from "@react-native-vector-icons/material-design-icons";
import CreditCardPreview from "../../components/payment/CreditCardPreview";
import { useNavigation } from "@react-navigation/native";

export default function AddCardScreen() {
  const navigation = useNavigation();
  const [cardNumber, setCardNumber] = useState("");
  const [cardHolder, setCardHolder] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [isDefault, setIsDefault] = useState(true);

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

          <Text style={styles.title}>
            Add Card
          </Text>

          <View style={{ width: 24 }} />
        </View>

        {/* Card Preview */}

        <CreditCardPreview
            cardNumber={cardNumber}
            cardHolder={cardHolder}
            expiry={expiry}
            cardType="Visa"
        />
         {/* Form */}

        <Text style={styles.fieldLabel}>
          Card Number
        </Text>

        <TextInput
          style={styles.input}
          placeholder="1234 5678 9012 3456"
          keyboardType="number-pad"
          value={cardNumber}
          onChangeText={setCardNumber}
        />

        <Text style={styles.fieldLabel}>
          Card Holder
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Enter card holder name"
          value={cardHolder}
          onChangeText={setCardHolder}
        />

        <View style={styles.row}>
          <View style={{ flex: 1 }}>
            <Text style={styles.fieldLabel}>
              Expiry
            </Text>

            <TextInput
              style={styles.input}
              placeholder="MM/YY"
              value={expiry}
              onChangeText={setExpiry}
            />
          </View>

          <View style={{ width: 16 }} />

          <View style={{ flex: 1 }}>
            <Text style={styles.fieldLabel}>
              CVV
            </Text>

            <TextInput
              style={styles.input}
              placeholder="123"
              secureTextEntry
              keyboardType="number-pad"
              value={cvv}
              onChangeText={setCvv}
            />
          </View>
        </View>

        {/* Default */}

        <TouchableOpacity
          style={styles.defaultRow}
          onPress={() =>
            setIsDefault(!isDefault)
          }
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
            Set as default payment method
          </Text>
        </TouchableOpacity>

        {/* Save */}

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>
            Save Card
          </Text>
        </TouchableOpacity>
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
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 25,
  },

  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#111827",
  },

  cardPreview: {
    height: 210,
    borderRadius: 24,
    padding: 24,
    marginBottom: 30,
    backgroundColor: "#2563EB",
    justifyContent: "space-between",
  },

  cardTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  brand: {
    color: "#FFF",
    fontSize: 24,
    fontWeight: "700",
    letterSpacing: 1,
  },

  number: {
    color: "#FFF",
    fontSize: 24,
    letterSpacing: 3,
    fontWeight: "600",
  },

  cardBottom: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  label: {
    color: "#DBEAFE",
    fontSize: 11,
    marginBottom: 4,
  },

  value: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "600",
  },

  fieldLabel: {
    marginBottom: 8,
    fontWeight: "600",
    color: "#111827",
  },

  input: {
    backgroundColor: "#FFF",
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    paddingHorizontal: 16,
    height: 54,
    marginBottom: 20,
  },

  row: {
    flexDirection: "row",
  },

  defaultRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 12,
  },

  defaultText: {
    marginLeft: 10,
    fontSize: 15,
    color: "#374151",
  },

  button: {
    marginTop: 24,
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