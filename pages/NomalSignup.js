import { ScrollView, StatusBar, SafeAreaView, StyleSheet, Text, View, Platform, Button, TextInput } from 'react-native';
import { useState, useEffect, useCallback } from 'react';

import app from './firebase';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const auth = getAuth(app);

export default function NomalSignup({ navigation }) {
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');

    return (
        <View>
            <View>
                <Text>아이디</Text>
                <TextInput value={id} onChange={(e) => {
                    e.preventDefault();
                    const { eventCount, target, text } = e.nativeEvent;
                    setId(text);
                }} />
            </View>
            <View>
                <Text>비번</Text>
                <TextInput value={pw} onChange={(e) => {
                    e.preventDefault();
                    const { eventCount, target, text } = e.nativeEvent;
                    setPw(text);
                }} />
            </View>
            <Button title='회원가입' onPress={(e) => {
                e.preventDefault();
                console.log(id);
                console.log(pw);
                // createUserWithEmailAndPassword(auth, id, pw)
                //     .then((userCredential) => {
                //         // Signed in 
                //         console.log("success");
                //         const user = userCredential.user;
                //         // ...
                //     })
                //     .catch((error) => {
                //         console.log("fail");
                //         const errorCode = error.code;
                //         const errorMessage = error.message;
                //         // ..
                //     });
                // navigation.navigate('Default');
            }} />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
