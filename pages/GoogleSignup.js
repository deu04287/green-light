import { ScrollView, StatusBar, SafeAreaView, StyleSheet, Text, View, Platform, Button, TextInput } from 'react-native';
import { useState, useEffect, useCallback } from 'react';
///////////////////////////////////////////////////////////
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
///////////////////////////////////firebase
import app from './firebase';

import {getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
const auth = getAuth(app);
const provider = new GoogleAuthProvider();



export default function GoogleSignup() {

signInWithPopup(auth, provider)
  .then((result) => {
    console.log("success");
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // ...
  }).catch((error) => {
    console.log("error");
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
