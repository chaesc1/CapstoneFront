import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RecoilRoot, useRecoilState } from "recoil";

import LandingPage from "../client/src/pages/LandingPage";
import LoginPage from "../client/src/pages/LoginPage";
import LogoutPage from "../client/src/pages/LogoutPage";
import RegisterPage from "../client/src/pages/RegisterPage";
import MemberMainPage from "../client/src/pages/MemberMainPage";
import GuestMainPage from "../client/src/pages/GuestMainPage";
import CounselingPage from "./src/pages/CounselingPage";
import WordChainPage from "./src/pages/WordChainPage";
import TwentyQuestionPage from "./src/pages/TwentyQuestionPage";
import WordChainLandingPage from "./src/pages/WordChainLandingPage";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <RecoilRoot>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Counseling" component={CounselingPage} />

          <Stack.Screen
            name="WordChainLanding"
            component={WordChainLandingPage}
          />
          <Stack.Screen
            name="LandingPage"
            component={LandingPage}
            options={{
              title: "",
              headerBackTitleVisible: false,
              headerBackImage: "BackBtn",
              headerShown: false,
            }}
          />

          <Stack.Screen name="Guest" component={GuestMainPage} />

          <Stack.Screen name="TwentyQuestion" component={TwentyQuestionPage} />

          <Stack.Screen name="WordChain" component={WordChainPage} />
          <Stack.Screen name="Member" component={MemberMainPage} />
          {/* <Stack.Screen name="Landing" component={LandingPage} /> */}

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
      </NavigationContainer>
    </RecoilRoot>
  );
}

export default App;
