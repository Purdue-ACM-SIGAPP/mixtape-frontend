import React, { useState } from "react";
import {BackSprite} from "./../assets"
import { TouchableOpacity, Text, StyleSheet, Pressable, View, Image} from "react-native";

const BackButton = ({ onPress }) => {
  const handlePress = () => {
    console.log("back button pressed")
    onPress();
  };

  return (
    <Pressable className="px-[20%]" onPress={handlePress}>
        <View className="items-center">
        <Image
          className="w-[60px] h-[60px] mb-2 mr-10 ml-10"
          source={BackSprite}
        />
      </View>
    </Pressable>
  );
};

// Stylesheet if not using TailwindCSS
// const styles = StyleSheet.create({
//   link: {
//     paddingHorizontal: "20%",
//   },
//   textOptions: {
//     color: "white",
//     marginTop: 40,
//     textDecorationLine: "underline",
//   },
// });

export default BackButton;
