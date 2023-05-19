import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LandingPage from "../client/src/pages/LandingPage";
import LoginPage from "../client/src/pages/LoginPage";
import CounselingPage from "./src/pages/CounselingPage";
import WordChainPage from "./src/pages/WordChainPage";
import TwentyQuestionPage from "./src/pages/TwentyQuestionPage";
import WordChainLandingPage from "./src/pages/WordChainLandingPage";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="WordChainLanding"
          component={WordChainLandingPage}
        />
        <Stack.Screen name="TwentyQuestion" component={TwentyQuestionPage} />
        <Stack.Screen name="WordChain" component={WordChainPage} />
        <Stack.Screen name="Counseling" component={CounselingPage} />
        <Stack.Screen name="Landing" component={LandingPage} />
        <Stack.Screen name="Login" component={LoginPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
