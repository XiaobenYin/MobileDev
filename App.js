import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-web';
import Header from './components/Header';
import Input from './components/Input';


export default function App() {
  const onTextAdd = function (newText) {
    console.log(newText)
  }
  const name = "Mobile Dev";
  // const [text, setText] = useState("");
  return (
    <View style={styles.container}>
      <Header appName = {name}/>
      <Input onAdd = {onTextAdd}/>
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
