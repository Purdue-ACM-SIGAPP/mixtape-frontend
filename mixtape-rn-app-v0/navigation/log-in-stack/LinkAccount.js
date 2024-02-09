import * as React from "react";
import { Image, View, Text, StyleSheet, Linking } from "react-native";
import { spotify } from "../../assets";
import { applemusic } from "../../assets";
import { ImageButton } from "../../components/ImageButton";
import { AddFriendButton } from "../../components/AddFriendButton";

export default function LinkAccount({ navigation }) {
  const ContinueToConnectSpotify = () => {
    console.log("Continue to spotify account");
    navigation.navigate("ConnectMusicAccount", { platform: "spotify" });
    return false;
  };

  const ContinueToConnectApple = () => {
    console.log("Continue to apple music account");
    navigation.navigate("ConnectMusicAccount", { platform: "apple" });
    return false;
  };

  return (
    <>
      <View className="flex-1 justify-center items-center bg-tertiary">
        <Text className="mt-8 text-white xs:text-xl sm:text-3xl mb-10">
          Choose your music streaming service
        </Text>

        <View className="flex flex-row mr-20">
          <ImageButton
            imageName={spotify}
            imageText={"Spotify"}
            onPress={() => ContinueToConnectSpotify()}
          />
          <ImageButton
            imageName={applemusic}
            imageText={"Apple Music"}
            onPress={() => ContinueToConnectApple()}
          />
        </View>
      </View>
    </>
  );
}
