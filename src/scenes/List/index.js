import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from "react-native";
import colors from "../../constants/colors";
import mockData from "../../mock";
import ListItem from "./Item";

const ListView = (props) => {
  const { showModal } = props;
  return (
    <>
      <View style={{ flexDirection: "row" }}>
        <Text style={styles.title}>My Shopping Lists</Text>
      </View>

      <View style={{ marginVertical: 10 }}>
        <TouchableOpacity onPress={showModal}>
          <View style={styles.addListContainer}>
            <Text>Plan a new shopping trip</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={{ height: 550 }}>
        <FlatList
          data={mockData}
          keyExtractor={(item, index) => index.toString()}
          vertical={true}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => <ListItem item={item} />}
        />
      </View>
    </>
  );
};

export default ListView;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "400",
    color: colors.li,
    paddingHorizontal: 40,
    paddingBottom: 20,
  },
  addListContainer: {
    paddingVertical: 32,
    paddingHorizontal: 16,
    borderRadius: 6,
    marginHorizontal: 12,
    marginVertical: 12,
    alignItems: "center",
    width: 350,
    borderWidth: 2,
    borderColor: colors.lightBlue,
    borderStyle: "dashed",
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
