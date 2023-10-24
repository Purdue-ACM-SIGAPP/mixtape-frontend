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

export default function SignUp() {
  const [phoneNum, setPhoneNum] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [isPasswordSecure, setIsPasswordSecure] = React.useState(true);
  //https://stackoverflow.com/questions/72373360/adding-an-eye-icon-on-the-right-side-of-the-input-field-in-react-native

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
          <Icon name="phone" size={20} color="#C7C6C6" style={styles.icon} />
          <TextInput
            placeholder="Phone Number"
            value={phoneNum}
            onChangeText={(text) => setPhoneNum(text)}
            style={styles.textInput}
          />
        </View>

        <View style={styles.inputContainer}>
          <Icon name="user" size={20} color="#C7C6C6" style={styles.icon} />
          <TextInput
            placeholder="Username"
            value={username}
            onChangeText={(text) => setUsername(text)}
            style={styles.textInput}
          />
        </View>

        <View style={styles.inputContainer}>
          <Icon name="lock" size={20} color="#C7C6C6" style={styles.icon} />
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={(text) => setPassword(text)}
            style={styles.textInput}
            secureTextEntry={true}
            
          />
          
        </View>

        <View style={styles.inputContainer}>
          <Icon name="lock" size={20} color="#C7C6C6" style={styles.icon} />
          <TextInput
            placeholder="Confirm Password"
            value={confirmPassword}
            onChangeText={(text) => setConfirmPassword(text)}
            style={styles.textInput}
            secureTextEntry={true}
            selectionColor={"#000000"}
          />
        </View>

        <Pressable style={styles.loginButton}>
          <Text style={styles.loginText}>Send Verification Code</Text>
        </Pressable>
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
    //fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  textInput: {
    height: 30,
    width: 300,
    backgroundColor: "#333333",
    textAlign: "left",
    color: "#C7C6C6",
    flex: 1,
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
    marginTop: 10,
    marginBottom: 10,
    borderColor: "#19A7CE",
    borderWidth: 2.5,
    borderRadius: 7,
  },
  icon: {
    marginRight: 10,
    paddingLeft: 5,
  },
});
