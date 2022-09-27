import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import React from "react";

export default function Header({appName}) {
  
  return (
    <View>
      <Text style={styles.border}>Open up App.js {appName}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  border: {
    color: "purple",
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
