import * as React from "react";
import { Button, TextInput, View } from "react-native";




export default function LogIn() {

    const [phoneNum, onChangePhoneNum] = React.useState('Phone Number');
    const [password, onChangePassword] = React.useState('Password');


  return (
    <>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TextInput
        value={phoneNum}></TextInput>
        <TextInput
        value={password}></TextInput>

        <Button
        title="Log In"
        color="#19A7CE"
      />
        
      </View>
    </>
  );
}
