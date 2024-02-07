import * as React from "react";
import { Image, View, Text, StyleSheet } from "react-native";
import { spotify } from "../../assets";
import { applemusic } from "../../assets";
import { ImageButton } from "../../components/ImageButton";
import { AddFriendButton } from "../../components/AddFriendButton";

export default function LinkAccount() {
  return (
    <View className="flex-1 justify-center items-center bg-tertiary">
      <AddFriendButton
        onPress={() => {
          console.log("Add Friend button pressed");
        }}
        imageText={"Add Friend"}
      />
      <Text className="mt-8 text-white xs:text-xl sm:text-3xl mb-10">
        Choose your music streaming service
      </Text>

      <View className="flex flex-row mr-20">
        <ImageButton
          onPress={() => {
            console.log("Spotify button pressed");
          }}
          imageName={spotify}
          imageText={"Spotify"}
        />
        <ImageButton
          onPress={() => {
            console.log("Apple Music button pressed");
          }}
          imageName={applemusic}
          imageText={"Apple Music"}
        />
      </View>
    </View>
  );
}
