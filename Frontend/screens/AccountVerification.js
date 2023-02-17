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
import { ScrollView } from "react-native-gesture-handler";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import DateTimePicker from "react-native-modal-datetime-picker";
import * as ImagePicker from "expo-image-picker";
import { useColorScheme } from "react-native";

const AccountVerification = ({ navigation }) => {
  const [isDateTimePickerVisible, setVisibility] = useState(false);
  const isDarkMode = useColorScheme() === "light"; // default is 'light
  showDateTimePicker = () => {
    setVisibility(true);
    //this.setState({ isDateTimePickerVisible: true });
  };

  hideDateTimePicker = () => {
    setVisibility(false);
    // this.setState({ isDateTimePickerVisible: false });
  };

  handleDatePicked = (date) => {
    console.log("A date has been picked: ", date);
    setDopLabel(date.toDateString());
    setVisibility(false);
  };
  //const [date, setDate] = useState(new Date(1598051730000));
  const [dobLabel, setDopLabel] = useState("Date of Birth");
  // const onChange = (event, selectedDate) => {
  //   const currentDate = selectedDate;
  //   setDate(currentDate);
  //   setDopLabel(date.toDateString());
  // };

  // const showMode = (currentMode) => {
  //   DateTimePickerAndroid.open({
  //     value: date,
  //     onChange,
  //     mode: currentMode,
  //     is24Hour: true,
  //   });
  // };

  // const showDatepicker = () => {
  //   showMode("date");
  // };
  //asd
  // const showTimepicker = () => {
  //   showMode("time");
  // };

  const [hasGalleryPermission, setGalleryPermission] = useState(null);
  const [image, setImage] = useState(null);
  const deleteimg = () => {
    setImage(null);
  };
  const deleteimg2 = () => {
    setImage2(null);
  };
  useEffect(() => {
    (async () => {
      const galleryStatus =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      setGalleryPermission(galleryStatus.status === "granted");
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const [hasGalleryPermission2, setGalleryPermission2] = useState(null);
  const [image2, setImage2] = useState(null);

  useEffect(() => {
    (async () => {
      const galleryStatus =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      setGalleryPermission2(galleryStatus.status === "granted");
    })();
  }, []);

  const pickImage2 = async () => {
    let result1 = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    console.log(result1);

    if (!result1.canceled) {
      setImage2(result1.assets[0].uri);
    }
  };

  return (
    <ScrollView style={{ flex: 1, marginTop: 30 }}>
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
          Verify Your Account
        </Text>

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
            name="person-outline"
            size={20}
            style={{ marginRight: 5 }}
          />

          <TextInput
            placeholder="Father name"
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
          <Ionicons name="call-outline" size={20} style={{ marginRight: 5 }} />

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
            paddingBottom: 8,
            marginBottom: 25,
          }}
        >
          <Ionicons
            name="calendar-outline"
            size={20}
            style={{ marginRight: 5 }}
          />
          <TouchableOpacity onPress={() => setVisibility(true)}>
            <Text style={{ color: "#666", marginLeft: 5 }}>{dobLabel}</Text>
          </TouchableOpacity>
          <DateTimePicker
            style={{ backgroundColor: isDarkMode ? "#000" : "#fff" }}
            isVisible={isDateTimePickerVisible}
            onConfirm={handleDatePicked}
            onCancel={() => setVisibility(false)}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            borderBottomColor: "#ccc",
            borderBottomWidth: 1,
            paddingBottom: 8,
            marginBottom: 25,
          }}
        >
          <Ionicons name="link" size={20} style={{ marginRight: 5 }} />

          <TouchableOpacity onPress={() => pickImage()}>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ color: "#666", marginLeft: 5 }}>
                Upload Front Side of Cnic
              </Text>
              <TouchableOpacity onPress={() => deleteimg()}>
                <Ionicons name="close" size={20} style={{ marginLeft: 130 }} />
              </TouchableOpacity>
            </View>
            {image && (
              <Image
                style={{ width: 50, height: 50 }}
                source={{ uri: image }}
              />
            )}
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            borderBottomColor: "#ccc",
            borderBottomWidth: 1,
            paddingBottom: 8,
            marginBottom: 25,
          }}
        >
          <Ionicons name="link" size={20} style={{ marginRight: 5 }} />
          <TouchableOpacity onPress={() => pickImage2()}>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ color: "#666", marginLeft: 5 }}>
                Upload Back Side of Cnic
              </Text>
              <TouchableOpacity onPress={() => deleteimg2()}>
                <Ionicons name="close" size={20} style={{ marginLeft: 130 }} />
              </TouchableOpacity>
            </View>
            {image2 && (
              <Image
                style={{ width: 50, height: 50 }}
                source={{ uri: image2 }}
              />
            )}
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate("Job Feed")}>
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
            Verify
          </Text>
        </TouchableOpacity>
        {/* <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Text>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={{ color: "#414BB2" }}> SignIn</Text>
          </TouchableOpacity>
        </View> */}
        {/* <View
          style={{
            marginTop: 30,
            borderBottomColor: "black",
            borderBottomWidth: 2,
            width: 300,
            marginLeft: 40,
          }}
        ></View> */}
      </View>
    </ScrollView>
  );
};

export default AccountVerification;
