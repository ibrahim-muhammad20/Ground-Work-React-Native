import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  Pressable,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState } from "react";
import url from "./URL/Url";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import { ScrollView } from "react-native-gesture-handler";
import axios from "axios";
// import Axios from "react-native-axios/lib/core/Axios";
const SignUp = ({ navigation }) => {
  const [user, setUser] = useState({
    name: "ali",
    name1: "moosa",
    email: "alimoosa80",
    password: "alimoosa80",
    phonenumber: "alimoosa80",
    houseno: 139,
    street: "43",
    block: "C",
    bio: "Ali heavy programmer",
    long: 90.1,
    lat: 92,
    city: "Lahore",
    age: 20,
    area: "ShahJamal",
    gender: "Male",
    dob: "2001-11-12",
    radius: 5,
  });

  const handleSubmit = async () => {
    try {
      console.log("Pressed Submit");
      const response = await axios.post(url, {
        first_name: user.name,
        last_name: user.name1,
        username: user.email,
        bio: user.bio,
        city: user.city,
        date_of_birth: user.dob,
        gender: user.gender,
        longitude: user.long,
        latitude: user.lat,
        radius: user.radius,
        password: user.password,
        age: user.age,
        houseNumber: user.houseno,
        street: user.street,
        block: user.block,
        area: user.area,
      });
      console.log("Pressed Submit2");
      console.log(response);
      alert("Signup success!");
    } catch (error) {
      console.error(error);
      alert("Signup failed. Please try again.");
    }
  };
  // const handleSubmit = async () => {
  //   try {
  //     const response = await axios.post(
  //       "http://127.0.0.1:8000/api/customersignup",
  //       {
  //         first_name: user.name,
  //         last_name: user.name1,
  //         username: user.email,
  //         bio: user.bio,
  //         city: user.city,
  //         date_of_birth: user.dob,
  //         gender: user.gender,
  //         longitude: user.long,
  //         latitude: user.lat,
  //         radius: user.radius,
  //         password: user.password,
  //         age: user.age,
  //         houseNumber: user.houseno,
  //         street: user.street,
  //         block: user.block,
  //         area: user.area,
  //       }
  //     );
  //     console.log(response);
  //     alert("Signup success!");
  //   } catch (error) {
  //     console.log(response);
  //     console.error(error);
  //     console.log(response);
  //     alert("Signup failed. Please try again.");
  //   }
  // };
  return (
    <ScrollView>
      <SafeAreaView style={{ flex: 1, justifyContent: "center" }}>
        <View style={{ paddingHorizontal: 20 }}>
          <View style={{ alignItems: "center" }}>
            <Image
              style={{ height: 160, width: 320 }}
              source={require("./images/title1.png")}
            />
          </View>
          <Text
            style={{
              fontSize: 28,
              fontWeight: "500",
              marginBottom: 30,
              marginTop: 20,
              color: "#414BB2",
            }}
          >
            Create an Account
          </Text>
          <View
            style={{
              flexDirection: "row",
              borderBottomColor: "#ccc",
              borderBottomWidth: 1,
              marginBottom: 25,
            }}
          >
            <MaterialIcons
              name="alternate-email"
              size={20}
              style={{ marginRight: 5 }}
            />

            <TextInput
              placeholder="Email"
              style={{ flex: 1, paddingVertical: 0 }}
              keyboardType="email-address"
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              borderBottomColor: "#ccc",
              borderBottomWidth: 1,
              marginBottom: 25,
            }}
          >
            <Ionicons
              name="person-outline"
              size={20}
              style={{ marginRight: 5 }}
            />

            <TextInput
              placeholder="Full name"
              style={{ flex: 1, paddingVertical: 0 }}
              keyboardType="default"
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              borderBottomColor: "#ccc",
              borderBottomWidth: 1,
              marginBottom: 25,
            }}
          >
            <Ionicons
              name="call-outline"
              size={20}
              style={{ marginRight: 5 }}
            />

            <TextInput
              placeholder="Phone Number"
              style={{ flex: 1, paddingVertical: 0 }}
              keyboardType="phone-pad"
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              borderBottomColor: "#ccc",
              borderBottomWidth: 1,
              marginBottom: 25,
            }}
          >
            <Ionicons
              name="ios-lock-closed-outline"
              size={20}
              style={{ marginRight: 5 }}
            />

            <TextInput
              placeholder="Password"
              style={{ flex: 1, paddingVertical: 0 }}
              secureTextEntry={true}
            />
          </View>

          <View
            style={{
              flexDirection: "row",
              borderBottomColor: "#ccc",
              borderBottomWidth: 1,
            }}
          >
            <Ionicons
              name="ios-lock-closed-outline"
              size={20}
              style={{ marginRight: 5 }}
            />

            <TextInput
              placeholder="Confirm Password"
              style={{ flex: 1, paddingVertical: 0 }}
              secureTextEntry={true}
            />
          </View>

          <TouchableOpacity onPress={handleSubmit}>
            <Text
              style={{
                color: "#fff",
                textAlign: "center",
                backgroundColor: "#414BB2",
                fontWeight: "700",
                padding: 10,
                marginTop: 20,
                borderRadius: 10,
                marginBottom: 30,
              }}
            >
              Sign Up
            </Text>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Text>Already have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text style={{ color: "#414BB2" }}> SignIn</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              marginTop: 30,
              borderBottomColor: "black",
              borderBottomWidth: 2,
              width: 300,
              marginLeft: 40,
            }}
          ></View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default SignUp;
