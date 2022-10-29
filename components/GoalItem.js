import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  FlatList,
} from "react-native";
import DeleteButton from "./DeleteButton";

export default function GoalItem({ goal, onDelete, onItemPress }) {
  function deletePressed() {
    onDelete(goal.key);
  }
  return (
    <Pressable
      onPress={onItemPress}
      android_ripple={{ color: "#223355", foreground: true }}
      style={({pressed}) => {
        return pressed && styles.pressed;
      }}
    >
      <View style={styles.goalTextContainer}>
        <Text style={styles.goalText}> {goal.text} </Text>
        <View style={styles.button}>
          {/* <Button
            title="X"
            onPress={() => onDelete(goal.key)}
            color="#444"
          ></Button> */}
          <DeleteButton onButtonPressed={deletePressed}/>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  goalTextContainer: {
    margin: 8,
    borderRadius: 5,
    padding: 5,
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
  pressed: {
    backgroundColor: "#222",
    opacity: 0.5,
  },
});
