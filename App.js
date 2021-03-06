import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import Toast from "react-native-toast-message";
import GlobalProvider from "./src/contexts/Global";

import MainStack from "./src/navigation/stacks/main-stack";

const theme = {
  ...DefaultTheme,
  roundness: 10,
  colors: {
    ...DefaultTheme.colors,
    primary: "#1e387d",
    accent: "#f18b0f",
    background: "white",
  },
};

export default function App() {
  return (
    <GlobalProvider>
      <NavigationContainer>
        <PaperProvider theme={theme}>
          <MainStack />
        </PaperProvider>
        <Toast ref={(ref) => Toast.setRef(ref)} />
      </NavigationContainer>
    </GlobalProvider>
  );
}
