import { View, Text } from "react-native";
import React from "react";

const Messages = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        alignContent: "center",
        justifyContent: "center",
        marginLeft: 170,
      }}
    >
      <Text
        style={{
          fontSize: 20,
        }}
      >
        Messages
      </Text>
    </View>
  );
};

export default Messages;
