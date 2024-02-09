import React, { useState, useEffect } from "react";
import { Text, Pressable, Image, View, Animated } from "react-native";
import { userIcon, plusIcon, checkIcon } from "../assets";

export const AddFriendButton = ({ onPress, imageText }) => {
  const [addFriend, setAddFriend] = useState(false);

  const handlePress = () => {
    onPress();
    setAddFriend(!addFriend);
  };

  const colorStyle = addFriend ? "bg-[#1DB954]" : "bg-[#146C94]";

  return (
    <Pressable onPress={handlePress}>
      <View
        className={`flex flex-row ${colorStyle} py-[3px] px-[80px] rounded-[16px]`}
      >
        <Image
          className="flex r-30 h-[28px] w-[28px] mt-2 right-[60px]"
          source={userIcon}
        />
        <Text className="flex mt-2 text-ivory right-[40px] top-[1px] text-[16px]">
          {imageText}
        </Text>
        <Image
          className="flex r-30 h-[24px] w-[24px] top-[6px] left-[60px]"
          source={addFriend ? checkIcon : plusIcon}
        />
      </View>
    </Pressable>
  );
};
