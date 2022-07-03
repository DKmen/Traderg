import React from "react";
import {
  NativeBaseProvider
} from "native-base";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainScreenPage from "./src/screen/MainScreen";
import PreferencePage from "./src/screen/PreferenceScreen";
import Holding from "./src/screen/Holding";
import Trading from "./src/screen/Trading";
import AgreementPage from "./src/screen/AgreementScreen";
import AskToExpertPage from "./src/screen/AskToExpertScreen";
import BankPage from "./src/screen/BankScreen";
import KycPage from "./src/screen/KycScreen";
import ProfilePage from "./src/screen/ProfileScreen";
import OrderPage from "./src/screen/OrderScreen";
import LoginPage from "./src/screen/LoginScreen";
import OtpPage from "./src/screen/OtpScreen";

import CustomBottomNavbar from "./src/components/CustomBottomNavbar";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Mainpage">
          <Stack.Screen options={{ headerShown: false }} name="Mainpage" component={MainScreenPage} />
          <Stack.Screen options={{ headerShown: false }} name="Holding" component={Holding} />
          <Stack.Screen options={{ headerShown: false }} name="Trading" component={Trading} />
          <Stack.Screen options={{ headerShown: false }} name="PreferencePage" component={PreferencePage} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}