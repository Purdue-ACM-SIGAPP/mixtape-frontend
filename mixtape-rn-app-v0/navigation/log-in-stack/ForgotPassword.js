import * as React from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";
import SubmitButton from "../../components/SubmitButton";

export default function ForgotPassword() {
  const [phoneNum, setPhoneNum] = React.useState("");

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
        <Text style={styles.ForgotPassword}>Reset Password</Text>

        <View style={styles.inputContainer}>
          <Icon name="phone" size={20} color="#C7C6C6" style={styles.icon} />
          <TextInput
            placeholder="Phone Number"
            value={phoneNum}
            onChangeText={(text) => setPhoneNum(text)}
            style={styles.textInput}
          />
        </View>

        <SubmitButton initialText="Submit" updatedText="Sent!" onPress={sendResetText} />

        <Text>
          <Pressable>
            <Text onPress={backToLogin} style={[styles.textOptions]}>
              Back
            </Text>
          </Pressable>
        </Text>
      </View>
    </>
  );
}

const sendResetText = () => {
  return (
    // need to send a text to reset the password and go back to login page
    console.log("pressed submit")
  );
}
const backToLogin = () => {
  return (
    // need to go back to login page
    console.log("pressed back")
  );
}

const styles = StyleSheet.create({
  textInput: {
    height: 30,
    width: 300,
    backgroundColor: "#333333",
    textAlign: "left",
    color: "#C7C6C6",
    flex: 1,
  },
  textOptions: {
    color: "white",
    marginTop: 10,
    textDecorationLine: "underline",
    justifyContent: "center",
    
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#333333",
    height: 40,
    width: 300,
    marginTop: 75,
    marginBottom: 75,
    borderColor: "#19A7CE",
    borderWidth: 2.5,
  },
  icon: {
    marginRight: 10,
    paddingLeft: 5,
  },
  ForgotPassword: {
    color: "white",
    fontSize: 35,
    marginBottom: 60,
  },
});
