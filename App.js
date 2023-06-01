import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image, Button, Alert } from 'react-native';
import Title from './src/components/Title';
import Form from './src/components/Form';

export default function App() {

function alertar(){

  Alert.alert('OK!')

}

  return (
    <View style={styles.container}>
      <Title style={styles.title} title='IMC.Calculator'/>
      <Form/>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
      flex: 1,
      backgroundColor: '#f5f5f5',
      paddingTop: 80,
  } 

});
