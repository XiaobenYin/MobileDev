import { View, Text } from "react-native";
import React from "react";
import Home from "./components/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GoalDetails from "./components/GoalDetails";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#995099" },
          headerTintColor: "#fff",
          headerTitleAlign: "center",
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "All My Goals " }}
        />
        <Stack.Screen
          name="GoalDetails"
          component={GoalDetails}
          options={({ route }) => ({ title: route.params.goalObject.text })}
        />
      </Stack.Navigator>
      {/* <Home /> */}
    </NavigationContainer>
  );
}
