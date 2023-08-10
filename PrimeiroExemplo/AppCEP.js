import React from 'react';
import {View,Text, StyleSheet, TextInput, StatusBar, Button} from 'react-native';


const ExemploPegaCEP = () => {  
  const [cepnumber,onChangeNumber] = React.useState('');
  const [logradouro,onLogradouro] = React.useState('');
  const [bairro,onBairro] = React.useState('');
  const [localidade,onLocalidade] = React.useState('');
  const [encontrou,onEncontrou] = React.useState(true);
  
  
  const PegaCEP = async () => {
    try {
      const response = await fetch('http://152.92.181.90:8080/CursoJavaScript/PegaCEPJson',{	  
	  method: 'POST',
      headers: {
			//	Accept: 'application/json','Content-Type': 'application/json;charset=UTF-8',			
			 'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
		},
      body: JSON.stringify({cep: cepnumber})
      }); 
	  console.log(response);
	  if (!response.ok) {
			alert('Algo não funcionou: ' +  response.status);			
	  }	  
	  else{		  
		const json = await response.json();
		onLogradouro(json.logradouro);	
		onBairro(json.bairro);
		onLocalidade(json.localidade);
		onEncontrou(json.encontrou);
	  }	  
    } catch (error) {
      console.error(error);
    } 
  };
  
  
  const apertou = () => {      
    if (!cepnumber.trim()) {
      alert('Tem que digitar!!!' );     
    }
	else if (cepnumber.trim().length<8) {		
      alert('Tem que ter 8 dígitos!!!');     
    }     
    else{		
		PegaCEP();
	}
  };

  return (
       <View style={styles.container}>
		<StatusBar hidden={false} /> 
			<Text style={styles.titulo}>
				CEP:	
			</Text>
			<TextInput
				style={styles.input}
				onChangeText={onChangeNumber}
				value={cepnumber}
				keyboardType="numeric"
				autoCapitalize='none'
			/>			
			<View style={{marginTop: 25}}>
				<Button  				
					onPress={apertou}
					title = "Submeter"
					color="#606070"						
				/>	
			</View>	
			<Text style={styles.titulo}>
				Logradouro:	{encontrou ? logradouro : '?'}
			</Text>
			<Text style={styles.titulo}>
				Bairro:	{encontrou ? bairro : '?'}
			</Text>
			<Text style={styles.titulo}>
				Localidade:	{encontrou ? localidade: '?'}
			</Text>
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

export default ExemploPegaCEP;
