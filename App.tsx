import { useEffect } from "react";
import { getApp } from "@react-native-firebase/app";
import { getAuth } from "@react-native-firebase/auth";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import RootNavigator from "./src/navigation/RootNavigator";

export default function App() {

  useEffect(() => {
  try {
    const app = getApp();
    const auth = getAuth(app);

    console.log("✅ Firebase App:", app.name);
    console.log("✅ Firebase Auth Ready:", auth.app.name);
  } catch (e) {
    console.log("❌ Firebase Error:", e);
  }
}, []);

  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}