import React from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Button,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
export default function CustomerHome(props, navigation) {
  const { navigate } = useNavigation();
  const { key, img, name, duration, price } = props.product;
  return (
    <>
      <View
        style={{
          backgroundColor: "#FFF",
          height: 120,
          width: 115,
          borderRadius: 20,
          marginTop: 35,
          marginLeft: 10,
          justifyContent: "center",
          alignContent: "center",
          borderWidth: 1,
        }}
      >
        <TouchableOpacity onPress={() => navigate("Worker")}>
          <Image
            source={img}
            style={{
              width: 50,
              height: 50,
              marginLeft: 35,
            }}
          />

          <Text
            style={{
              color: "#000",
              fontSize: 13,
              marginTop: 10,
              marginLeft: 20,
            }}
          >
            {name}
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
