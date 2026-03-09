import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Pressable,
} from "react-native";
import React from "react";

const LoginForm = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handlelogin = () => {
    if (email === "" || password === "") {
      alert("Please fill all fields");
    } else {
      alert("Welcome! " + email);
    }
  };
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView behavior="padding">
        <Text style={styles.title}>Login Form </Text>
        <TextInput
          placeholder="Enter Email"
          style={styles.input}
          value={email}
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={setEmail}
        />

        <TextInput
          placeholder="Password"
          style={styles.input}
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />

        <Pressable onPress={handlelogin} style={styles.btn}>
          <Text style={styles.text}>Login</Text>
        </Pressable>
      </KeyboardAvoidingView>
    </View>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    alignSelf: "center",
  },
  input: {
    width: 300,
    height: 50,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 20,
    marginBottom: 20,
  },
  btn: {
    alignSelf: "center",
    paddingVertical: 8,
    paddingHorizontal: 26,
    borderRadius: 20,
  },
  text: {
    fontSize: 16,
  },
});
