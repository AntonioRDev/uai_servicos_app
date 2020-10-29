import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Load from "../../screens/Load";
import Login from "../../screens/Login";
import SignUp from "../../screens/SignUp";
import RegisterProvider from "../../contexts/Register";

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
    </Stack.Navigator>
  );
};
