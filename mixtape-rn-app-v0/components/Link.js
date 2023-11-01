import React, { useState } from "react";
import { TouchableOpacity, Text, StyleSheet, Pressable } from "react-native";


const Link = ({ linkText, onPress }) => {

    const handlePress = () => {
        onPress();
      };

  return (
    <Pressable style = {styles.link} onPress = {handlePress}>
      <Text style={[styles.textOptions]}>
        {linkText}
      </Text>
    </Pressable>
  );
};

// The styles are customizable
const styles = StyleSheet.create({
  link:{
    paddingHorizontal: "20%",
  },
  textOptions: {
    color: "white",
    marginTop: 40,
    textDecorationLine: "underline",
  },
});

export default Link;
