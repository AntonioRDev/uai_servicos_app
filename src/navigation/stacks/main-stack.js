import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Load from "../../screens/Load";
import Login from "../../screens/Login";
import SignUp from "../../screens/SignUp";

const Stack = createStackNavigator();

export default () => {
    return (
        <Stack.Navigator
            initialRouteName="Load"
            screenOptions={
                {
                    headerShown: false
                }
            }
        >
            <Stack.Screen name="Load" component={Load}/>
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="SignUp" component={SignUp}/>
        </Stack.Navigator>
    )
}