import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LogIn from './navigation/log-in-stack/LogIn';
import Home from './navigation/main-stack/Home';
import AfterCreateAcc from './navigation/log-in-stack/AfterCreateAcc';

import LogIn from "./navigation/log-in-stack/LogIn";
import Home from "./navigation/main-stack/Home";

NativeWindStyleSheet.setOutput({
  default: "native",
});

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
    <Stack.Navigator>

    <Stack.Screen name="AfterCreateAcc" component={AfterCreateAcc} />
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
