import {
  View,
  Text,
  Image,
  TextInput,
  Alert,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const Jobs = (props) => {
  const { navigate } = useNavigation();
  return (
    <View
      style={{
        backgroundColor: "#FFF",
        height: 200,
        width: 150,
        borderRadius: 20,
        marginTop: 35,
        marginLeft: 10,
      }}
    >
      <Image source={props.image} style={{ width: 150, height: 100 }} />
      <TouchableOpacity
        onPress={() => navigate("Job Details")}
        style={{
          backgroundColor: "#fff",
          height: 60,
          borderRadius: 20,
          marginTop: 10,
          paddingHorizontal: 8,
          paddingVertical: 8,
        }}
      >
        <Text
          style={{
            color: "#000",
            fontSize: 13,
          }}
        >
          {props.name}
        </Text>

        <View style={{ flexDirection: "row", marginTop: 4 }}>
          <View
            style={{
              backgroundColor: "#3E3C3C",
              paddingHorizontal: 5,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 5,
            }}
          >
            <Text
              style={{
                color: "#B0B0B0",
                fontSize: 13,
              }}
            >
              {props.duration}
            </Text>
          </View>

          <Text
            style={{
              color: "#B0B0B0",
              fontSize: 13,
              marginLeft: 15,
            }}
          >
            {props.price}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Jobs;
