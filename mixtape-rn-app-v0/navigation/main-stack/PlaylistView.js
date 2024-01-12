import * as React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function PlaylistView() {
    const [playlistName, setPlaylistName] = React.useState("");
    const [ownerName, setOwnerName] = React.useState("");
    const [numFollowers, setNumFollowers] = React.useState(0);
    const [numFriends, setNumFriends] = React.useState(0);
    
  return (
    <View
    style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#14151E",
    }}>
      <Text style = {{color: "white"}}>Playlist Name</Text>
    
    
    
    
    
    
    </View>
  );
}


const styles = StyleSheet.create({


});
  