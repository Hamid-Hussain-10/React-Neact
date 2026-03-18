import { Text, TextInput, View, Button, StyleSheet } from "react-native";
import React, { useEffect, useRef, useState } from "react";

const Input = () => {
  const [second, setSecond] = useState(0);
  const [running, setRunning] = useState(false);

  const inputRef = useRef(null);

  useEffect(() => {
    let interval;

    if (running) {
      interval = setInterval(() => {
        setSecond((prev) => prev + 1);
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [running]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // format time
  const minutes = Math.floor(second / 60);
  const secs = second % 60;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Timer</Text>

      <Text style={styles.timer}>
        {minutes}:{secs < 10 ? `0${secs}` : secs}
      </Text>

      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button
            title={running ? "Stop" : "Start"}
            onPress={() => setRunning((prev) => !prev)}
          />
        </View>

        <View style={styles.button}>
          <Button title="Reset" onPress={() => setSecond(0)} />
        </View>
      </View>

      <TextInput
        ref={inputRef}
        placeholder="Enter Text..."
        placeholderTextColor="#888"
        style={styles.input}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#0f172a",
  },
  title: {
    fontSize: 28,
    color: "#fff",
    textAlign: "center",
    marginBottom: 20,
    fontWeight: "bold",
  },
  timer: {
    fontSize: 48,
    color: "#22c55e", // green timer
    textAlign: "center",
    marginBottom: 30,
    fontWeight: "bold",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
  },
  button: {
    flex: 1,
    marginHorizontal: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#334155",
    borderRadius: 10,
    padding: 12,
    color: "#fff",
    backgroundColor: "#1e293b",
  },
});