import { View, Text, TextInput, Button, Modal, StyleSheet } from "react-native";
import { useState } from 'react';

export default function Input({ onAdd, modal, onCancel }) {
  const [text, setText] = useState();

  return (
    <Modal visible={modal}>
    <View style={styles.container}>
      {/* <Text>Isnput text: {text} </Text> */}
      <TextInput
        value={text}
        onChangeText={(newText) => {
          setText(newText);
        }}
        placeholder="Please text here: "
      />
      <Button
        title="Enter"
        onPress={() => {
          onAdd(text);
          setText = "";
        }}
      />
      <Button
        title="Cancel"
        onPress={()=>{onCancel()}}
      />
    </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
