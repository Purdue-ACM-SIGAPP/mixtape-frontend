import * as React from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  Linking,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";
import SubmitButton from "../../components/SubmitButton";

export default function ConnectSpotify({ navigation, route }) {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const ContinueToHome = () => {
    console.log("Continue to home page");
    navigation.navigate("Home");
    return false;
  };
  return (
    <View style={styles.page}>
      {route.params.platform.toLowerCase() == "spotify" ? (
        <>
          <View>
            <Image
              style={styles.platformImg}
              source={require("../../assets/spotify.svg")}
            />
          </View>
          <View>
            <Text style={styles.loginText}>Login to your Spotify Account</Text>
          </View>
        </>
      ) : (
        <>
          <Image
            style={styles.platformImg}
            source={require("../../assets/applemusic.svg")}
          />
          <Text style={styles.loginText}>
            Login to your Apple Music Account
          </Text>
        </>
      )}
      <View style={styles.inputContainer}>
        <Icon name="user" size={20} color="#C7C6C6" style={styles.icon} />
        <TextInput
          placeholder={"Username"}
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

      <SubmitButton
        initialText={"Log In"}
        updatedText="Log In"
        onPress={() => {
          ContinueToHome();
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  LinkHolder: {
    flexDirection: "row",
    justifyContent: "center",
  },
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
    fontSize: 24,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: "white",
    marginBottom: 40,
    lineHeight: 30,
    maxWidth: 300,
    textAlign: "center",
  },
  textInput: {
    height: 30,
    width: 300,
    backgroundColor: "#333333",
    textAlign: "left",
    color: "#C7C6C6",
    flex: 1,
  },
  platformImg: {
    width: "150px",
    height: "150px",
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#333333",
    height: 40,
    width: 300,
    marginBottom: 40,
    borderColor: "#19A7CE",
    borderWidth: 2.5,
  },
  icon: {
    marginRight: 10,
    paddingLeft: 5,
  },
  page: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#14151E",
  },
});
