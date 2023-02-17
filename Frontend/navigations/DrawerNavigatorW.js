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
import Tabs1 from "./Tabs1";

const Drawer = createDrawerNavigator();

const DrawerNavigatorW = () => {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen name="Home" component={Tabs1} />
      <Drawer.Screen
        name="Worker Verification"
        component={AccountVerification}
      />
      <Drawer.Screen name="Working History" component={WorkingHistory} />
      <Drawer.Screen name="Logout" component={Login} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigatorW;
