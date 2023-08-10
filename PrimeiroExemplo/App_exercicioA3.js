import React, { useState } from 'react'
import { View, Text, Button, StyleSheet, StatusBar } from 'react-native'
import { MinhaPagina } from './components/MinhaPagina/MinhaPagina';

const Separator = () => <View style={styles.separator} />;

const App = () => {
  const [apertou, setApertou] = useState(false);

  return (
    <View style={styles.container}>
      <StatusBar hidden={false} />
      <Text style={styles.title}>
        Exemplo A3
      </Text>
      <Separator />

      <Button       
        onPress={() => setApertou(true)}
        title="Ver Página Web"
        color="green"
      />
      <Separator />
      <Button       
        onPress={() => setApertou(false)}
        title="Inibir Página Web"
        color="red"
      />
      {apertou ? <MinhaPagina />:''}
    </View>

  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 50,
    marginVertical: 40,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
    fontSize: 20,
  },
  separator: {
    marginVertical: 8,
    //borderBottomColor: '#737373',
    //borderBottomWidth: StyleSheet.hairlineWidth,
  },
});


export default App;


