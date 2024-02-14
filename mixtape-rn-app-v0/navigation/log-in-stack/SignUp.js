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
import { MaterialCommunityIcons } from "@expo/vector-icons";
import BackButton from "../../components/BackButton";

export default function SignUp({ navigation }) {
  const [phoneNum, setPhoneNum] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
  const [isClicked, setIsClicked] = React.useState(false);
  const [checkPassword, setCheckPassword] = React.useState(false);
  const [checkPhone, setCheckPhone] = React.useState(false);
  const [checkUsernameBlank, setCheckUsernameBlank] = React.useState(false);
  const [checkPasswordBlank, setCheckPasswordBlank] = React.useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const isValidPhoneNumber = (phoneNumber) => {
    const phonePattern = /^\d{10}$/;
    return phonePattern.test(phoneNumber);
  };

  const isValidPassword = (password) => {
    const phonePattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return phonePattern.test(password);
  };

  const handleSendVerificationCode = () => {
    setIsClicked(true);
    if (username == "") {
      setCheckUsernameBlank(true);
    } else {
      setCheckUsernameBlank(false);
    }
    if (!isValidPassword(password)) {
      setCheckPasswordBlank(true);
    } else {
      setCheckPasswordBlank(false);
    }
    if (isValidPhoneNumber(phoneNum)) {
      setCheckPhone(false);
    } else {
      setCheckPhone(true);
    }
    if (password != confirmPassword) {
      setCheckPassword(true);
    } else {
      setCheckPassword(false);
    }
    navigation.navigate("Verification", {
      phoneNum: phoneNum,
    });
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
        <BackButton onPress={() => navigation.goBack()} />
        <Text style={styles.signUpHeader}>Sign Up</Text>

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
        {isClicked && checkPhone && (
          <Text style={styles.errorText}>
            Please enter a valid 10-digit phone number.
          </Text>
        )}

        <View style={styles.inputContainer}>
          <Icon name="user" size={20} color="#C7C6C6" style={styles.icon} />
          <TextInput
            placeholder="Username"
            value={username}
            onChangeText={(text) => setUsername(text)}
            style={styles.textInput}
          />
        </View>
        {isClicked && checkUsernameBlank && (
          <Text style={styles.errorText}>Please enter a valid username</Text>
        )}

        <View style={styles.inputContainer}>
          <Icon name="lock" size={20} color="#C7C6C6" style={styles.icon} />
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={(text) => setPassword(text)}
            style={styles.textInput}
            secureTextEntry={!showPassword}
          />
          {!showPassword && (
            <Icon
              name="eye"
              size={20}
              color="#C7C6C6"
              style={styles.icon}
              onPress={toggleShowPassword}
            />
          )}
          {showPassword && (
            <Icon
              name="eye-off"
              size={20}
              color="#C7C6C6"
              style={styles.icon}
              onPress={toggleShowPassword}
            />
          )}
        </View>
        {isClicked && checkPasswordBlank && (
          <Text style={styles.errorText}>
            Your password should a contain min of 8 characters, at least one
            uppercase and lowecase letter, one number, and one special
            character.
          </Text>
        )}

        <View style={styles.inputContainer}>
          <MaterialCommunityIcons
            name="lock-check-outline"
            size={22}
            color="#C7C6C6"
            style={styles.icon}
          />
          <TextInput
            placeholder="Confirm Password"
            value={confirmPassword}
            onChangeText={(text) => setConfirmPassword(text)}
            style={styles.textInput}
            secureTextEntry={!showConfirmPassword}
            selectionColor={"#000000"}
          />
          {!showConfirmPassword && (
            <Icon
              name="eye"
              size={20}
              color="#C7C6C6"
              style={styles.icon}
              onPress={toggleShowConfirmPassword}
            />
          )}
          {showConfirmPassword && (
            <Icon
              name="eye-off"
              size={20}
              color="#C7C6C6"
              style={styles.icon}
              onPress={toggleShowConfirmPassword}
            />
          )}
        </View>
        {isClicked && checkPassword && (
          <Text style={styles.errorText}>Passwords must be the same</Text>
        )}

        <Pressable
          style={styles.loginButton}
          onPress={handleSendVerificationCode}
        >
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
  signUpHeader: {
    fontSize: 35,
    paddingBottom: 20,
    color: "#C7C6C6",
  },
  errorText: {
    color: "red",
    paddingBottom: 3,
    width: 300,
  },
});
