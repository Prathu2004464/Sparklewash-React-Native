import React from "react";
import {
  Alert,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import MaterialIcons from "@react-native-vector-icons/material-design-icons";
import {
  useNavigation,
  NavigationProp,
} from "@react-navigation/native";

import CreditCardPreview from "../../components/payment/CreditCardPreview";
import { AppStackParamList } from "../../navigation/AppStack";

export default function PaymentDetailsScreen() {
  const navigation =
    useNavigation<NavigationProp<AppStackParamList>>();

  const handleDelete = () => {
    Alert.alert(
      "Delete Card",
      "Are you sure you want to delete this payment method?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Delete",
          style: "destructive",
          onPress: () => navigation.goBack(),
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
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialIcons
              name="arrow-left"
              size={24}
              color="#111827"
            />
          </TouchableOpacity>

          <Text style={styles.title}>Payment Details</Text>

          <View style={{ width: 24 }} />
        </View>

        {/* Card Preview */}

        <CreditCardPreview
          cardType="Visa"
          cardNumber="4587"
          cardHolder="Prathamesh Yeotikar"
          expiry="10/29"
        />

        {/* Default Badge */}

        <View style={styles.badge}>
          <MaterialIcons
            name="check-circle"
            size={20}
            color="#16A34A"
          />

          <Text style={styles.badgeText}>
            Default Payment Method
          </Text>
        </View>

        {/* Details */}

        <View style={styles.detailsCard}>
          <View style={styles.row}>
            <Text style={styles.label}>Card Type</Text>
            <Text style={styles.value}>Visa</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Card Holder</Text>
            <Text style={styles.value}>
              Prathamesh Yeotikar
            </Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Card Number</Text>
            <Text style={styles.value}>
              •••• •••• •••• 4587
            </Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Expiry Date</Text>
            <Text style={styles.value}>10/29</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Added On</Text>
            <Text style={styles.value}>15 Jul 2026</Text>
          </View>
        </View>

        {/* Actions */}

        <TouchableOpacity style={styles.actionButton}>
          <MaterialIcons
            name="star-outline"
            size={22}
            color="#2563EB"
          />

          <Text style={styles.actionText}>
            Set as Default
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => navigation.navigate("EditCardScreen")}
        >
          <MaterialIcons
            name="pencil-outline"
            size={22}
            color="#2563EB"
          />

          <Text style={styles.actionText}>
            Edit Card
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
    paddingBottom: 40,
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

  badge: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "#ECFDF5",
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    marginTop: 20,
    marginBottom: 25,
  },

  badgeText: {
    marginLeft: 8,
    color: "#16A34A",
    fontWeight: "600",
    fontSize: 14,
  },

  detailsCard: {
    backgroundColor: "#FFF",
    borderRadius: 16,
    padding: 18,
    marginBottom: 30,
    elevation: 2,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#F3F4F6",
  },

  label: {
    fontSize: 15,
    color: "#6B7280",
    fontWeight: "500",
  },

  value: {
    fontSize: 15,
    color: "#111827",
    fontWeight: "600",
  },

  actionButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    padding: 18,
    borderRadius: 16,
    marginBottom: 15,
    elevation: 2,
  },

  actionText: {
    marginLeft: 14,
    fontSize: 16,
    fontWeight: "600",
    color: "#111827",
  },

  deleteButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FEE2E2",
    padding: 18,
    borderRadius: 16,
  },

  deleteText: {
    marginLeft: 14,
    fontSize: 16,
    fontWeight: "600",
    color: "#DC2626",
  },
});