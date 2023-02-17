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
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import { NavigationContainer } from "@react-navigation/native";

const Login = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 0.9, justifyContent: "center" }}>
      <View style={{ paddingHorizontal: 20 }}>
        <View style={{ alignItems: "center" }}>
          <Image
            style={{ height: 200, width: 320 }}
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
          Login
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
          <TouchableOpacity
            onPress={() => Alert.alert("Forgot Password Pressed")}
          >
            <Text style={{ color: "#414BB2", fontWeight: "700" }}>
              Forgot Password?
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("Location")}>
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
            Sign In
          </Text>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Text>Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
            <Text style={{ color: "#414BB2" }}> Register</Text>
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
  );
};

export default Login;
