import * as React from "react";
import { useState, useRef } from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";
import SubmitButton from "../../components/SubmitButton";
import BackButton from "../../components/BackButton";

export default function ForgotPassword({ navigation }) {
  const [phoneNum, setPhoneNum] = React.useState("");
  const [isClicked, setIsClicked] = React.useState(false);
  const [checkPhone, setCheckPhone] = React.useState(true);

  const backToLogin = () => {
    return (
      // need to go back to login page
      console.log("pressed back")
    );
  }
  
  const isValidPhoneNumber = (phoneNumber) => {
    const phonePattern = /^\d{10}$/;
    return phonePattern.test(phoneNumber);
  };
  
  const handleSendVerificationCode = (phoneNumber) => {
    setIsClicked(true);
    if (isValidPhoneNumber(phoneNumber)) {
      console.log("first");
      setCheckPhone(false);
    } else {
      console.log("second");
      setCheckPhone(true);
    }
    console.log(checkPhone);
    console.log(isClicked);
  };

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
      <BackButton onPress={() => navigation.goBack()}/>
        
        <Text style={styles.ForgotPassword}>Reset Password</Text>
        <View>

          <View style={styles.inputContainer}>
            <Icon name="phone" size={20} color="#C7C6C6" style={styles.icon} />
            <TextInput
              placeholder="Phone Number"
              value={phoneNum}
              onChangeText={(text) => setPhoneNum(text)}
              style={styles.textInput}
              maxLength={10}
            />
          </View>
          <View>
            { isClicked && checkPhone ? (<Text style={styles.errorText}>Please enter a valid 10-digit phone number.</Text>) : 
                                        (<Text style={styles.errorText}>&nbsp;</Text>)}
            </View>
        </View>

        <View style={styles.addSpacing}></View>

        <SubmitButton initialText="Send Text" updatedText="Send Text" onPress={() => handleSendVerificationCode(phoneNum)}/>
      </View>
    </>
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
    borderColor: "#19A7CE",
    borderWidth: 2.5,
    borderRadius: 7,    
  },
  icon: {
    marginRight: 10,
    paddingLeft: 5,
  },
  ForgotPassword: {
    color: "white",
    fontSize: 35,
    marginBottom: 120,
  },
  errorText: {
    display: 'flex',
    color: 'red',
    paddingBottom: 3,
    justifyContent: "center",
  },
  addSpacing: {
    padding: 20,
  },
  bottomSection: {
    marginTop: 200,
  },
  TopSection: {
    marginBottom: 200,
  },
});
