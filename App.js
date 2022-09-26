import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { TextInput } from 'react-native-web';
import Header from './components/Header';
import Input from './components/Input';
import { useState } from 'react';


export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const makeModalVisible = ()=>{setModalVisible(true)};
  const makeModalInvisible = ()=>{setModalVisible(false)};

  const onTextAdd = function (newText) {
    console.log(newText);
    setModalVisible(false)
  };
  const name = "Mobile Dev";

  // const [text, setText] = useState("");
  return (
    <View style={styles.container}>
      <Header appName = {name}/>
      <Button title='Add a Goal' onPress={makeModalVisible} />
      <Input modal={modalVisible} onAdd={onTextAdd} onCancel={makeModalInvisible}/>
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
