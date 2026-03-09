import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";

export default function Flatlist() {
  const brother = [
    { id: 1, name: "Ali Raza", age: 6 },
    { id: 2, name: "Yawar", age: 16 },
    { id: 3, name: "Qammar", age: 19 },
    { id: 4, name: "Qaiser", age: 21 },
    { id: 5, name: "Shahid", age: 25 },
  ];

  const renderItem = ({ item }) => {
    return (
      <View style={styles.card}>
        <Text style={styles.id}>ID: {item.id}</Text>
        <Text style={styles.name}>Name: {item.name}</Text>
        <Text style={styles.age}>Age: {item.age}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Brother</Text>

      <FlatList
        data={brother}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 60,
  },

  card: {
    backgroundColor: "#f2f2f2",
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
  },
  id: {
    fontSize: 14,
    color: "gray",
  },

  name: {
    fontSize: 18,
    fontWeight: "bold",
  },

  age: {
    fontSize: 16,
  },
});
