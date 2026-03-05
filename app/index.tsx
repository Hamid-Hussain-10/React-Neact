import { View , StyleSheet } from "react-native";
import React from "react";
import Card from "../assets/components/Card";
const index = () => {
  return (
    <View style={styles.container}>
      <Card name="Cristiano Ronaldo" age={39}/>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1c8f5f",
    justifyContent: "center",
    alignItems: "center",
  },
});
