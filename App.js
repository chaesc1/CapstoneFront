import * as React from 'react';
import { View, Text } from 'react-native';
import LogoutPage from "../client/src/pages/LogoutPage"
import LandingPage from "../client/src/pages/LandingPage"
import LoginPage from "../client/src/pages/LoginPage"
import RegisterPage from "../client/src/pages/RegisterPage"

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



const Stack = createNativeStackNavigator();
 
const landingPage = "LandingPage";
const loginPage = "LoginPage";


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
      initialRouteName='LandingPage'
      screenOptions = {{ cardStyle: {backgroundColor: '#f3e99f'} }}>
        {/* MainPage */}
        <Stack.Screen 
          name={landingPage} 
          component={LandingPage}
          options={{
            title: '',
            headerBackTitleVisible: false,
            headerBackImage: "BackBtn",
            headerShown: false
          }}
          />
        {/* LoginPage */}
        <Stack.Screen 
          name="Login" 
          component={LoginPage}
          options={{
            title: '',
            headerBackTitleVisible: false,
            headerBackImage: "BackBtn",
            headerStyle:{
              backgroundColor : "#f3e99f",
            },
          }}
          />

        <Stack.Screen 
          name="Register" 
          component={RegisterPage}
          options={{
            title: '',
            headerBackTitleVisible: false,
            headerBackImage: "BackBtn",
            headerStyle:{
              backgroundColor : "#f3e99f",
            },
          }}
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;