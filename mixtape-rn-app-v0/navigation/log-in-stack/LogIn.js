import * as React from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";

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
            uri: "https://i.ibb.co/5xqB3BV/mixtape.png",
          }}
        />

        <View style={styles.inputContainer}>
          <Icon name="phone" size={30} color="#C7C6C6" style={styles.icon} />
          <TextInput
            placeholder="Phone Number"
            value={phoneNum}
            onChangeText={(text) => setPhoneNum(text)}
            style={styles.textInput}
          />
        </View>

        <View style={styles.inputContainer}>
          <Icon name="lock" size={30} color="#C7C6C6" style={styles.icon} />
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={(text) => setPassword(text)}
            style={styles.textInput}
          />
        </View>

        <Pressable style={styles.loginButton}>
          <Text style={styles.loginText}>Log In</Text>
        </Pressable>

        <Text>
          <Pressable>
            <Text style={[styles.textOptions, { marginRight: 100 }]}>
              Forgot Password?
            </Text>
          </Pressable>

          <Pressable>
            <Text style={[styles.textOptions]}>Create Account</Text>
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
    height: 30,
    width: 300,
    backgroundColor: "#333333",
    textAlign: "left",
    color: "#C7C6C6",
  },
  textOptions: {
    color: "white",
    marginTop: 40,
    textDecorationLine: "underline",
  },
  mixtapeLogo: {
    width: "250px",
    height: "150px",
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#333333",
    height: 40,
    width: 300,
    marginTop: 20,
    marginBottom: 20,
    borderColor: "#19A7CE",
    borderWidth: 2.5,
  },
  icon: {
    marginRight: 10,
  },
});
