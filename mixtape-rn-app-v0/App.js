import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LogIn from './navigation/log-in-sequence/LogIn';
import Home from './navigation/main-app-sequence/home';



export default function App() {

  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="LogIn" component={LogIn} />
    </Stack.Navigator>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
