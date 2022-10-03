import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, SafeAreaView } from "react-native";
import { TextInput } from "react-native-web";
import Header from "./components/Header";
import Input from "./components/Input";
import { useState } from "react";

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const makeModalVisible = () => {
    setModalVisible(true);
  };
  const makeModalInvisible = () => {
    setModalVisible(false);
  };

  const onTextAdd = function (newText) {
    const newGoal = { text: newText, key: Math.random() };
    setGoals((goals) => {
      return [...goals, newGoal];
    });
    console.log(goals);
    setModalVisible(false);
  };
  const name = "Mobile Dev";

  // const [text, setText] = useState("");
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer}>
        <Header appName={name} />
        <Button title="Add a Goal" onPress={makeModalVisible} />
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.textContainer}>
          <Text style={styles.text}>You Typed..</Text>
        </Text>
      </View>
      <Input
        modal={modalVisible}
        onAdd={onTextAdd}
        onCancel={makeModalInvisible}
      />
      {/* <StatusBar style="auto" /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    justifyContent: "center",
  },
  topContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bottomContainer: {
    flex: 4,
    backgroundColor: "pink",
    alignItems: "center",
  },
  textContainer: {
    backgroundColor: "#aaa",
    borderRadius: 5,
    color: "blue",
  },
  text: {
    color: "green",
  },
});
