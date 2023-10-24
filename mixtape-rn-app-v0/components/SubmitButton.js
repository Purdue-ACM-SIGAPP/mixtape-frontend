import React, { useState } from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

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
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <Text style={styles.buttonText}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

// The styles are customizable
const styles = StyleSheet.create({
  button: {
    backgroundColor: "#19A7CE",
    paddingVertical: 10,
    paddingHorizontal: 50,
    borderRadius: 7,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
});

export default SubmitButton;