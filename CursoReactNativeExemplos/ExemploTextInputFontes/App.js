import React from 'react';
import {View,Text, StyleSheet, TextInput, StatusBar, Button} from 'react-native';

const TextInputExample = () => {
  const [text,onChangeText] = React.useState('');
  const [number,onChangeNumber] = React.useState('');
  
  
  const apertou = () => {
    //Check for the Name TextInput
    if (!text.trim()) {
      alert('Faltou Login');
      //return;
    }
    //Check for the Email TextInput
    if (!number.trim()) {
      alert('Faltou Senha');
      //return;
    }
    //Checked Successfully
    //Do whatever you want
    else{
		alert('Success');
	}
  };

  return (
    <View>
		<StatusBar hidden={false} /> 
		<Text style={styles.titulo}>
			Login:	
		</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
		autoComplete ='email'
		autoCapitalize='none'
      />
	  <Text style={styles.titulo}>
			Senha:	
	  </Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}		
        value={number}
        placeholder=""
        keyboardType="numeric"
		secureTextEntry={true}
      />
	  <Button    
       // onPress={() => Alert.alert('Clicou no Vermelho')}
	   onPress={() => apertou()}
	   title = "Botão Vermelho! Clique-me."
		color = "red"		
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
});

export default TextInputExample;
