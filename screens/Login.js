import { Text, View, TextInput, ImageBackground, TouchableOpacity , KeyboardAvoidingView, Platform } from 'react-native';
import AppStyles from '../styles/AppStyles';
import InlineTextButton from '../components/InlineTextButton';
import React from 'react';
import { auth } from "../firebase";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

export default function Login({ navigation }) {
  if (auth.currentUser) {
    navigation.navigate("ToDo");
  } else {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigation.navigate("ToDo");
      }
    });
  }

  let [errorMessage, setErrorMessage] = React.useState("");
  let [email, setEmail] = React.useState("");
  let [password, setPassword] = React.useState("");

  let login = () => {
    if (email !== "" && password !== "") {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          navigation.navigate("ToDo", { user: userCredential.user });
          setErrorMessage("");
          setEmail("");
          setPassword("");
        })
        .catch((error) => {
          setErrorMessage(error.message)
        });
    } else {
      setErrorMessage("Please enter an email and password");
    }
  }
  return (
    <ImageBackground style={AppStyles.imageContainer}>
      <Text style={[AppStyles.lightText, AppStyles.header]}>Log In</Text>
      <KeyboardAvoidingView
        style={AppStyles.backgroundCover}
        behavior={Platform.OS === "ios" ? "padding" : null}
        keyboardVerticalOffset={60} >
        <Text style={AppStyles.errorText}>{errorMessage}</Text>
        <TextInput
          style={[AppStyles.textInput, AppStyles.lightTextInput, AppStyles.lightText]}
          placeholder='Email'
          placeholderTextColor="#BEBEBE"
          value={email}
          onChangeText={setEmail} />
        <TextInput
          style={[AppStyles.textInput, AppStyles.lightTextInput, AppStyles.lightText]}
          placeholder='Password'
          placeholderTextColor="#BEBEBE"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword} />
          <View style={[AppStyles.rowContainer, AppStyles.rightAligned, AppStyles.rightMargin, AppStyles.topMargin]}>
          <InlineTextButton text="Forgotten your password?" onPress={() => navigation.navigate("ResetPassword")} />
        </View>
        <TouchableOpacity style={AppStyles.btlogin} onPress={login}>
          <Text style={{fontWeight: 'bold', color:'white', fontSize: 20 }}>Log in</Text>
          </TouchableOpacity>
        <View style={[AppStyles.rowContainer, AppStyles.topMargin]}>
          <Text style={AppStyles.lightText}>Don't have an account? </Text>
          <InlineTextButton text="Sign Up" onPress={() => navigation.navigate("SignUp")} />
        </View>
      </KeyboardAvoidingView >
    </ImageBackground>
  );
}

