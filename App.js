import React, { useState } from "react";
import { StyleSheet, View, Modal } from "react-native";
import colors from "./src/constants/colors";
import CustomModal from "./src/components/CustomModal";
import Create from "./src/scenes/List/Create";
import ListView from "./src/scenes/List";

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Modal
        animationType={"slide"}
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}
      >
        <CustomModal closeModal={() => setIsModalVisible(false)}>
          <Create />
        </CustomModal>
      </Modal>

      <ListView showModal={() => setIsModalVisible(true)} />
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
