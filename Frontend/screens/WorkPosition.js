import { View, Text, Button, Image, StyleSheet, Pressable } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";

const WorkPosition = ({ navigation }) => {
  return (
    <View className="flex-1 items-center justify-center">
      <Image
        style={styles.image}
        className="   items-center justify-center"
        source={require("./images/position.png")}
      />
      <View className=" flex-1 items-center justify-center ">
        <Text style={styles.text}>Are you a Customer or Worker?</Text>
        <View className="my-11  ">
          <Pressable
            style={styles.button}
            onPress={() => navigation.navigate("Worker Home")}
          >
            <Text className="text-white">WORKER</Text>
          </Pressable>
          <View className="my-3"></View>
          <Pressable
            style={styles.button1}
            onPress={() => navigation.navigate("Customer Home")}
            //title="Customer"
          >
            <Text className="text-white">CUSTOMER</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  image: {
    marginTop: 40,
    flex: 0.5,
    height: 200,
    width: 250,
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
  button1: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "#414BB2",
  },
  text: {
    fontSize: 20,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "black",
  },
});
export default WorkPosition;
