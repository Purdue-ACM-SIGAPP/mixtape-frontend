import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

const PlaylistCard = ({ name, image, collaborators }) => {
  if(!image) {
    image = "https://i.ibb.co/5xqB3BV/mixtape.png"; //some default image? logo good?
  }
  if(!name){
    name = "Name not found";
  }
  if(!collaborators){
    collaborators = "Collaborators not found";
  }
  
  return (
    <Pressable>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: image }} style={styles.image} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.playlistName}>{name}</Text>
          <Text style={styles.collabList}>{collaborators}</Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#00354D",
    padding: 10,
    borderRadius: 7,
    borderColor: "#146C94",
    borderWidth: 3.5,
    alignItems: "center",
    marginBottom: 15,
    width: "100%"
  },
  imageContainer: {
    flex: 1,
    marginRight: 10,
    alignContent: "center",
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 5,
  },
  textContainer: {
    flex: 3,
  },
  playlistName: {
    color: "white",
    fontSize: 20,
  },
  collabList: {
    color: "#E9E9E9",
    fontSize: 14,
    marginTop: 5,
  },
});

export default PlaylistCard;
