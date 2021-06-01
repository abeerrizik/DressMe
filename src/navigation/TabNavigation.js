import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { Component } from "react";

import HomeScreen from "../screen/HomeScreen";
import PantsScreen from "../screen/PantsScreen";
import ShirtsScreen from "../screen/ShirtsScreen";
import ShoesScreen from "../screen/ShoesScreen";

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Pants" component={PantsScreen} />
      <Tab.Screen name="Shirts" component={ShirtsScreen} />
      <Tab.Screen name="Shoes" component={ShoesScreen} />
    </Tab.Navigator>
  );
}

export default TabNavigator;
