import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { LoginScreen } from "./app/screens/LoginScreen";
import { RegisterScreen } from './app/screens/RegisterScreen';
import { HomeScreen } from './app/screens/HomeScreen';


const NativeStackNav = createNativeStackNavigator();


function LoginNav() {
  return (
    <NativeStackNav.Navigator>
      <NativeStackNav.Screen
        name="LOGIN"
        component={LoginScreen}
        options={{ headerShown: false }}
      ></NativeStackNav.Screen>
      <NativeStackNav.Screen
        name="REGISTER"
        component={RegisterScreen}
        options={{ headerShown: false }}
      ></NativeStackNav.Screen>
       <NativeStackNav.Screen
        name="HOME"
        component={HomeScreen}
        options={{ headerShown: false }}
      ></NativeStackNav.Screen>
    </NativeStackNav.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      {/* {console.log("global.rol",global.rol)}
      {login==true ? (
        global.rol == "admin" ? (
          <RootNavAdmin />
        ) : (global.rol == "cliente") ? (
          <RootNav />
        ) : (<LoginNav />)
      ) : (
        <LoginNav />
      )}
         */}
      <LoginNav />

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
