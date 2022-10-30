import { StyleSheet, View, Button, SafeAreaView, FlatList } from "react-native";
import Header from "./Header";
import Input from "./Input";
import { useState } from "react";
import GoalItem from "./GoalItem";

export default function Home({navigation}) {
  const [goals, setGoals] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const makeModalVisible = () => {
    setModalVisible(true);
  };
  const makeModalInvisible = () => {
    setModalVisible(false);
  };

  const onTextAdd = function (newText) {
    const newGoal = { text: newText, key: Math.random() };
    setGoals((prevgoals) => {
      return [...prevgoals, newGoal];
    });
    setModalVisible(false);
  };
  const name = "Mobile Dev";

  function onDelete(deletedKey) {
    setGoals(
      goals.filter((goal) => {
        console.log(deletedKey);
        return goal.key !== deletedKey;
      })
    );
    console.log(goals);
  }

  function itemPressed(goal) {
    console.log("item pressed");
    navigation.navigate('Details', {goalObject:goal});
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer}>
        <Header appName={name} />
        <Button title="Add a Goal" onPress={makeModalVisible} />
      </View>
      <View style={styles.bottomContainer}>
        <FlatList
          data={goals}
          renderItem={({ item }) => {
            console.log(item);
            return (
              <GoalItem
                goal={item}
                onDelete={onDelete}
                onItemPress={itemPressed}
              />
            );
          }}
          contentContainerStyle={styles.scrollViewItems}
        ></FlatList>
      </View>
      <Input
        modal={modalVisible}
        onAdd={onTextAdd}
        onCancel={makeModalInvisible}
      />
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
  },
  scrollViewItems: {
    alignItems: "center",
  },
  textContainer: {
    backgroundColor: "#aaa",
    borderRadius: 5,
    color: "blue",
    padding: 30,
    margin: 30,
  },
  text: { fontSize: 12 },
});
