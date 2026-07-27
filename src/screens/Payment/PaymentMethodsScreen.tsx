import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import MaterialIcons from "@react-native-vector-icons/material-design-icons";

import PaymentCard from "../../components/payment/PaymentCard";
import UPICard from "../../components/payment/UPICard";
import AddPaymentBottomSheet from "../../components/payment/AddPaymentBottomSheet";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AppStackParamList } from "../../navigation/AppStack";

export default function PaymentMethodsScreen() {

  const navigation =
  useNavigation<NativeStackNavigationProp<AppStackParamList>>();

    const [bottomSheetVisible, setBottomSheetVisible] =
  useState(false);
  return (

    
    <SafeAreaView style={styles.container}>

      <AddPaymentBottomSheet
  visible={bottomSheetVisible}
  onClose={() => setBottomSheetVisible(false)}
  onSelectCard={() => {
    setBottomSheetVisible(false);

    // navigation.navigate("AddCard");
  }}
  onSelectUPI={() => {
    setBottomSheetVisible(false);

    // navigation.navigate("AddUPI");
  }}
/> 
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <MaterialIcons
            name="arrow-left"
            size={24}
            color="#111827"
          />
        </TouchableOpacity>

        <Text style={styles.title}>Payment Methods</Text>

        <View style={{ width: 24 }} />
      </View>

      <Text style={styles.subtitle}>
        Manage your saved payment methods
      </Text>

      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <PaymentCard
          cardType="Visa"
          cardNumber="4587"
          cardHolder="Prathamesh Yeotikar"
          expiry="10/29"
          isDefault
          onPress={() => navigation.navigate("PaymentDetailsScreen")}
        />

        <PaymentCard
          cardType="Mastercard"
          cardNumber="9821"
          cardHolder="Prathamesh Yeotikar"
          expiry="07/28"
          onPress={() => navigation.navigate("PaymentDetailsScreen")}
        />

        <UPICard
          upiId="prathamesh@okaxis"
          isDefault={false}
          onPress={() => {}}
        />
    </ScrollView>
      {/* Bottom Button */}
      <View style={styles.footer}>
        <TouchableOpacity
            style={styles.addButton}
            onPress={() => setBottomSheetVisible(true)}
            >
          <MaterialIcons
            name="plus"
            size={22}
            color="#FFF"
          />

          <Text style={styles.addText}>
            Add Payment Method
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

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 18,
  },

  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#111827",
  },

  subtitle: {
    marginTop: 10,
    marginBottom: 20,
    paddingHorizontal: 20,
    color: "#6B7280",
    fontSize: 15,
  },

  content: {
    paddingHorizontal: 20,
    paddingBottom: 120,
  },

  upiCard: {
    backgroundColor: "#FFF",
    borderRadius: 18,
    padding: 18,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    elevation: 3,
  },

  upiLeft: {
    flexDirection: "row",
    alignItems: "center",
  },

  upiIcon: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: "#EFF6FF",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 14,
  },

  upiTitle: {
    fontSize: 17,
    fontWeight: "600",
    color: "#111827",
  },

  upiId: {
    marginTop: 4,
    color: "#6B7280",
    fontSize: 14,
  },

  footer: {
    position: "absolute",
    left: 20,
    right: 20,
    bottom: 20,
  },

  addButton: {
    height: 56,
    borderRadius: 16,
    backgroundColor: "#2563EB",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  addText: {
    color: "#FFF",
    fontWeight: "700",
    fontSize: 16,
    marginLeft: 8,
  },
});