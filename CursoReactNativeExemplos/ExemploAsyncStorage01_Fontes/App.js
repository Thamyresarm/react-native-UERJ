import React from 'react';
import {View,Text, StyleSheet, TextInput, StatusBar, Button} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const TextInputExample = () => {
  const [token,onChangeToken] = React.useState('');  
  
  const Separator = () => <View style={styles.separator} />;
  
  const apertouGravar = async () => {
	try {
		await AsyncStorage.setItem('token', token);
		} catch (e) {
 		console.log('Deu ruim!!!');
	   }
	};
	
  const apertouLer = async () => {
  try {
    const token = await AsyncStorage.getItem('token');
    if (token !== null) {
      alert(token);
    }
  } catch (e) {
    console.log('Deu ruim!!!');
  }
};
	
  return (
    <View>
		<StatusBar hidden={false} /> 
		<Text style={styles.titulo}>
			Texto para Armazenar:	
		</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeToken}
        value={token}	
      />
      <Separator/>
	  <Button 
	   onPress={() => apertouGravar()}
	   title = "Clique-me para Gravar."
		color = "red"		
      />
	  <Separator/>
	  <Button 
	   onPress={() => apertouLer()}
	   title = "Clique-me para Ler"
		color = "green"		
      />
	  
    </View>
  );
};

const styles = StyleSheet.create({
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
  separator: {
    marginVertical: 8,
    //borderBottomColor: '#737373',
    //borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default TextInputExample;
