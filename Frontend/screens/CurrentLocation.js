//import React from "react";
//import Geolocation from "@react-native-community/geolocation";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  PermissionsAndroid,
} from "react-native";
//import Geolocation from "react-native-geolocation-service";
import * as Location from "expo-location";

const CurrentLocation = ({ navigation }) => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [longitude, setlongitude] = useState(null);
  const [latitude, setlatitude] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      setlongitude(location.coords.longitude);
      setlatitude(location.coords.latitude);

      //  console.log(location.coords.);
    })();
  }, []);
  console.log(location);
  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }
  console.log(text);
  return (
    <View>
      <Text>Latitude: {latitude}</Text>
      <Text>Longitude: {longitude}</Text>
    </View>
  );
};

export default CurrentLocation;
