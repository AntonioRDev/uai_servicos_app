import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import CustomTabBar from "../../components/CustomTabBar";

import Profile from "../../screens/Profile";
import Search from "../../screens/Search";
import NewService from "../../screens/NewService";

const Tab = createBottomTabNavigator();

export default () => (
    <Tab.Navigator tabBar={props => <CustomTabBar {...props} />}>
        <Tab.Screen name="Profile" component={Profile} />
        <Tab.Screen name="Search" component={Search}/>
        <Tab.Screen name="NewService" component={NewService}/>
    </Tab.Navigator>
);