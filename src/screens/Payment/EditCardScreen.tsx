import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
} from "react-native";
import MaterialIcons from "@react-native-vector-icons/material-design-icons";
import CreditCardPreview from "../../components/payment/CreditCardPreview";
import { useNavigation } from "@react-navigation/native";


export default function EditCardScreen() {
    const navigation = useNavigation();
  const [cardNumber, setCardNumber] = useState("4587");
  const [cardHolder, setCardHolder] = useState("Prathamesh Yeotikar");
  const [expiry, setExpiry] = useState("10/29");
  const [cvv, setCvv] = useState("***");
  const [isDefault, setIsDefault] = useState(true);

  const handleDelete = () => {
    Alert.alert(
      "Delete Card",
      "Are you sure you want to remove this payment method?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Delete",
          style: "destructive",
          onPress: () => {
            console.log("Card Deleted");
          },
        },
      ]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}

        <View style={styles.header}>
          <TouchableOpacity>
            <MaterialIcons
              name="arrow-left"
              size={24}
              color="#111827"
              onPress={() => navigation.goBack()}
            />
          </TouchableOpacity>

          <Text style={styles.title}>
            Edit Card
          </Text>

          <View style={{ width: 24 }} />
        </View>

        <CreditCardPreview
          cardType="Visa"
          cardNumber={cardNumber}
          cardHolder={cardHolder}
          expiry={expiry}
        />

        <Text style={styles.fieldLabel}>
          Card Number
        </Text>

        <TextInput
          style={styles.input}
          value={cardNumber}
          onChangeText={setCardNumber}
        />

        <Text style={styles.fieldLabel}>
          Card Holder
        </Text>

        <TextInput
          style={styles.input}
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
              value={cvv}
              onChangeText={setCvv}
              secureTextEntry
            />
          </View>
        </View>

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
            Default Payment Method
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.saveText}>
            Save Changes
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.deleteButton}
          onPress={handleDelete}
        >
          <MaterialIcons
            name="delete-outline"
            size={22}
            color="#DC2626"
          />

          <Text style={styles.deleteText}>
            Delete Card
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
    marginBottom: 24,
  },

  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#111827",
  },

  fieldLabel: {
    marginTop: 18,
    marginBottom: 8,
    fontSize: 15,
    fontWeight: "600",
    color: "#111827",
  },

  input: {
    height: 54,
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    paddingHorizontal: 16,
    fontSize: 15,
    color: "#111827",
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },

  defaultRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 24,
  },

  defaultText: {
    marginLeft: 10,
    fontSize: 15,
    color: "#374151",
    fontWeight: "500",
  },

  saveButton: {
    marginTop: 30,
    height: 56,
    backgroundColor: "#2563EB",
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },

  saveText: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "700",
  },

  deleteButton: {
    marginTop: 16,
    height: 56,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#FCA5A5",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FEF2F2",
    marginBottom: 30,
  },

  deleteText: {
    marginLeft: 8,
    color: "#DC2626",
    fontSize: 16,
    fontWeight: "700",
  },
});
