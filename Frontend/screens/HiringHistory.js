import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import JobList from "./components/JobList";

const HiringHistory = ({ navigation }) => {
  const [flag, setFlag] = useState(true);
  const obj = [
    {
      key: 1,
      img: require("./images/title1.png"),
      name: "Developer",
      duration: "Full time",
      price: "Rs500/hr",
    },
    {
      key: 2,
      img: require("./images/title1.png"),
      name: "Plumber",
      duration: "1 hour",
      price: "Rs300/hr",
    },
    {
      key: 3,
      img: require("./images/title1.png"),
      name: "Developer",
      duration: "Full time",
      price: "Rs600/hr",
    },
    {
      key: 4,
      img: require("./images/title1.png"),
      name: "Electrician",
      duration: "2 hours",
      price: "Rs300/hr",
    },
    {
      key: 5,
      img: require("./images/title1.png"),
      name: "SEO",
      duration: "Full time",
      price: "Rs400/hr",
    },
    {
      key: 6,
      img: require("./images/title1.png"),
      name: "SEO",
      duration: "Full time",
      price: "Rs400/hr",
    },
    {
      key: 7,
      img: require("./images/title1.png"),
      name: "SEO",
      duration: "Full time",
      price: "Rs400/hr",
    },
    {
      key: 8,
      img: require("./images/title1.png"),
      name: "SEO",
      duration: "Full time",
      price: "Rs400/hr",
    },
    {
      key: 9,
      img: require("./images/title1.png"),
      name: "SEO",
      duration: "Full time",
      price: "Rs400/hr",
    },
    {
      key: 10,
      img: require("./images/title1.png"),
      name: "SEO",
      duration: "Full time",
      price: "Rs400/hr",
    },
  ];

  let cards = null;
  let card2 = null;

  cards = obj.map((elem) => {
    return (
      <JobList
        key={elem.key}
        image={elem.img}
        name={elem.name}
        duration={elem.duration}
        price={elem.price}
      />
    );
  });
  return (
    <ScrollView>
      <View
        style={{
          backgroundColor: "#F8F8F8",
          paddingHorizontal: 15,
          paddingBottom: 200,
        }}
      >
        <Text
          style={{
            fontSize: 22,
            marginTop: 50,
            fontWeight: "bold",
            marginLeft: 100,
          }}
        >
          Hiring History
        </Text>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity onPress={() => setFlag(true)}>
            <Text
              style={{
                fontSize: 15,
                marginTop: 40,
                marginLeft: 50,
                fontWeight: flag ? "bold" : "normal",
              }}
            >
              Inprogress
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setFlag(false)}>
            <Text
              style={{
                fontSize: 15,
                marginTop: 40,
                marginLeft: 100,
                fontWeight: flag ? "normal" : "bold",
              }}
            >
              Completed
            </Text>
          </TouchableOpacity>
        </View>
        {flag ? (
          <View>
            <Image
              style={{
                height: 200,
                width: 200,
                marginTop: 150,
                marginLeft: 130,
              }}
              source={require("./images/cv.png")}
            ></Image>
            <TouchableOpacity
              style={{
                padding: 20,
                backgroundColor: "#414BB2",
                borderRadius: 20,
                marginTop: 140,
                marginLeft: 10,
                borderWidth: 1,
              }}
              onPress={() => navigation.navigate("Job Post")}
            >
              <Text
                style={{
                  color: "#fff",
                  fontWeight: "bold",
                  marginLeft: 110,
                }}
              >
                Hire a Person!
              </Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={{ marginTop: 20 }}>{cards}</View>
        )}
      </View>
    </ScrollView>
  );
};

export default HiringHistory;
