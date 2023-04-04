import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from "./screens/home";
import Quiz from "./screens/quiz";
import Result from "./screens/result";
import {NavigationContainer} from "@react-navigation/native";
import MyStack from "./navigation";

export default function App() {
  return (
      <NavigationContainer>
        <MyStack/>
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
