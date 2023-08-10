import React from 'react';
import {View,Text, StyleSheet, TextInput, StatusBar, Button} from 'react-native';

const TextInputButtonExample = () => {
  const [text,onChangeText] = React.useState('');
  const [number,onChangeNumber] = React.useState('');
  
  
  const apertou = () => {    
    if (!text.trim()) {
      alert('Faltou Login');      
    }    
    if (!number.trim()) {
      alert('Faltou Senha');     
    }    
    else{
		alert('Partiu!!!');
	}
  };

  return (
       <View style={styles.container}>
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
			<View style={{marginTop: 25}}>
				<Button  				
					onPress={apertou}
					title = "Submeter"
					color="#606070"
						
				/>	
			</View>		
		</View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
  },
  input: {
    width: '100%',
    height: 40,
    paddingHorizontal: 5,
    borderWidth: 0.5,
    marginTop: 15,	
  },
  titulo: {    
    margin: 6,    
    padding: 5,
	fontWeight: 'bold',
  },
  
});

export default TextInputButtonExample;
