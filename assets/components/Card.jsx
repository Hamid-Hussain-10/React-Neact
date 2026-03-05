import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";

export default function Card({ name, age }) {
  const [like, setLike] = useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Image
          source={{ uri: "https://i.pravatar.cc/150?img=3" }}
          style={styles.image}
        />

        <Text style={styles.name}>{name}</Text>
        <Text style={styles.age}>{age}</Text>

        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => alert("Now you are following " + name)}
          >
            <Text style={styles.buttonText}>Follow</Text>
          </TouchableOpacity>

          <View style={styles.likeContainer}>
            <TouchableOpacity
              style={styles.buttonLike}
              onPress={() => setLike(like + 1)}
            >
              <Text style={styles.like}>❤️</Text>
            </TouchableOpacity>
            <Text style={styles.likeCount}>{like}</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  card: {
    width: 300,
    backgroundColor: "#d47617",
    // borderRadius: 20,
    // borderTopLeftRadius: 50,
    borderBottomLeftRadius: 20,
    borderTopRightRadius: 170,
    padding: 20,
    alignItems: "center",
    elevation: 3,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  age: {
    fontSize: 16,
    color: "#070053",
    marginBottom: 15,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  button: {
    backgroundColor: "#a2b933",
    paddingVertical: 9,
    paddingHorizontal: 18,
    borderRadius: 20,
  },
  buttonLike: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  buttonText: {
    color: "#001165",
    fontWeight: "bold",
    fontSize: 16,
  },
  likeContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  like: {
    color: "#ff0000",
    fontWeight: "bold",
    fontSize: 20,
    marginRight: 8,
  },
  likeCount: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#001165",
  },
});
