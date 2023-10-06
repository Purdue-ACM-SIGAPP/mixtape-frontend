import * as React from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function LogIn() {
  const [phoneNum, setPhoneNum] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#14151E",
        }}
      >

        <Image
        style={styles.mixtapeLogo}
        source={{
          uri: 'https://i.ibb.co/5xqB3BV/mixtape.png',
        }} />


        <TextInput
          placeholder="&#128241; Phone Number"
          value={phoneNum}
          onChangeText={(text) => setPhoneNum(text)}
          style={styles.textInput}
        />
        

        <TextInput
          placeholder="&#128274; Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={styles.textInput}
        />

        <Pressable style={styles.loginButton}>
          <Text style={styles.loginText}>Log In</Text>
        </Pressable>

        <Text>
          <Pressable>
            <Text style={[styles.textOptions, {marginRight: 100,}, ]}>Forgot Password?</Text>
          </Pressable>

          <Pressable>
            <Text style={[styles.textOptions, ]}>Create Account</Text>
          </Pressable>
        </Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  loginButton: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    backgroundColor: "#19A7CE",
    width: 250,
    marginTop: 20,
  },
  loginText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  textInput: {
    height: 40,
    width: 300,
    borderColor: "#19A7CE",
    borderWidth: 2.5,
    marginTop: 20,
    backgroundColor: "#333333",
    textAlign: "center",
    color: "#C7C6C6",
  },
  textOptions: {
    color: "white",
    marginTop: 40,
    textDecorationLine: 'underline',
  },
  mixtapeLogo: {
    width: "250px",
    height: "150px",
    marginBottom: 20,
  }
});
