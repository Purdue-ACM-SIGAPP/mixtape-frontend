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
import { TouchableOpacity, Linking } from 'react-native';


export default function Verification({ navigation }) {
  const [isClicked, setIsClicked] = React.useState(false);
  const [checkValid, setCheckValid] = React.useState(true);
  const [code, setCode] = React.useState("");

  const backToLogin = () => {
    return (
      
      // need to go back to login page
      navigation.goBack()
      //navigation.navigate('SignUp')
      //console.log("pressed back")
      
    );
  }

  const tryAgain = () => {
      // Handle the link press action here
      Linking.openURL('https://youtube.com');
      console.log("pressed back");
    };
  const VerificationCode = (code) => {
    navigation.navigate("AfterCreateAcc");
    return false;
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
        
        <Text style={styles.ForgotPassword}>Enter Verification Code</Text>
        <Text style={styles.SubheaderGreen}>Verification sent to XXX-XXX-XXXX</Text>
        <View>

          <View style={styles.inputContainer}>
            <Icon name="lock" size={20} color="#C7C6C6" style={styles.icon} />
            <TextInput
              placeholder="Verification Code"
              value={code}
              onChangeText={(text) => setCode(text)}
              style={styles.textInput}
              maxLength={10}
            />
          </View>
          <View>
            { isClicked && checkValid ? (<Text style={styles.errorText}>Incorrect. Try again.</Text>) : 
                                        (<Text style={styles.errorText}>&nbsp;</Text>)}
            </View>
        </View>
        <Text style={styles.Subheader}>
        Didn't receive it?&nbsp;&nbsp;
        <Text style={[styles.Subheader, styles.underline]} onPress={tryAgain}>Resend</Text>
        </Text>

        <View style={styles.addSpacing}></View>

        <SubmitButton initialText="Submit" updatedText="Submit" onPress={() => VerificationCode(code)}/>
        <BackButton onPress={() => navigation.goBack()}/>
        <Text style={[styles.SubheaderBottom, styles.underline]} onPress={backToLogin}>Back to Sign Up</Text>
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
  underline: {
    textDecorationLine: 'underline', 
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
    marginBottom: 20,
  },
  SubheaderGreen: {
    color: "#60DE83",
    fontSize: 15,
    marginBottom: 80,
  },
  Subheader: {
    color: "white",
    fontSize: 15,
    marginBottom: 80,
  },
  SubheaderBottom: {
    color: "white",
    fontSize: 15,
    marginBottom: 40,
    position: "absolute",
    bottom: 0,
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