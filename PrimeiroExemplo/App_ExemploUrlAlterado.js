import React, { useState } from 'react'
import { View, Text, Button, StyleSheet, StatusBar, TextInput } from 'react-native'
import { MinhaPagina } from './components/MinhaPagina/MinhaPagina';

const Separator = () => <View style={styles.separator} />;

const App = () => {
  const [apertado, setApertado] = useState(false);
  const [url,onChangeUrl] = React.useState('');

  const apertou = () => {
    if (!url.trim()) {
      alert('Faltou a URL');      
    }else{ 
      console.log(url)
      setApertado(true);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar hidden={false} />
      <Text style={styles.title}>
        Exemplo A3
      </Text>
      <Separator />
      <Text style={styles.titulo}>
        URL:
      </Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeUrl}
        value={url}
       // autoComplete='email'
        autoCapitalize='none'
      />
      <Separator />
      <Button
        onPress={() => apertou()}
        title="Ver Página Web"
        color="green"
      />
      <Separator />
      <Button
        onPress={() => setApertado(false)}
        title="Inibir Página Web"
        color="red"
      />
      {apertado ? <MinhaPagina url= {url} /> : ''}
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
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  titulo: {    
    margin: 6,    
    padding: 5,
	fontWeight: 'bold',
  },
});


export default App;


