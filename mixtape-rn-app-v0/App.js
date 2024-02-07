import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { NativeWindStyleSheet } from "nativewind";
import Verification from "./navigation/log-in-stack/Verification";
import AfterCreateAcc from "./navigation/log-in-stack/AfterCreateAcc";
import LogIn from "./navigation/log-in-stack/LogIn";
import ConnectMusicAccount from "./navigation/log-in-stack/ConnectMusicAccount";
import SignUp from "./navigation/log-in-stack/SignUp";
import Home from "./navigation/main-stack/Home";
import ForgotPassword from "./navigation/log-in-stack/ForgotPassword";
import LinkAccount from "./navigation/log-in-stack/LinkAccount";

NativeWindStyleSheet.setOutput({
  default: "native",
});

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="ConnectMusicAccount"
          component={ConnectMusicAccount}
        />
        <Stack.Screen name="LinkAccount" component={LinkAccount} />
        <Stack.Screen name="LogIn" component={LogIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Verification" component={Verification} />
        <Stack.Screen name="AfterCreateAcc" component={AfterCreateAcc} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="LogIn" component={LogIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        {/* <Stack.Screen name="Verification" component={Verification} /> */}
        <Stack.Screen name="AfterCreateAcc" component={AfterCreateAcc} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
