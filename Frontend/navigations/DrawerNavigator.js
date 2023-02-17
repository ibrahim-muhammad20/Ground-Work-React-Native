import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Tabs from "./Tabs";
import Notifications from "../screens/Notifications";
import Messages from "../screens/Messages";
import JobPost from "../screens/JobPost";
import CustomerProfile from "../screens/CustomerProfile";
import Login from "../screens/Login";
import AccountVerification from "../screens/AccountVerification";
import WorkingHistory from "../screens/WorkingHistory";
import HiringHistory from "../screens/HiringHistory";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen name="Home" component={Tabs} />
      <Drawer.Screen name="Verification" component={AccountVerification} />
      <Drawer.Screen name="Hiring History" component={HiringHistory} />
      <Drawer.Screen name="Logout" component={Login} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
