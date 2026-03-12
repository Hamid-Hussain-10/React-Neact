import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";

const FetchData = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
      );
      const data = await response.json();
      setPosts(data.slice(0, 10));
      setLoading(false);
    } catch (error) {
      alert(error.message);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <View style={styles.loader}>
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.body}>{item.body}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default FetchData;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingVertical: 40,
    paddingHorizontal: 15,
  },

  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  loadingText: {
    fontSize: 18,
    fontWeight: "600",
  },

  card: {
    backgroundColor: "#563e23",
    padding: 15,
    marginVertical: 8,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },

  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 6,
    color: "#ffffff",
    textTransform: "capitalize",
  },

  body: {
    fontSize: 14,
    color: "#eeff00",
    lineHeight: 20,
  },
});
