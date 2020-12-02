import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "../../screens/Login";
import Load from "../../screens/Load";
import SignUp from "../../screens/SignUp";
import RegisterProvider from "../../contexts/Register";
import SeeMore from "../../screens/SeeMore";
import MainTab from "./main-tab";

const Stack = createStackNavigator();

const makeSignUp = () => {
  return (
    <RegisterProvider>
      <SignUp />
    </RegisterProvider>
  );
};

export default () => {
  return (
    <Stack.Navigator
      initialRouteName="Load"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Load" component={Load} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={makeSignUp} />
      <Stack.Screen name="MainTab" component={MainTab} />
      <Stack.Screen name="SeeMore" component={SeeMore} />
    </Stack.Navigator>
  );
};
