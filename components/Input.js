import { View, Text, TextInput, Button } from "react-native";
import { useState } from 'react';

export default function Input({ onAdd }) {
  const [text, setText] = useState();

  return (
    <View>
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
    </View>
  );
}
