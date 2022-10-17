import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  FlatList,
} from "react-native";

export default function GoalItem({ goal, onDelete }) {
  return (
    <View style={styles.goalTextContainer}>
      <Text style={styles.goalText}> {goal.text} </Text>
      <View style={styles.button}>
        <Button
          title="X"
          onPress={() => onDelete(goal.key)}
          color="#444"
        ></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  goalTextContainer: {
    margin: 8,
    borderRadius: 5,
    backgroundColor: "#aaa",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },

  goalText: {
    fontSize: 18,
    color: "#929",
    // backgroundColor:'#aaa',
    padding: 8,
  },
});
