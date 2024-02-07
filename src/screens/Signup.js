import { Button, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import ROUTES from "../navigation";

const Signup = () => {
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
      <Image
        style={{
          width: 100,
          height: 100,
          borderRadius: 100,
        }}
        source={{
          uri: "https://st2.depositphotos.com/3591429/10244/i/450/depositphotos_102445168-stock-photo-diverse-people-holding-hands.jpg",
        }}
      />
      <Text>Full Name</Text>
      <TextInput
        placeholder="Write your full name ..."
        style={{
          borderColor: "black",
          borderCurve: "circular",
          borderWidth: 0.5,
          borderRadius: 20,
          width: "60%",
          backgroundColor: "#D7BDE2",
        }}
      ></TextInput>
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
      <Button color="#6C3483" title="SignUp" />
      <View
        style={{
          flexDirection: "row",
          gap: 5,
        }}
      >
        <Text>Already a user?</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate(ROUTES.AUTH_NAVIGATION.LOGIN);
          }}
        >
          <Text
            style={{
              color: "#FF33CE",
            }}
          >
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Signup;
