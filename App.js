import { View, Text } from "react-native";
import React from "react";
import Home from "./components/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GoalDetails from "./components/GoalDetails";
import { Button } from "react-native";

const Stack = createNativeStackNavigator();
function rightButtonPressed ()
{
    console.log("urgent!!!!"); 
}
function rightButton() {
  return (
    <Button
      title="Urgent"
      onPress={rightButtonPressed}
    />
  );
}
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
          options={({ route }) => ({
            title: route.params.goalObject.text,
            headerRight: rightButton,
          })}
        />
      </Stack.Navigator>
      {/* <Home /> */}
    </NavigationContainer>
  );
}
