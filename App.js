import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabs from "./navigation/BottomTabs";

import { createStore } from "redux";
import rootReducer from "./store/index";
import { Provider } from "react-redux";

const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <BottomTabs />
      </NavigationContainer>
      <StatusBar style="auto" backgroundColor="white" />
    </Provider>
  );
}
