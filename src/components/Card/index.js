import React from "react";
import { StyleSheet, View } from "react-native";

const Card = (props) => {
  return (
    <View style={[styles.container, { backgroundColor: props.color }]}>
      {props.children}
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 32,
    paddingHorizontal: 16,
    borderRadius: 6,
    marginHorizontal: 12,
    marginVertical: 12,
    alignItems: "center",
    width: 350,
  },
});
