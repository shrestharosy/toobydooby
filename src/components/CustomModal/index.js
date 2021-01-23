import React from "react";
import {
  StyleSheet,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

import colors from "../../constants/colors";

const CustomModal = (props) => {
  return (
    <>
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <TouchableOpacity
          style={{ position: "absolute", top: 64, right: 32 }}
          onPress={props.closeModal}
        >
          <AntDesign name={"close"} size={24} color={colors.black} />
        </TouchableOpacity>
        {props.children}
      </KeyboardAvoidingView>
    </>
  );
};

export default CustomModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
