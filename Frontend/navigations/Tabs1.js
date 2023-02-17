import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AccountVerification from "../screens/AccountVerification";
import { Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Customer from "../screens/Customer";
import CustomerHomePage from "../screens/CustomerHomePage";
import CustomerProfile from "../screens/CustomerProfile";
import JobFeed from "../screens/JobFeed";
import JobPost from "../screens/JobPost";
import Login from "../screens/Login";
import Messages from "../screens/Messages";
import Notifications from "../screens/Notifications";
import SignUp from "../screens/SignUp";
import Worker from "../screens/Worker";
import WorkerHomePage from "../screens/WorkerHomePage";

const Tab = createBottomTabNavigator();

function Tabs1() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="WorkerHomePage"
        component={WorkerHomePage}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon name="home" size={30} color={focused ? "#551E18" : "#000"} />
          ),
          tabBarLabel: () => <Text style={styles.tabBarLabel}>Home</Text>,
        }}
      />
      <Tab.Screen
        name="WMessages"
        component={Messages}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              name="envelope"
              size={30}
              color={focused ? "#551E18" : "#000"}
            />
          ),
          tabBarLabel: () => <Text style={styles.tabBarLabel}>Messages</Text>,
        }}
      />
      <Tab.Screen
        name="Job feed"
        component={JobFeed}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              name="briefcase"
              size={30}
              color={focused ? "#551E18" : "#000"}
            />
          ),
          tabBarLabel: () => <Text style={styles.tabBarLabel}>Job Feed</Text>,
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon name="bell" size={30} color={focused ? "#551E18" : "#000"} />
          ),
          tabBarLabel: () => (
            <Text style={styles.tabBarLabel}>Notifications</Text>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Worker}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon name="user" size={30} color={focused ? "#551E18" : "#000"} />
          ),
          tabBarLabel: () => <Text style={styles.tabBarLabel}>Profile</Text>,
        }}
      />
    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({
  tabBarLabel: {
    color: "#292929",
    fontSize: 12,
  },
});

export default Tabs1;
