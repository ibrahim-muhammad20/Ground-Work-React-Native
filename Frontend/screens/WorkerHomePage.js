import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const WorkerHomePage = ({ navigation }) => {
  return (
    <View
      style={{
        backgroundColor: "#F8F8F8",
        paddingHorizontal: 15,
        paddingBottom: 160,
      }}
    >
      <Text
        style={{
          fontSize: 22,
          marginTop: 10,
          fontWeight: "bold",
        }}
      >
        Here's How you are Going!
      </Text>

      <View style={{ flexDirection: "row", marginTop: 10 }}>
        <Text style={{ fontWeight: "bold" }}>Seller Level</Text>

        <Text style={{ marginLeft: 170 }}>New Seller</Text>
      </View>
      <View style={{ flexDirection: "row", marginTop: 20 }}>
        <TouchableOpacity
          style={{
            backgroundColor: "#414BB2",
            borderWidth: 1,
            borderColor: "rgba(0,0,0,0.2)",
            alignItems: "center",
            justifyContent: "center",
            width: 100,
            height: 100,
            borderRadius: 50,
            marginTop: 15,
            marginLeft: 60,
          }}
        >
          <Text style={{ color: "#fff" }}>100%</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "#414BB2",
            borderWidth: 1,
            borderColor: "rgba(0,0,0,0.2)",
            alignItems: "center",
            justifyContent: "center",
            width: 100,
            height: 100,
            borderRadius: 50,
            marginTop: 15,
            marginLeft: 70,
          }}
        >
          <Text style={{ color: "#fff" }}>4.0</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: "row",
          marginTop: 10,
        }}
      >
        <Text style={{ marginLeft: 40, fontWeight: "bold" }}>
          Order Completion
        </Text>
        <Text style={{ marginLeft: 90, fontWeight: "bold" }}>Ratings</Text>
      </View>
      <View
        style={{
          marginTop: 30,
          borderBottomColor: "black",
          borderBottomWidth: 2,
          width: 430,
          marginLeft: -15,
        }}
      ></View>

      <View>
        <Text
          style={{
            fontSize: 22,
            marginTop: 20,
            fontWeight: "bold",
          }}
        >
          Reach to next Level!
        </Text>
        <View style={{ flexDirection: "row", marginTop: 10 }}>
          <Text style={{ fontWeight: "bold" }}>Earnings:</Text>

          <Text style={{ marginLeft: 200 }}>200rs/20000rs</Text>
        </View>
        <View style={{ flexDirection: "row", marginTop: 40 }}>
          <Text style={{ fontWeight: "bold" }}>Orders:</Text>

          <Text style={{ marginLeft: 300 }}>1/20</Text>
        </View>
        <View
          style={{
            marginTop: 30,
            borderBottomColor: "black",
            borderBottomWidth: 2,
            width: 430,
            marginLeft: -15,
          }}
        ></View>
      </View>

      <View>
        <Text
          style={{
            fontSize: 22,
            marginTop: 20,
            fontWeight: "bold",
          }}
        >
          Earnings:
        </Text>

        <TouchableOpacity
          style={{
            paddingBottom: 30,
            backgroundColor: "#414BB2",
            borderRadius: 20,
            marginTop: 20,
            //marginLeft: 10,
            //justifyContent: "center",
            //alignContent: "center",
            borderWidth: 1,
          }}
        >
          <View style={{ flexDirection: "row", marginTop: 10, marginLeft: 10 }}>
            <Text style={{ fontWeight: "bold", color: "#000" }}>
              Personal Balance
            </Text>
            <Text style={{ marginLeft: 80, fontWeight: "bold", color: "#000" }}>
              Earned this Month
            </Text>
          </View>
          <View style={{ flexDirection: "row", marginTop: 10, marginLeft: 50 }}>
            <Text style={{ color: "#fff" }}>200Rs</Text>
            <Text style={{ marginLeft: 180, color: "#fff" }}>200Rs</Text>
          </View>
          <View style={{ flexDirection: "row", marginTop: 10, marginLeft: 10 }}>
            <Text style={{ fontWeight: "bold", color: "#000" }}>
              Average Selling Price
            </Text>
            <Text style={{ marginLeft: 70, fontWeight: "bold", color: "#000" }}>
              Active Orders
            </Text>
          </View>
          <View style={{ flexDirection: "row", marginTop: 10, marginLeft: 50 }}>
            <Text style={{ color: "#fff" }}>200Rs</Text>
            <Text style={{ marginLeft: 200, color: "#fff" }}>0</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WorkerHomePage;
