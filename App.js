import { ScrollView, StatusBar, SafeAreaView, StyleSheet, Text, View, Platform, Button, TextInput } from 'react-native';
import { useState, useEffect, useCallback } from 'react';
/////////////////////////async storage
import AsyncStorage from '@react-native-async-storage/async-storage';
/////////////////////////navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
/////////////////////////
import NomalSignup from './pages/NomalSignup';
import GoogleSignup from './pages/GoogleSignup';





function Default({ navigation }){
  return(
  <View>
    <Button title='google로 시작하기' onPress={() => {
      console.log("google start");
    }}></Button>
    <Button title='회원가입' onPress={() => {
      navigation.navigate('NomalSignup');
  }}></Button>
  </View>
  );
}
export default function App() {
  const Stack = createNativeStackNavigator();
  console.log("reload");
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Default" component={Default} />
      <Stack.Screen name="NomalSignup" component={NomalSignup} />

    </Stack.Navigator>
  </NavigationContainer> 
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
