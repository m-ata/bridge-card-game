import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Feather, FontAwesome } from "@expo/vector-icons";

const Header = () => {
  return (
    <View style={styles.header}>
      <View>
        <View style={styles.score}>
          <Text style={styles.scoreCount}>3</Text>
          <FontAwesome name="heart" color="#E11212" size={20} />
        </View>
        <Text style={styles.name}>By South</Text>
      </View>
      <Feather name="menu" size={35} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    height: 60,
    padding: 10,
    justifyContent: "space-between",
    backgroundColor: "#fff",
    flexDirection: "row",
  },
  score: {
    flexDirection: "row",
    alignItems: "center",
  },
  scoreCount: {
    color: "red",
    fontWeight: "bold",
    fontSize: 26,
    marginRight: 2,
  },
  name: {
    fontSize: 10,
    fontWeight: "800",
  },
});
