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
import Jobs from "./components/Jobs";
import JobList from "./components/JobList";
import Ionicons from "react-native-vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import CustomerHomePage from "./CustomerHomePage";
import Notifications from "./Notifications";
import Messages from "./Messages";
import JobPost from "./JobPost";
import CustomerProfile from "./CustomerProfile";
const Tab = createBottomTabNavigator();
const JobFeed = ({ navigation }) => {
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
  ];

  let cards = null;
  let card2 = null;

  cards = obj.map((elem) => {
    return (
      <Jobs
        key={elem.key}
        image={elem.img}
        name={elem.name}
        duration={elem.duration}
        price={elem.price}
      />
    );
  });
  card2 = obj.map((elem) => {
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
    <ScrollView
      style={{
        backgroundColor: "#F8F8F8",
        paddingHorizontal: 20,
      }}
    >
      <Text
        style={{
          fontSize: 18,
          marginTop: 13,
        }}
      >
        Find your best jobs
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
      <Text
        style={{
          marginTop: 20,
          fontSize: 15,
        }}
      >
        Most Popular
      </Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {cards}
      </ScrollView>

      <Text
        style={{
          marginVertical: 20,
          fontSize: 15,
        }}
      >
        Nearby jobs
      </Text>

      {card2}
      {/* <Tab></Tab> */}
    </ScrollView>
  );
};

export default JobFeed;
