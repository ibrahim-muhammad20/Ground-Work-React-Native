import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import DrawerNavigator from "./navigations/DrawerNavigator";
import StartNavigator from "./navigations/StartNavigator";

const App = () => {
  return (
    // <View style={styles.container}>
    <NavigationContainer>
      <StartNavigator />
    </NavigationContainer>
  );
};
export default App;
