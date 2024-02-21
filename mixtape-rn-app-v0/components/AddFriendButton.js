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
        className={`flex flex-row justify-end ${colorStyle} py-[3px] rounded-[16px]`}
      >
        <Image className="flex h-[28px] w-[28px] mt-2 ml-2" source={userIcon} />
        <Text className="flex-grow mt-2 ml-4 text-ivory text-[16px]">
          {imageText}
        </Text>
        <Image
          className="flex h-[24px] w-[24px] top-[6px] mr-2 "
          source={addFriend ? checkIcon : plusIcon}
        />
      </View>
    </Pressable>
  );
};
