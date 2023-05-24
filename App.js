import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingPage from "../client/src/pages/LandingPage"
import LoginPage from "../client/src/pages/LoginPage"
import QuizPage from "../client/src/pages/QuizPage"
import QuizPage1 from "../client/src/pages/QuizPage1"

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Quiz" component={QuizPage} />
        <Stack.Screen name="Quiz1" component={QuizPage1} />
        <Stack.Screen name="Landing" component={LandingPage} />
        <Stack.Screen name="Login" component={LoginPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;