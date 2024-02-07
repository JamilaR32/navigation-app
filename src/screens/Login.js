import { Button, Text, TextInput, TouchableOpacity, View } from "react-native";
import React from "react";
import ROUTES from "../navigation";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 5,
        backgroundColor: "#F5EEF8",
      }}
    >
      <Text>Username</Text>
      <TextInput
        placeholder="Write your username ..."
        style={{
          borderColor: "black",
          borderCurve: "circular",
          borderWidth: 0.5,
          borderRadius: 20,
          width: "60%",
          backgroundColor: "#D7BDE2",
        }}
      ></TextInput>
      <Text>Password</Text>
      <TextInput
        placeholder="Write your password"
        style={{
          borderColor: "black",
          borderCurve: "circular",
          borderWidth: 0.5,
          borderRadius: 20,
          width: "60%",
          backgroundColor: "#D7BDE2",
        }}
      ></TextInput>
      <Button title="Login" />
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <Text>Don't have an account?</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate(ROUTES.AUTH_NAVIGATION.SIGNUP);
          }}
        >
          <Text
            style={{
              color: "blue",
            }}
          >
            JoinUs
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
