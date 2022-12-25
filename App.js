import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {

  const [labelText, setLabelText] = useState("Нажмите для получения")

  function click(){

    setLabelText(new Date().toDateString())
  }

  return (
    <View style={styles.container}>
      <Text>Текущая дата:</Text>
      <Text>{labelText}</Text>
      <Button title='получить дату' onPress={click}></Button>
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
