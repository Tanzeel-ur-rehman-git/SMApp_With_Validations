import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Toast from "react-native-toast-message";
import { NavigationContainer } from "@react-navigation/native";

import HomeStackNavigation from "./navigation/HomeStackNavigation";
export default function App() {
  return (
    <NavigationContainer>
      <HomeStackNavigation />
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </NavigationContainer>
  );
}
