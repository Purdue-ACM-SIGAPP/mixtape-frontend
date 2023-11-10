import React, { useRef, useState } from "react";
import {
  Animated,
  Image,
  PanResponder,
  StyleSheet,
  Text,
  TouchableOpacity
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const SongComponent = ({ title, image }) => {
  if (!title) {
    title = "Title not found";
  }
  if (!image) {
    image = "https://i.ibb.co/5xqB3BV/mixtape.png";
  }

  // Create a ref to store the position of the card
  const position = useRef(new Animated.ValueXY()).current;

  // State to track if the card is being dragged
  const [dragging, setDragging] = useState(false);

  // Create a pan responder to handle touch events
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        // When touch gesture starts,
        //set dragging to true
        setDragging(true);
      },
      onPanResponderMove: Animated.event(
        [
          null,
          {
            dy: position.y,
          },
        ],
        { useNativeDriver: false }
      ),
      onPanResponderRelease: () => {
        // When touch gesture is released,
        //set dragging to false
        setDragging(false);
      },
    })
  ).current;


  return (
    <Animated.View
      style={[
        styles.container,
        {
          transform: position.getTranslateTransform(),
          opacity: dragging ? 0.8 : 1,
        },
      ]}
      {...panResponder.panHandlers}
    >
      <Image
        style={styles.imageHolder}
        source={{
          uri: image,
        }}
      />

      <Text style={styles.songTitle}>{title}</Text>

      <TouchableOpacity>
        <Icon name="menu-outline" size={30} color="#0094FF" style={[
          {
            transform: position.getTranslateTransform(),
            opacity: dragging ? 0.8 : 1,
          },
        ]}
        {...panResponder.panHandlers} />
      </TouchableOpacity>
    </Animated.View>
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
