import React, { useState } from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  Pressable,
  Image,
  View,
} from "react-native";

export const ImageButton = ({ imageName, onPress, imageText }) => {
  const handlePress = () => {
    onPress();
  };

  return (
    <Pressable onPress={handlePress}>
      <View className="items-center">
        <Image
          className="w-[180px] h-[180px] mb-2 mr-10 ml-10"
          source={imageName}
        />
        <Text className="text-white text-[20px] text-center">{imageText}</Text>
      </View>
    </Pressable>
  );
};
