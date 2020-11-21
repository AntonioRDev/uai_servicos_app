
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

import MainStack from "./src/navigation/stacks/main-stack";

const theme = {
  ...DefaultTheme,
  roundness: 10,
  colors: {
    ...DefaultTheme.colors,
    primary: '#283c73',
    accent: '#f18b0f',
    background: 'white'
  },
};

export default function App() {
  return (
    
      <NavigationContainer>
        <PaperProvider theme={theme}>
        <MainStack />
        </PaperProvider>
      </NavigationContainer>
  );
}
