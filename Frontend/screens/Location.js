import { View, Text, Button, Image, StyleSheet, Pressable } from "react-native";
import * as React from "react";

const Location = ({ navigation }) => {
  return (
    <View className="flex-1 items-center justify-center">
      <Image
        className="pt-4 align-items items-center justify-center"
        style={{ width: "50%", height: "50%" }}
        source={require("./images/map.png")}
      />
      <View className="flex-1 items-center justify-center">
        <Text className="font-bold py-2 px-4 rounded  text-xl">
          Are You In Lahore?
        </Text>
        <View className="my-11">
          <Pressable
            style={styles.button}
            onPress={() => navigation.navigate("WorkPosition")}
          >
            <Text style={styles.text}>Yes</Text>
          </Pressable>

          <View className="my-4"></View>
          <Pressable
            style={styles.button2}
            onPress={() => navigation.navigate("WorkPosition")}
          >
            <Text style={styles.text}>Change</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  button2: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "#414BB2",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "#414BB2",
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});
export default Location;
