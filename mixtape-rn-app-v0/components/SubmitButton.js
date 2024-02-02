import React, { useState } from "react";
import { TouchableOpacity, Text, StyleSheet, Pressable } from "react-native";

// Reusable submit button component
// initialText: Text to display when the button is first rendered
// updatedText: Text to display when the button is pressed
// onPress: Function to call when the button is pressed
// Example of using SubmitButton by passing in props from the parent component:
// <SubmitButton initialText="Submit" updatedText="Submitting..." onPress={handleSubmit} />
const SubmitButton = ({ initialText, updatedText, onPress }) => {
  const [buttonText, setButtonText] = useState(initialText);

  const handlePress = () => {
    setButtonText(updatedText);
    onPress();
  };

  return (
    <Pressable
      className="bg-secondary py-[10px] px-[50px] rounded-[7px]"
      onPress={handlePress}
    >
      <Text className="text-ivory text-[18px]">{buttonText}</Text>
    </Pressable>
  );
};

// The styles are customizable
const styles = StyleSheet.create({
  button: {
    backgroundColor: "#19A7CE",
    paddingVertical: 10,
    paddingHorizontal: 50,
    borderRadius: 7,
    maxWidth: 200,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
  },
});

export default SubmitButton;
