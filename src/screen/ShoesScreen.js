import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ShoesScreen = () => {
  return (
    <View style={styles.container}>
      <Text>shoes screen selection</Text>
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

export default ShoesScreen;
