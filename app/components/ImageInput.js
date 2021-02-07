import React from "react";
import { View, StyleSheet } from "react-native";
import colors from "../config/colors";

function ImageInput(props) {
  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.light,
    borderRadius: 15,
    height: 100,
    justifyContent: "center",
    width: 100,
  },
});

export default ImageInput;
