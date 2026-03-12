import { View, StyleSheet } from "react-native";
import React from "react";
// import Card from "../assets/components/Card";
// import LoginForm from "../assets/components/LoginForm";
// import FlatList from "../assets/components/Flatlist";
import FetchData from "../assets/components/FetchData";

const index = () => {
  return (
    <View style={styles.container}>
      {/* <Card name="Cristiano Ronaldo" age={39} /> */}
      {/* <LoginForm /> */}
      {/* <FlatList /> */}
      <FetchData />
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#62cea3",
    justifyContent: "center",
    alignItems: "center",
  },
});
