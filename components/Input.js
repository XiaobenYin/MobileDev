import {
  View,
  Text,
  TextInput,
  Button,
  Modal,
  StyleSheet,
  Image,
} from "react-native";
import { useState } from "react";

export default function Input({ onAdd, modal, onCancel }) {
  const [text, setText] = useState();

  return (
    <Modal visible={modal}>
      <View style={styles.container}>
        <Image
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/2617/2617812.png",
          }}
          style={styles.image}
        />
        {/* <Text>Isnput text: {text} </Text> */}
        <TextInput
          style={styles.input}
          value={text}
          onChangeText={(newText) => {
            setText(newText);
          }}
          placeholder="Please text here: "
        />
        <View style={styles.button}>
        <Button

          title="Enter"
          onPress={() => {
            onAdd(text);
            setText = "";
          }}
        />
        </View>
        <View style={styles.button}>
        <Button
          title="Cancel"
          onPress={() => {
            onCancel();
          }}
        />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    borderBottomColor: "#000000",
    borderBottomWidth: 1,
    margin: 12,
  },
  button: {
    margin: 5,
  },
  image: {
    width: 100,
    height: 100,
  }
});
