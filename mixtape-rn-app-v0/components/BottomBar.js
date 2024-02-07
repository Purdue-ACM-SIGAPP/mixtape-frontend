import React from "react";
import { View, Pressable, Text, StyleSheet, Image } from "react-native";
import { Bar1, Bar2, Bar3, Bar4 } from "./../assets";

const BottomBar = () => {
  const handleBar1Press = () => {
    console.log("Bar1 pressed");
    // Add your logic here
  };

  const handleBar2Press = () => {
    console.log("Bar2 pressed");
    // Add your logic here
  };

  const handleBar3Press = () => {
    console.log("Bar3 pressed");
    // Add your logic here
  };

  const handleBar4Press = () => {
    console.log("Bar4 pressed");
    // Add your logic here
  };

  return (
    <View style={styles.bottomBar}>
      <Pressable style={styles.tab} onPress={handleBar1Press}>
        <Image style={styles.image} source={Bar1} />
      </Pressable>
      <Pressable style={styles.tab} onPress={handleBar2Press}>
        <Image style={styles.image} source={Bar2} />
      </Pressable>
      <Pressable style={styles.tab} onPress={handleBar3Press}>
        <Image style={styles.image} source={Bar3} />
      </Pressable>
      <Pressable style={styles.tab} onPress={handleBar4Press}>
        <Image style={styles.image} source={Bar4} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "7%",
    width: "100%",
    borderTopWidth: 2,
    borderTopColor: "#19A7CE",
    backgroundColor: "black",
    position: "fixed",
    bottom: 0,
  },
  tab: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "2em",
    height: "2em",
  },
});

export default BottomBar;
