import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-web';
import Header from './components/Header';


export default function App() {
  const name = "Mobile Dev";
  const [text, setText] = useState("");
  return (
    <View style={styles.container}>
      <Header appName = {name}/>
      <Text>Input text: {text} </Text>
      <TextInput 
        value = {text}
        onChangeText={(newText) => {setText(newText)}}
        placeholder="Please text here: "
        />
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
