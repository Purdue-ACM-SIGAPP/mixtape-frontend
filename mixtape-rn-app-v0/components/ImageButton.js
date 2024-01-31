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
    <Pressable onPress={()=>{}}>
      <View className="justify-center items-center mb-2 mr-10 ml-10 w-full h-full">
        <Pressable onPress={handlePress}>
          <Image
            className="xs:w-[120px] xs:h-[120px] sm:w-[180px] sm:h-[180px]"
            source={imageName}
          />
          <Text className="text-white mt-2 text-[20px] text-center">
            {imageText}
          </Text>
        </Pressable>
      </View>
    </Pressable>
  );
};
