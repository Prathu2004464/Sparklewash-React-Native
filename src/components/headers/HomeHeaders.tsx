import React from "react";
import { StyleSheet, Text, View } from "react-native";

type Props = {
  name?: string;
};

export default function HomeHeader({ name = 'Customer' }: Props) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.greeting}>Good Morning</Text>
        <Text style={styles.name}>{name}</Text>
      </View>

      <View style={styles.avatar}>
        <Text style={styles.avatarText}>P</Text>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 15,
    marginBottom: 25,
    backgroundColor: "#F5FAF4",
    flex: 1,
    paddingHorizontal: 20,
    paddingBottom: 15,
  },

  greeting: {
    color: "#4C8A2B",
    fontSize: 16,
    fontWeight: "500",
  },

  name: {
    marginTop: 4,
    color: "#1C2B39",
    fontSize: 32,
    fontWeight: "700",
  },

  avatar: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: "#1565C0",
    justifyContent: "center",
    alignItems: "center",
  },

  avatarText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 20,
  },
});