import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/Login';
import Home from './src/Home/Home';
import Details from './src/Home/Details';
import firebase from "firebase/app"
import firebaseConfig from './src/firebase-config';
import SignUp from './src/SignUp';

const Stack = createNativeStackNavigator();

export default function App() {

  if (!firebase.apps.length){
    console.log('Connected to firebase');
    firebase.initializeApp(firebaseConfig)
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="SignUp" component={SignUp} options={{title:"Register"}}  />
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
        <Stack.Screen name="Home" component={Home} options={{title:"Home"}}  />
        <Stack.Screen name="Details" component={Details} options={{title:"Services"}}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});