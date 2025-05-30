import { Text, View, TextInput, ImageBackground, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import AppStyles from '../styles/AppStyles';
import InlineTextButton from '../components/InlineTextButton';
import React from 'react';
import { auth } from "../firebase";
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";

export default function SignUp({ navigation }) {

    let [email, setEmail] = React.useState("");
    let [password, setPassword] = React.useState("");
    let [confirmPassword, setConfirmPassword] = React.useState("");
    let [validationMessage, setValidationMessage] = React.useState("");

    let validateAndSet = (value, valueToCompare, setValue) => {
        if (value !== valueToCompare) {
            setValidationMessage("Passwords do not match.");
        } else {
            setValidationMessage("");
        }

        setValue(value);
    };

    let signUp = () => {
        if (password === confirmPassword) {
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    sendEmailVerification(auth.currentUser);
                    navigation.navigate("ToDo", { user: userCredential.user });
                })
                .catch((error) => {
                    setValidationMessage(error.message);
                });
        }
    }

    return (
        <ImageBackground style={AppStyles.imageContainer}>
            <Text style={[AppStyles.lightText, AppStyles.header]}>Sign Up</Text>
            <KeyboardAvoidingView
                style={AppStyles.backgroundCover}
                behavior={Platform.OS === "ios" ? "padding" : null}
                keyboardVerticalOffset={60}>
                <Text style={[AppStyles.errorText]}>{validationMessage}</Text>
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
                    onChangeText={(value) => validateAndSet(value, confirmPassword, setPassword)} />
                <TextInput
                    style={[AppStyles.textInput, AppStyles.lightTextInput, AppStyles.lightText]}
                    placeholder='Confirm Password'
                    placeholderTextColor="#BEBEBE"
                    secureTextEntry={true}
                    value={confirmPassword}
                    onChangeText={(value) => validateAndSet(value, password, setConfirmPassword)} />
                <TouchableOpacity style={AppStyles.btlogin} onPress={signUp}>
          <Text style={{fontWeight: 'bold', color:'white', fontSize: 20 }}>Sign Up</Text>
          </TouchableOpacity>
                <View style={[AppStyles.rowContainer, AppStyles.topMargin]}>
                    <Text style={AppStyles.lightText}>Already have an account? </Text>
                    <InlineTextButton text="Login" onPress={() => navigation.popToTop()} />
                </View>
            </KeyboardAvoidingView>
        </ImageBackground>
    );
}

