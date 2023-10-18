import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";

const PlaylistComponent = ({ name, image, contributors }) => {
    //for testing purposes
  name = "Playlist Name";
  contributors = "p1,p2,p3,p4";
  image = "https://i.ibb.co/5xqB3BV/mixtape.png"

  return (
    <TouchableOpacity style={styles.button}>
      <Image
        source={{
          uri: image,
        }}
        style={styles.playlistImage}
      />
      <Text style={styles.playlistText}>{name}</Text>
      <Text style={styles.contributorsText}>{contributors}</Text>
    </TouchableOpacity>
  );
};

// The styles are customizable
const styles = StyleSheet.create({
  button: {
    backgroundColor: "#00354D",
    paddingVertical: 10,
    paddingHorizontal: 50,
    borderRadius: 7,
    borderWidth: 3.5,
    borderColor: "#146C94",
    width: 367,
    height: 107,
    flexDirection: "row",
    alignItems: "center",
    
  },
  playlistText: {
    color: "white",
    fontSize: 18,
  },
  playlistImage : {
    width: 70,
    height: 70,
    justifyContent: "left",
  },
  contributorsText: {
    color: "#E9E9E9",
    fontSize: 14,
    textAlign: "center",
  },
});

export default PlaylistComponent;
