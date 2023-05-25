import * as React from "react";
import LogoutPage from "../client/src/pages/LogoutPage";
import RegisterPage from "../client/src/pages/RegisterPage";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LandingPage from "../client/src/pages/LandingPage";
import LoginPage from "../client/src/pages/LoginPage";
import MemberMainPage from "../client/src/pages/MemberMainPage";
import GuestMainPage from "../client/src/pages/GuestMainPage";
import CounselingPage from "./src/pages/CounselingPage";
import WordChainPage from "./src/pages/WordChainPage";
import TwentyQuestionPage from "./src/pages/TwentyQuestionPage";
import WordChainLandingPage from "./src/pages/WordChainLandingPage";

const Stack = createNativeStackNavigator();

const landingPage = "LandingPage";
const loginPage = "LoginPage";

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LandingPage"
        screenOptions={{ cardStyle: { backgroundColor: "#f3e99f" } }}>
        {/* MainPage */}
        <Stack.Screen
          name={landingPage}
          component={LandingPage}
          options={{
            title: "",
            headerBackTitleVisible: false,
            headerBackImage: "BackBtn",
            headerShown: false,
          }}
        />
        {/* LoginPage */}
        <Stack.Screen
          name="Login"
          component={LoginPage}
          options={{
            title: "",
            headerBackTitleVisible: false,
            headerBackImage: "BackBtn",
            headerStyle: {
              backgroundColor: "#f3e99f",
            },
          }}
        />

        <Stack.Screen
          name="Register"
          component={RegisterPage}
          options={{
            title: "",
            headerBackTitleVisible: false,
            headerBackImage: "BackBtn",
            headerStyle: {
              backgroundColor: "#f3e99f",
            },
          }}
        />
      </Stack.Navigator>
      <Stack.Navigator>
        <Stack.Screen name="Guest" component={GuestMainPage} />
        <Stack.Screen
          name="WordChainLanding"
          component={WordChainLandingPage}
        />
        <Stack.Screen name="TwentyQuestion" component={TwentyQuestionPage} />
        <Stack.Screen name="Counseling" component={CounselingPage} />

        <Stack.Screen name="WordChain" component={WordChainPage} />
        <Stack.Screen name="Landing" component={LandingPage} />
        <Stack.Screen name="Member" component={MemberMainPage} />

        <Stack.Screen name="Login" component={LoginPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
