import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { AppStackParamList } from "../../navigation/AppStack";

export default function VehicleDetailsScreen() {
  const navigation =
    useNavigation<NativeStackNavigationProp<AppStackParamList>>();

  const route = useRoute<RouteProp<any>>();

  const vehicle = route.params?.vehicle;

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.card}>

        <MaterialIcons
          name="directions-car"
          size={60}
          color="#1565C0"
        />

        <Text style={styles.name}>
          {vehicle?.vehicle_model}
        </Text>

        <Text style={styles.number}>
          {vehicle?.vehicle_number}
        </Text>

        <View style={styles.row}>
          <Text style={styles.label}>Vehicle Type</Text>

          <Text style={styles.value}>
            {vehicle?.vehicle_type}
          </Text>
        </View>

      </View>

      <TouchableOpacity
  style={styles.bookButton}
  disabled
>
  <Text style={styles.bookText}>Booking Starts from + Add Vehicle</Text>
</TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#F2F8F3",
    padding: 20,
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 25,
    alignItems: "center",
  },

  name: {
    fontSize: 24,
    fontWeight: "700",
    marginTop: 15,
    color: "#1F2937",
  },

  number: {
    marginTop: 8,
    fontSize: 18,
    color: "#6B7280",
  },

  row: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
  },

  label: {
    fontWeight: "600",
    color: "#6B7280",
  },

  value: {
    fontWeight: "700",
    color: "#111827",
  },

  bookButton: {
    marginTop: 30,
    backgroundColor: "#1565C0",
    borderRadius: 18,
    paddingVertical: 18,
    alignItems: "center",
  },

  bookText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
  },

});