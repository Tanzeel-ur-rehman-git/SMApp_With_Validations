import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
//Screens
import SplashScreen from "../screen/SplashScreen";
import OnboardindScreen from "../screen/OnboardindScreen";
import HomeScreen from "../screen/HomeScreen";
import LoginScreen from "../screen/LoginScreen";

//Navigation
import LoginTopBarNavigation from "../navigation/LoginTopBarNavigation";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator initialRouteName="SplashScreen">
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="OnboardindScreen"
        component={OnboardindScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginTopBarNavigation}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default function HomeNavigation() {
  return <MyStack />;
}
