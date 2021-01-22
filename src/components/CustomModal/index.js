import React, { useState } from "react";
import {
  StyleSheet,
  KeyboardAvoidingView,
  TouchableOpacity,
  View,
  Text,
  TextInput,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

import colors, { arrayOfColorPalette } from "../../constants/colors";
import Card from "../Card";

const CustomModal = (props) => {
  const [name, setName] = useState("");
  const [selectedColor, setSelectedColor] = useState(arrayOfColorPalette[0]);

  return (
    <>
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <TouchableOpacity
          style={{ position: "absolute", top: 64, right: 32 }}
          onPress={props.closeModal}
        >
          <AntDesign name={"close"} size={24} color={colors.black} />
        </TouchableOpacity>
        <Text style={styles.title}>New Shopping Trip</Text>

        <Card color={selectedColor}>
          <TextInput
            style={styles.input}
            placeholder={"Title"}
            onChangeText={(text) => setName(text)}
          ></TextInput>
        </Card>

        <View style={{ alignSelf: "stretch", marginHorizontal: 25 }}>
          <Text style={{ marginTop: 20 }}>Pick a color</Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 12,
            }}
          >
            {arrayOfColorPalette.map((color) => (
              <TouchableOpacity
                key={color}
                style={[styles.colorPalette, { backgroundColor: color }]}
                onPress={() => setSelectedColor(color)}
              />
            ))}
          </View>

          <TouchableOpacity
            style={[styles.create, { backgroundColor: colors.blue }]}
          >
            <Text style={{ color: colors.white, fontWeight: "600" }}>
              Create
            </Text>
          </TouchableOpacity>
        </View>
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
  title: {
    fontSize: 20,
    fontWeight: "300",
    color: colors.black,
    alignSelf: "center",
    marginBottom: 16,
  },
  input: {
    height: 50,
    marginTop: 8,
    paddingHorizontal: 16,
    fontSize: 18,
    color: colors.white,
  },
  create: {
    marginTop: 24,
    height: 50,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
  },
  colorPalette: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
});
