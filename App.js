import React from "react";
import { StyleSheet, Text, View } from "react-native";
// import { createAppContainer } from "react-navigation";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./src/navigation/TabNavigation";
// import { createStackNavigator } from "react-navigation-stack";

// const navigator = createStackNavigator(
//   {
//     Home: HomeScreen,
//   },
//   {
//     initialRouteName: "Home",
//     defaultNavigationOptions: {
//       title: "Home page",
//     },
//   }
// );

const app = () => {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default app;
