import * as React from "react";
import { SafeAreaView, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

//Screens
import SignUpScreen from "../screen/SignUpScreen";
import LoginScreen from "../screen/LoginScreen";

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        labelStyle: {
          fontSize: 14,
          color: "white",
          fontWeight: "600",
          textTransform: "none",
        },
        tabStyle: {
          width: 100,
          height: 60,
          justifyContent: "flex-end",
          paddingLeft: 25,
          alignItems: "flex-start",
          right: 2,
        },
        // showLabel: false,

        indicatorStyle: {
          backgroundColor: "white",
          width: 15,
          //   alignSelf: "center",
          //   paddingLeft: 25,
          //   justifyContent: "center",
          left: 25,
        },
        style: { backgroundColor: "#19224C", marginTop: 35 },
      }}
    >
      <Tab.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ title: "Login" }}
      />
      <Tab.Screen
        name="SignUpScreen"
        component={SignUpScreen}
        options={{ tabBarLabel: "Sign Up" }}
      />
    </Tab.Navigator>
  );
}

export default function LoginTopBarNavigation() {
  return <MyTabs />;
}
