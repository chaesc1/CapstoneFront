import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LandingPage from "../client/src/pages/LandingPage";
import LoginPage from "../client/src/pages/LoginPage";
import MemberMainPage from "../client/src/pages/MemberMainPage";
import GuestMainPage from "../client/src/pages/GuestMainPage";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Member" component={MemberMainPage} />
        <Stack.Screen name="Guest" component={GuestMainPage} />

        <Stack.Screen name="Landing" component={LandingPage} />

        <Stack.Screen name="Login" component={LoginPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
