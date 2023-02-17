import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import Jobs from "./components/Jobs";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "react-native-vector-icons/Ionicons";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import CustomerHome from "./components/CustomerHome";
const CustomerHomePage = ({ navigation }) => {
  const obj = [
    {
      key: 1,
      img: require("./images/webDev.png"),
      name: "Developer",
    },
    {
      key: 2,
      img: require("./images/mechanic.png"),
      name: "Mechanic",
    },
    {
      key: 3,
      img: require("./images/languages.png"),
      name: "Translator",
    },
    {
      key: 4,
      img: require("./images/mechanic.png"),
      name: "Electrician",
    },
    {
      key: 5,
      img: require("./images/salesman.png"),
      name: "Salesman",
    },
    {
      key: 6,
      img: require("./images/paintbrush.png"),
      name: "Painter",
    },
    {
      key: 7,
      img: require("./images/carpenter.png"),
      name: "Carpenter",
    },
    {
      key: 8,
      img: require("./images/designer.png"),
      name: "Graphic Designer",
    },
    {
      key: 9,
      img: require("./images/plumber.png"),
      name: "Plumber",
    },
  ];

  return (
    // <SafeAreaView>
    <SafeAreaView
      style={{
        backgroundColor: "#F8F8F8",
        paddingHorizontal: 15,
        paddingBottom: 160,
      }}
    >
      <Text
        style={{
          fontSize: 18,
          marginTop: -10,
        }}
      >
        Find a Worker
      </Text>

      <View
        style={{
          backgroundColor: "#FFF",
          borderRadius: 5,
          padding: 5,
          flexDirection: "row",
          alignItems: "center",
          marginTop: 20,
        }}
      >
        <TextInput
          placeholder="What are you looking for?"
          placeholderTextColor="#B0B0B0"
          style={{
            paddingHorizontal: 20,
          }}
        />
        <View
          style={{
            width: 30,
            height: 30,
            borderRadius: 8,
            marginLeft: 100,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Ionicons name="search" size={20} style={{ marginLeft: 10 }} />
        </View>
      </View>
      <FlatList
        numColumns={3}
        data={obj}
        renderItem={({ item }) => <CustomerHome product={item} />}
      ></FlatList>
      <TouchableOpacity
        style={{
          padding: 20,
          backgroundColor: "#414BB2",
          borderRadius: 20,
          marginTop: 35,
          marginLeft: 10,
          justifyContent: "center",
          alignContent: "center",
          borderWidth: 1,
        }}
        onPress={() => navigation.navigate("JobPost")}
      >
        <Text
          style={{
            color: "#fff",
            fontWeight: "bold",
            marginLeft: 95,
          }}
        >
          Looking to Hire?
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
    // </SafeAreaView>
  );
};

export default CustomerHomePage;
