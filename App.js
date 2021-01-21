import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from "react-native";
import colors from "./src/constants/colors";
import { AntDesign } from "@expo/vector-icons";
import mockData from "./src/mock";
import ListItem from "./src/components/List";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <View style={styles.divider}></View>
        <Text style={styles.title}>ToobyDooby</Text>
        <View style={styles.divider}></View>
      </View>
      <View style={{ marginVertical: 10 }}>
        <TouchableOpacity style={styles.addButton}>
          <AntDesign name={"plus"} size={20} color={colors.blue} />
        </TouchableOpacity>
      </View>

      <View style={{ height: 550, paddingLeft: 32 }}>
        <FlatList
          data={mockData}
          keyExtractor={(item) => item.name}
          vertical={true}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => <ListItem item={item} />}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  divider: {
    backgroundColor: colors.lightBlue,
    height: 1,
    flex: 1,
    alignSelf: "center",
  },
  title: {
    fontSize: 38,
    fontWeight: "800",
    color: colors.li,
    paddingHorizontal: 40,
    paddingBottom: 20,
  },
  addButton: {
    borderWidth: 2,
    borderColor: colors.lightBlue,
    borderRadius: 4,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  add: {
    color: colors.blue,
    fontWeight: "600",
    fontSize: 14,
    marginTop: 8,
  },
});
