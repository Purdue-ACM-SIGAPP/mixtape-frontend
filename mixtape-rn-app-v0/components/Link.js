import React, { useState } from "react";
import { TouchableOpacity, Text, StyleSheet, Pressable } from "react-native";

const Link = ({ linkText, onPress }) => {
  const handlePress = () => {
    onPress();
  };

  return (
    <Pressable className="px-[20%]" onPress={handlePress}>
      <Text className="text-white mt-[40px] underline">{linkText}</Text>
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

export default Link;
