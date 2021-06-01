import React from "react";
import { Text, StyleSheet, View } from "react-native";

const PantsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Paint screen selection</Text>
    </View>
  );
};

styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "yellow",
  },
});

export default PantsScreen;
