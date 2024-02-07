import React, { useState } from "react";
import {BackSprite} from "./../assets"
import { TouchableOpacity, Text, StyleSheet, Pressable, View, Image} from "react-native";

const BackButton = ({ onPress }) => {
  const handlePress = () => {
    console.log("back button pressed")
    onPress();
  };

  return (
    <Pressable className="absolute top-0 left-0 p-4 z-10" onPress={handlePress}>
  <View className="items-center">
    <Image
      className="w-8 h-8 mb-2"
      source={BackSprite}
    />
  </View>
</Pressable>
  );
};

export default BackButton;
