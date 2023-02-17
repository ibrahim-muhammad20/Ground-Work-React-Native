import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
const JobList = (props) => {
  const { navigate } = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigate("Job Details")}>
      <View
        style={{
          backgroundColor: "#FFF",
          marginTop: 10,
          flexDirection: "row",
          borderRadius: 10,
          height: 60,
          alignItems: "center",
          paddingHorizontal: 20,
        }}
      >
        <View
          style={{
            backgroundColor: "#DFDFDF",
            borderRadius: 5,
            height: 40,
            width: 40,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image source={props.image} style={{ width: 40, height: 30 }} />
        </View>

        <View
          style={{
            paddingHorizontal: 20,
          }}
        >
          <Text
            style={{
              fontSize: 13,
            }}
          >
            {props.name}
          </Text>

          <View
            style={{
              backgroundColor: "#DFDFDF",
              borderRadius: 5,
              width: 70,
              marginVertical: 0,
            }}
          >
            <Text style={{ color: "#000", opacity: 0.5 }}>
              {props.duration}
            </Text>
          </View>
        </View>
        <Text
          style={{
            fontSize: 18,
            marginLeft: 50,
            marginTop: 10,
          }}
        >
          {props.price}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default JobList;
