import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Login";
import SignUp from "../screens/SignUp";
import Location from "../screens/Location";
import WorkPosition from "../screens/WorkPosition";
import DrawerNavigator from "./DrawerNavigator";
import DrawerNavigatorW from "./DrawerNavigatorW";
import Worker from "../screens/Worker";
import JobPost from "../screens/JobPost";
import JobFeed from "../screens/JobFeed";
import JobList from "../screens/components/JobList";
import JobDetails from "../screens/JobDetails";
import CurrentLocation from "../screens/CurrentLocation";
const Stack = createNativeStackNavigator();
export default function StartNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="CurrentLocation" component={CurrentLocation} />
      <Stack.Screen
        name="Location"
        component={Location}
        screenOptions={{ headerShown: false }}
      />
      <Stack.Screen name="WorkPosition" component={WorkPosition} />
      <Stack.Screen name="Customer Home" component={DrawerNavigator} />
      <Stack.Screen name="Worker Home" component={DrawerNavigatorW} />
      <Stack.Screen name="Worker" component={Worker} />
      <Stack.Screen name="JobPost" component={JobPost} />
      <Stack.Screen name="Hiring " component={JobPost} />
      <Stack.Screen name="Job Details " component={JobDetails} />
    </Stack.Navigator>
  );
}
