import * as React from "react";
import { Image, View, Text, StyleSheet } from "react-native";
import { spotify } from "../../assets";
import { applemusic } from "../../assets";
import { ImageButton } from "../../components/ImageButton";

export default function LinkAccount() {
  return (
    <View className="flex-1 justify-center items-center bg-tertiary">
      <Text className="text-white xs:text-xl sm:text-3xl mb-10">
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
