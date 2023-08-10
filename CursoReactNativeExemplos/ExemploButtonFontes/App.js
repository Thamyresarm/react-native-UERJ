import React, { Component } from 'react'
import {TouchableOpacity, SafeAreaView,View,Text,Button,Alert,StyleSheet,StatusBar} from 'react-native'

const Separator = () => <View style={styles.separator} />;

const apertou = ()=> {Alert.alert('Clicou no Vermelho')};

const App = () => { 
 return (
 
 <View style={styles.container}>
      <StatusBar hidden={false} /> 
      <Text style={styles.title}>
        Exemplo com buttons!!!
      </Text>	
	  <Separator />

      <Button    
       ///// onPress={() => Alert.alert('Clicou no Vermelho')}
	   onPress={() => apertou()}
	   title = "Botão Vermelho! Clique-me."
		color = "red"		
      />
	  <Separator />
	  <Button        
        onPress={() => Alert.alert('Clicou no Verde')}
		title = "Botão Verde! Clique-me."
		color = "green"
      />
 </View> 
 
)};

const styles = StyleSheet.create({
  container: {
    flex: 1,   
    marginHorizontal: 50,  
	marginVertical: 40,	
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
	fontSize:20,
  },  
  separator: {
    marginVertical: 8,
    //borderBottomColor: '#737373',
    //borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

 
export default App;


