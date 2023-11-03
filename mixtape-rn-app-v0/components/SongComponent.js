import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const SongComponent = ({ title, image }) => {
  if (!title) {
    title = "Title not found";
  }
  if (!image) {
    image = "https://i.ibb.co/5xqB3BV/mixtape.png";
  }

  return (
    <View style={styles.container}>
      <Image
        style={styles.imageHolder}
        source={{
          uri: image,
        }}
      />

      <Text style={styles.songTitle}>{title}</Text>

      <TouchableOpacity>
        <Icon name="menu-outline" size={30} color="#0094FF" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#00354D",
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
    width: "97%",
    alignSelf: "center",
  },
  imageHolder: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  songTitle: {
    flex: 1,
    color: "white",
    fontSize: 16,
  },
});

export default SongComponent;
