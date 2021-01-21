import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../../constants/colors";

const ListItem = ({ item }) => {
  const currentCount = item.todos.reduce(
    (acc, current) => {
      if (current.completed) {
        acc.completed = acc.completed + 1;
      } else {
        acc.remaining = acc.remaining + 1;
      }
      return acc;
    },
    {
      completed: 0,
      remaining: 0,
    }
  );

  return (
    <View style={[styles.container, { backgroundColor: item.color }]}>
      <Text style={styles.title}>{item.name}</Text>
      <View>
        <View
          style={{
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <View style={{ alignItems: "center", marginRight: 20 }}>
            <Text style={styles.count}>{currentCount.remaining}</Text>
            <Text style={styles.subtitle}>Remaining</Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <Text style={styles.count}>{currentCount.completed}</Text>
            <Text style={styles.subtitle}>Completed</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 32,
    paddingHorizontal: 16,
    borderRadius: 6,
    marginHorizontal: 12,
    marginVertical: 12,
    alignItems: "center",
    width: 200,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: colors.white,
    marginBottom: 18,
  },
  subtitle: {
    fontSize: 12,
    fontWeight: "700",
    color: colors.white,
  },
  count: {
    fontSize: 48,
    fontWeight: "200",
    color: colors.white,
  },
});

export default ListItem;
